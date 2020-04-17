// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */

export const phoneVal = (() => {
  return {
    init: (div_selector) => {
      var intlInput = window.intlTelInput(
        document.querySelector(div_selector),
        {
          utilsScript: '/vendor/intl-tel-input/js/utils.js',
        },
      );
      $(div_selector).blur(function () {
        $(div_selector).val(
          intlInput.getNumber(window.intlTelInputUtils.numberFormat.E164),
        );
      });
      if (window.innerWidth > 750) {
        $('.iti__country-list').width($('.iti').outerWidth());
      }
    },
  };
})();

export default phoneVal;
