import { waLinkElement, waIconElement } from './elements';
import { createWaMsg, createWaLink } from './waContent';
import "../scss/style.scss";

const setWaLinkElementHref = (href) => {
  waLinkElement.setAttribute('href', href);
}

const setWaIconHasItems = (hasItems) => {
  if (hasItems) {
    !waIconElement.classList.contains("has-selected-items") && waIconElement.classList.add("has-selected-items");
  } else {
    waIconElement.classList.remove("has-selected-items");
  }
}

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

window.orderChange = (e) => {
  const checkedInputsItems = document.querySelectorAll("#orderForm input[type='checkbox']:checked");
  const items = [];
  checkedInputsItems.forEach(checkedInputItem => {
    const checkedItem = checkedInputItem.closest('.list-item');
    const itemLabel = checkedItem.querySelector('label .label-text').innerHTML;
    const itemWeight = checkedItem.querySelector('.select-weight option:checked').innerHTML;
    const itemWeightQuantity = checkedItem.querySelector('.select-weight option:checked').value;
    const itemPrice = checkedItem.querySelector('.price').innerHTML;
    items.push({
      itemLabel,
      itemWeight,
      itemWeightQuantity,
      itemPrice,
    })
  });
  const message = createWaMsg(items);
  const waLink = createWaLink(message, isMobile);
  setWaLinkElementHref(waLink);
  setWaIconHasItems(!!checkedInputsItems.length);
  
} 

// Your code to run since DOM is loaded and ready
if (window.innerWidth > 690) {
  document.getElementsByTagName('body')[0].classList.add("desktop-mode");
} else {
  document.getElementsByTagName('body')[0].classList.add("mobile-mode");
}
