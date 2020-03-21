import { Point } from "jsqr/dist/locator";

function getRuntimeConfig(): RuntimeConfig {
  return JSON.parse(document.getElementById("runtime-config").innerHTML);
}

const runtimeConfig = getRuntimeConfig();
const { ENV, API_HOST } = runtimeConfig;

// Remove Console Log for non-dev environment
console.log = ENV === "dev" ? console.log : function() {};

console.log("runtime config: ", runtimeConfig);

if (API_HOST == null) {
  throw new Error("API_HOST not in runtime config!");
}

var router = (function() {
  return {
    genQR: function(dvid: string, elementId: string) {
      new QRCode(document.getElementById(elementId)!, {
        text: `${API_HOST}/s/${dvid}`,
        width: 300,
        height: 300,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    },
    create: function(
      inputs: { ip?: string; fingerprint?: string } | undefined,
      cb?: (inputs?: { ip?: string; fingerprint?: string }) => void
    ) {
      var uniqD = Date.now();

      const ip = inputs && inputs.ip ? inputs.ip : undefined;
      const fingerprint =
        inputs && inputs.fingerprint ? inputs.fingerprint : undefined;

      var opts: JQuery.AjaxSettings = {
        url: `${API_HOST}/c/${uniqD}`,
        data: JSON.stringify({
          ip,
          fingerprint
        }),
        cache: false,
        dataType: "json",
        contentType: "application/json",
        processData: false,
        type: "POST",
        success: function(data: { dvid: string }) {
          console.log("Device ID Created:", data.dvid);
          localStorage.setItem("dvid", String(data.dvid));
          $("#register-notice-agree").removeClass("btn-loading");
          $("#mobile-functions").removeClass("d-none");
          $("#registration-notice").addClass("d-none");

          $("#modal-register-notice").modal("hide");
          router.genQR(data.dvid, "qrcode");
          // TODO is this the best way to trigger a variable redirect?
          if ($("#modal-register-notice").attr("data-redirect") === "true") {
            $("#modal-register-notice").attr("data-redirect", "false");
            $('a[href="#page-code"]').tab("show");
          }
          if (cb) {
            cb(inputs);
          }
        },
        error: err => {
          console.log(err);
          //todo
        }
      };
      jQuery.ajax(opts);
    },
    createAlt: function(
      inputs: { ip?: string; fingerprint?: string } | undefined,
      cb?: Function
    ) {
      var dvid = localStorage.getItem("dvid");
      var dvid_c = localStorage.getItem("dvid_alt")
        ? JSON.parse(localStorage.getItem("dvid_alt")!).length
        : 0;
      const ip = inputs && inputs.ip ? inputs.ip : undefined;
      const fingerprint =
        inputs && inputs.fingerprint ? inputs.fingerprint : undefined;

      var opts: JQuery.AjaxSettings = {
        url: `${API_HOST}/ca/${dvid}`,
        data: JSON.stringify({
          dvid,
          dvid_c,
          ip,
          fingerprint
        }),
        cache: false,
        dataType: "json",
        contentType: "application/json",
        processData: false,
        type: "POST",
        success: function(data: { success: boolean; dvid: string }) {
          if (data.success === true) {
            console.log(data.dvid);
            var dvid_alts = localStorage.getItem("dvid_alt")
              ? JSON.parse(localStorage.getItem("dvid_alt")!)
              : [];
            dvid_alts.push(data.dvid);
            localStorage.setItem("dvid_alt", JSON.stringify(dvid_alts));
            console.log(JSON.parse(localStorage.getItem("dvid_alt")!));
            var newLength = JSON.parse(localStorage.getItem("dvid_alt")!)
              .length;
            var template = $("#template-code-alt").clone();
            template
              .find(".title-code-alt")
              .text("Alternative Code " + newLength);
            template.attr("data-id", data.dvid);
            template.removeAttr("id");
            template.removeClass("d-none");
            $("#alternative-code-group").append(template);
            $("#notice-alt-code").addClass("d-none");
            $("#generate-alt-code").removeClass("btn-loading-dark");
          } else {
            //exceeded limit
            console.log("exceeded limit");
            $("#generate-alt-code").removeClass("btn-loading-dark");
          }
        },
        error: err => {
          $("#generate-alt-code").removeClass("btn-loading-dark");
          console.log(err);
        }
      };
      var dvid = localStorage.getItem("dvid");
      if (dvid) {
        jQuery.ajax(opts);
      } else {
        $("#generate-alt-code").removeClass("btn-loading-dark");
        console.log("Cannot create Alt without Parent");
      }
    },
    displayAlt: function() {
      JSON.parse(localStorage.getItem("dvid_alt")!).map(
        (alt: string, index: number) => {
          var template = $("#template-code-alt").clone();
          template
            .find(".title-code-alt")
            .text("Alternative Code " + (index + 1));
          template.attr("data-id", alt);
          template.removeAttr("id");
          template.removeClass("d-none");
          $("#alternative-code-group").append(template);
        }
      );
    },
    scan: function(
      inputs: { sdvid?: string; ip?: string; fingerprint?: string } | undefined,
      cb: () => void
    ) {
      var dvid = localStorage.getItem("dvid");

      const sdvid = inputs && inputs.sdvid ? inputs.sdvid : undefined;
      const ip = inputs && inputs.ip ? inputs.ip : undefined;
      const fingerprint =
        inputs && inputs.fingerprint ? inputs.fingerprint : undefined;

      var opts: JQuery.AjaxSettings = {
        url: `${API_HOST}/s-id/${dvid}`,
        data: JSON.stringify({
          dvid,
          sdvid,
          ip,
          fingerprint
        }),
        cache: false,
        dataType: "json",
        contentType: "application/json",
        processData: false,
        type: "POST",
        success: function(data: { success: boolean; name: string }) {
          if (data.success === true) {
            console.log("Scan (Success):", data);
            $("#scan-notice-loading").addClass("d-none");
            // @ts-ignore
            $("#scan-notice-success-datetime").text(new Date());
            // @ts-ignore
            JsBarcode("#scan-notice-barcode-id", data.scan);
            $("#scan-notice-success").removeClass("d-none");
          } else if (data.success === false) {
            if (data.name === "ValidationError") {
              console.log("Scan (Validation Error):", data);
              $("#scan-notice-loading").addClass("d-none");
              $("#scan-notice-error-title").text("ID Error");
              $("#scan-notice-error-code").text("Not a Zerobase ID");
              $("#scan-notice-error-message").text(
                "The ID you scanned is not a zerobase ID. Please inform the party that their ID is either damaged or not registered. We have registered this error."
              );
              $("#scan-notice-error").removeClass("d-none");
            } else {
              console.log("Scan (Other Error):", data);
              $("#scan-notice-loading").addClass("d-none");
              $("#scan-notice-error").removeClass("d-none");
            }
          }
          console.log("Scan (Callback):", cb);
          console.log("Scan (Data):", inputs);
          // scan only routes to init for now, so no data pass through required.
          if (cb) {
            cb();
          }
        },
        error: err => {
          console.log(err);
          console.log("Scan: Error");
          $("#scan-notice-loading").addClass("d-none");
          $("#scan-notice-error").removeClass("d-none");

          console.log("Scan Error (Callback):", cb);
          if (cb) {
            cb();
          }
        }
      };
      jQuery.ajax(opts);
    },
    fetchNews: function() {
      var opts: JQuery.AjaxSettings = {
        url:
          "https://newsapi.org/v2/top-headlines?q=coronavirus&" +
          "country=de&" +
          "apiKey=84ca05784bfb4228b4dc2396fd09d950",
        cache: false,
        contentType: false,
        processData: false,
        type: "GET",
        success: (data: {
          status: string;
          articles: {
            url: string;
            source: { name: string };
            title: string;
            publishedAt: string;
            urlToImage: string;
          }[];
        }) => {
          if (data.status === "ok" && data.articles) {
            console.log("Fetched News:");
            console.log(data);
            data.articles.map(article => {
              var template = $("#template-news").clone();
              template.find(".news-href").attr("href", article.url);
              template.find(".news-source").text(article.source.name);
              template.find(".news-title").text(article.title);
              template.find(".news-published").text(article.publishedAt);
              template
                .find(".news-image")
                .css("background-image", "url(" + article.urlToImage + ")");
              template.removeAttr("id");
              template.removeClass("d-none");
              $("#news-feed-container").append(template);
            });
          }
        },
        error: function(err) {
          console.log(err);
        }
      };
      jQuery.ajax(opts);
    },
    fetchIP: function(
      data: { ip?: string; sdvid?: string },
      cb: (data: { ip?: string; sdvid?: string }) => void
    ) {
      var opts: JQuery.AjaxSettings = {
        url: "https://api.ipify.org?format=json",
        cache: false,
        contentType: false,
        processData: false,
        type: "GET",
        success: (ipObj: { ip: string }) => {
          console.log("IP (Success):", ipObj);
          console.log("IP (Callback):", cb);
          console.log("IP (Data):", ipObj);
          if (cb && data) {
            data["ip"] = ipObj.ip;
            cb(data);
          } else {
            return ipObj.ip;
          }
        },
        error: err => {
          console.log(err);
          if (cb && data) {
            // @ts-ignore
            data["ip"] = ipObj.ip;
            cb(data);
          } else {
            return err;
          }
        }
      };
      jQuery.ajax(opts);
    },
    fingerprint: function(
      data: {
        ip?: string;
        sdvid?: string;
      } & {
        fingerprint?: string;
      },
      cb: (
        data: {
          ip?: string;
          sdvid?: string;
        } & {
          fingerprint?: string;
        }
      ) => void
    ) {
      var fingerprintReport = function() {
        var d1 = new Date();
        Fingerprint2.get(function(components) {
          var murmur = Fingerprint2.x64hash128(
            components
              .map(pair => {
                return pair.value;
              })
              .join(),
            31
          );
          var d2 = new Date();
          var time = d2.valueOf() - d1.valueOf();
          console.log("Fingerprint (Time):", time);
          console.log("Fingerprint (Generated):", murmur);

          // if > 1 that means already passed through IP and taken on data
          if (cb && data) {
            console.log("Fingerprint >1 (Callback):", cb);
            console.log("Fingerprint >1 (Data):", data);
            data["fingerprint"] = murmur;
            cb(data);
          } else {
            return murmur;
          }
        });
      };

      // see usage note in the README
      if (window.requestIdleCallback) {
        console.log("Fingerprint: requestIdleCallback");
        window.requestIdleCallback(fingerprintReport);
      } else {
        console.log("Fingerprint: setTimeout");
        setTimeout(fingerprintReport, 500);
      }
    },
    init: function() {
      console.log("Initialized");

      if (window.innerWidth < 750) {
        $("#mobile-functions").removeClass("d-none");
        $("#desktop-notice").addClass("d-none");
        var dvid = localStorage.getItem("dvid");
        var dvid_c = localStorage.getItem("dvid_alt")
          ? JSON.parse(localStorage.getItem("dvid_alt")!).length
          : 0;

        if (!dvid) {
          console.log("no registered dvid");

          $("#mobile-functions").addClass("d-none");
          $("#registration-notice").removeClass("d-none");
          $("#modal-register-notice").modal("show");

          $("body").on("click", "#register-notice-agree", function(e) {
            $("#register-notice-agree").addClass("btn-loading");
            router.fetchIP({}, data => {
              router.fingerprint(data, data => {
                console.log("cancel-route: register -> create:", data);
                router.create(data);
              });
            });
          });
        } else {
          console.log("Initialized with Device ID.");

          // sometimes this might fire twice, so we need something to catch
          if ($("#qrcode").children().length > 1) {
            console.log("QR already generated");
          } else {
            router.genQR(dvid, "qrcode");
          }
          if (dvid_c > 0) {
            console.log("alts available:", dvid_c);
            router.displayAlt();
            $("#alternative-code-card").removeClass("d-none");
            $("#notice-alt-code").addClass("d-none");
          }
        }
      }
    }
  };
})();

$(function() {
  //- Additional Functionality---------------------------//

  //-router.fetchNews();

  //https://github.com/kenwheeler/slick/issues/187
  ($(".info-slider") as any).slick({
    lazyLoad: "ondemand",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  // Input Mask
  var maskElementList: {
    dataset: { mask: any; "mask-visible": string };
  }[] = [].slice.call(document.querySelectorAll("[data-mask]"));
  maskElementList.map(function(maskEl) {
    console.log("maskEl", maskEl);

    // @ts-ignore
    return IMask(maskEl, {
      mask: maskEl.dataset.mask,
      lazy: maskEl.dataset["mask-visible"] === "true"
    });
  });

  //- Simple Routing ---------------------------//

  var scan_parser = document.createElement("a");
  scan_parser.href = window.location.href;
  var pathname = scan_parser.pathname,
    action = pathname.split("/")[1],
    sdvid = pathname.split("/")[2];
  var dvid = localStorage.getItem("dvid");

  if (action == "s" && sdvid) {
    console.log("Scan Access Point");
    window.history.replaceState({}, "Home", "/");
    if (dvid) {
      console.log("Has registered ID on scan");
      $("#modal-scan-notice").modal("show");
      // Please note this callback pattern to pass data down the "chain"
      // Unfortunately cannot use Async Await due to coverage issues.
      router.fetchIP({ sdvid }, data => {
        router.fingerprint(data, data => {
          router.scan(data, () => {
            router.init();
          });
        });
      });
    } else {
      console.log("Does not have registed ID on scan");

      // patch, since if user hits cancel its never routed to init
      if (window.innerWidth < 750) {
        $("#desktop-notice").addClass("d-none");
      }

      $("#mobile-functions").addClass("d-none");
      $("#registration-notice").removeClass("d-none");
      $("#modal-register-notice").modal("show");

      $("body").on("click", "#register-notice-agree", function(e) {
        $("#register-notice-agree").addClass("btn-loading");
        $("#modal-scan-notice").modal("show");

        router.fetchIP({ sdvid }, data => {
          console.log("IP -> fingerprint:", data);
          router.fingerprint(data, data => {
            console.log("fingerprint -> create :", data);
            router.create(data, data => {
              console.log("create -> scan: ", data);
              router.scan(data, () => {
                router.init();
              });
            });
          });
        });
      });
    }
  } else if (action == "s") {
    console.log("Invalid Access Point");
    window.history.replaceState({}, "Home", "/");
    router.init();
  } else {
    console.log("No Conditions Met");
    router.init();
  }

  //  View / Naviation Controllers ------------------------------------------------------ //

  $("body").on("click", "#landing-about", function(e) {
    console.log("hello");
    $('a[href="#tabs-about"]').tab("show");
  });
  $("body").on("click", "#landing-generate", function(e) {
    var dvid = localStorage.getItem("dvid");
    if (!dvid) {
      $("#modal-register-notice").attr("data-redirect", "true");
      $("#modal-register-notice").modal("show");
    } else {
      $('a[href="#page-code"]').tab("show");
    }
  });

  $("body").on("click", "#show-registration", function(e) {
    $("#modal-register-notice").modal("show");
  });
  // Navigate to Code
  $("body").on("click", "#nav-code", function(e) {
    $('a[href="#page-code"]').tab("show");
    // for when navigating from alt code to main code
    $(".notice-code").addClass("active");
    $(".notice-code .dimmer-notice").show();
  });
  // Navigate to Main
  $("body").on("click", "#nav-main", function(e) {
    $('a[href="#page-main"]').tab("show");
    $(".notice-code").addClass("active");
    $(".notice-code .dimmer-notice").show();
  });
  // Reveal Code
  $("body").on("click", "#reveal-code", function(e) {
    console.log("Reveal");
    $(".notice-code").removeClass("active");
    $(".notice-code .dimmer-notice").hide();
  });
  // Reveal Alt Code
  $("body").on("click", ".reveal-code-alt", function(e) {
    // for resetting canvas
    $("#qrcode-alt").empty();
    $("#qrcode-alt").append(
      '<img class="qr-logo-overlay" src="/assets/img/qr_logo.png">'
    );
    // for when revealing main code, but navigating to alt code
    $(".notice-code").addClass("active");
    $(".notice-code .dimmer-notice").show();
    // check if alt code exists, if not throw error
    if ($(this).attr("data-id")) {
      router.genQR(($(this) as any).attr("data-id"), "qrcode-alt");
      $("#title-code-alt").text(
        $(this)
          .find(".title-code-alt")
          .text()
      );
      $('a[href="#page-code-alt"]').tab("show");
    } else {
      console.log("error displaying alt");
    }
  });
  // Generating Alt Code
  $("body").on("click", "#generate-alt-code", function(e) {
    $("#generate-alt-code").addClass("btn-loading-dark");
    //router.createAlt();
    router.fetchIP({}, data => {
      router.fingerprint(data, data => {
        router.createAlt(data);
      });
    });
  });
  // Navigate to Scan
  $("body").on("click", "#nav-scan", function(e) {
    // can only initialize sound after user gesture;
    // @ts-ignore
    window.sound = new Howl({ src: ["/assets/audio/beep.mp3"] });

    $('a[href="#page-scan"]').tab("show");
    // Use facingMode: environment to attemt to get the front camera on phones
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then(function(stream) {
        video.srcObject = stream;
        // @ts-ignore
        video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
        video.play();
        scanStart();
        $("body").on("click", "#nav-main-x", function(e) {
          $('a[href="#page-main"]').tab("show");
          stream.getTracks().forEach(function(track) {
            track.stop();
          });
          scanStop();
        });
      });
  });

  // Video Scanning ---------------------------------------------------------//
  var video = document.createElement("video");
  var canvasElement = document.getElementById("canvas") as HTMLCanvasElement;
  var canvas = canvasElement.getContext("2d") as CanvasRenderingContext2D;
  function drawLine(begin: Point, end: Point, color: string) {
    canvas.beginPath();
    canvas.moveTo(begin.x, begin.y);
    canvas.lineTo(end.x, end.y);
    canvas.lineWidth = 4;
    canvas.strokeStyle = color;
    canvas.stroke();
  }
  var requestId: number | undefined;
  function scanStop() {
    if (requestId) {
      window.cancelAnimationFrame(requestId);
      requestId = undefined;
    }
  }
  function scanStart() {
    if (!requestId) {
      requestId = window.requestAnimationFrame(scanLoop);
    }
  }
  function scanLoop() {
    requestId = undefined;
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvasElement.hidden = false;
      canvasElement.height = video.videoHeight;
      canvasElement.width = video.videoWidth;

      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      var imageData = canvas.getImageData(
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );

      var code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert"
      });
      if (code) {
        drawLine(
          code.location.topLeftCorner,
          code.location.topRightCorner,
          "#1AAD19"
        );
        drawLine(
          code.location.topRightCorner,
          code.location.bottomRightCorner,
          "#1AAD19"
        );
        drawLine(
          code.location.bottomRightCorner,
          code.location.bottomLeftCorner,
          "#1AAD19"
        );
        drawLine(
          code.location.bottomLeftCorner,
          code.location.topLeftCorner,
          "#1AAD19"
        );

        var parser = document.createElement("a");
        parser.href = code.data;
        var pathname = parser.pathname,
          action = pathname.split("/")[1],
          sdvid = pathname.split("/")[2];

        if (action == "s" && sdvid) {
          // @ts-ignore
          sound.play();
          window.location.replace(code.data);
          return;
        }
      }
    }

    scanStart();
  }
});
