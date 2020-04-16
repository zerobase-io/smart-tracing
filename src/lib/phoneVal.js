// import $ from 'jquery';
// This is probably not going to work, but the package lacks documentation and needs to be tested

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
