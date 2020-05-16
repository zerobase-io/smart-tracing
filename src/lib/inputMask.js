// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */

import IMask from 'imask';

$(() => {
    // Input Mask
    const maskElementList = [].slice.call(
        document.querySelectorAll('[data-mask]'),
    );

    maskElementList.map((maskEl) => {
        return IMask(maskEl, {
            mask: maskEl.dataset.mask,
            lazy: maskEl.dataset['mask-visible'] === 'true',
        });
    });
    // International Phone number mask
    // window.intlTelInput(document.querySelector("#phone"), {
    // });
});
