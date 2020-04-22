/* eslint-disable */

// Source: https://gist.github.com/konsalex/9d34aab28d488e9d75b4e568007e34f0

function addStyleString(str) {
  var node = document.createElement('style');
  node.innerHTML = str;
  document.body.appendChild(node);
}

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const new_vh = 0.01 * viewportHeight;
const new_vw = 0.01 * viewportWidth;

let allCSS = [].slice
  .call(document.styleSheets)
  .reduce(function (prev, styleSheet) {
    var now = prev;
    try {
      if (styleSheet.cssRules) {
        now += [].slice
          .call(styleSheet.cssRules)
          .reduce(function (prev, cssRule) {
            return prev + cssRule.cssText;
          }, '');
      }
    } catch (e) {
      console.log(
        'Access to cssRules for stylesheet "' +
          styleSheet.href +
          '" is denied. Ignoring...',
      );
    }
    return now;
  }, '');

const reg = new RegExp('(\\d+\\.?\\d*v[w,h])', 'g');

const occurances = allCSS.match(reg);

console.log(`Found ${occurances.length} occurances`);

occurances.forEach(function (style) {
  // Check is style is vh or vw
  const unit = style.slice(-2);
  // Convert value from string to float
  let value = parseFloat(style.slice(0, -2));

  if (unit === 'vh') {
    value = value * viewportHeight;
    allCSS = allCSS.replace(style, value.toString());
  } else {
    value = value * viewportWidth;
    allCSS = allCSS.replace(style, value.toString());
  }
});

/*
 * Remove old stylesheets to inject the new one
 * with vh and vw replaced
 */
Array.prototype.forEach.call(
  document.querySelectorAll('style,[rel="stylesheet"],[type="text/css"]'),
  function (element) {
    try {
      element.parentNode.removeChild(element);
    } catch (err) {}
  },
);

addStyleString(allCSS);
