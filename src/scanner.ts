const scanning = (() => {
  //const video =         document.createElement('video');
  // const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
  // const canvas =        canvasElement.getContext('2d') as CanvasRenderingContext2D;
  // const sound =         new Howl({ src: ['/assets/audio/beep.mp3'] });
  let requestId: number | undefined;
  return {
    //video: document.createElement('video'),
    drawline: (begin: Point, end: Point, color: string) => {
      canvas.beginPath();
      canvas.moveTo(begin.x, begin.y);
      canvas.lineTo(end.x, end.y);
      canvas.lineWidth = 4;
      canvas.strokeStyle = color;
      canvas.stroke();
    },
    stop: () => {
      if (requestId) {
        window.cancelAnimationFrame(requestId);
        requestId = undefined;
      }
    },
    start: () => {
      if (!requestId) {
        requestId = window.requestAnimationFrame(scanning.loop);
      }
    },
    loop: () => {
      requestId = undefined;
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvasElement.hidden = false;
        canvasElement.height = video.videoHeight;
        canvasElement.width = video.videoWidth;
        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });
        if (code) {
          scanning.drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#1AAD19');
          scanning.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#1AAD19');
          scanning.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#1AAD19');
          scanning.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#1AAD19');
          const parser = document.createElement('a');
                parser.href = code.data;
          const { pathname: actionPath } = parser;
          const codeAction = actionPath.split('/')[1];
          const codeSdvid = actionPath.split('/')[2];
          if (codeAction === 's' && codeSdvid) {
            // @ts-ignore
            sound.play();
            window.location.replace(code.data);
            return;
          }
        }    
      }
    }
  }
})();