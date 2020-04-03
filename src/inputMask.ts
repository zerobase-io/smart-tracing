$(() => {  

  // Input Mask
  const maskElementList: {
    dataset: { mask: any; 'mask-visible': string };
    }[] = [].slice.call(document.querySelectorAll('[data-mask]'));
    maskElementList.map(maskEl => {
      console.log('maskEl', maskEl);

    // @ts-ignore
    return IMask(maskEl, {
      mask: maskEl.dataset.mask,
      lazy: maskEl.dataset['mask-visible'] === 'true',
    });
  });

  // International Phone number mask
  // window.intlTelInput(document.querySelector("#phone"), {
  // });

});