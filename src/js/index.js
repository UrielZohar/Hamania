import { waIconElement, setWaLinkElementHref, setWaIconHasItems } from './elements';
import { createWaMsg, createWaLink } from './waContent';
import { saveSelectionToLocalhost } from './localhostManager';
import { clearSelection } from './listElementEvents';
import { isMobile } from './deviceManager';
import { onLoad } from "./onLoad";
import "../scss/style.scss";

window.clearSelection = clearSelection;

window.orderChange = (e) => {
  const checkedInputsItems = document.querySelectorAll("#orderForm input[type='checkbox']:checked");
  const items = [];
  checkedInputsItems.forEach(checkedInputItem => {
    const checkedItem = checkedInputItem.closest('.list-item');
    const itemLabel = checkedItem.querySelector('label .label-text').innerHTML;
    const itemWeight = checkedItem.querySelector('.select-weight option:checked')?.innerHTML || '';
    const itemWeightQuantity = checkedItem.querySelector('.select-weight option:checked')?.value || '';
    const itemPrice = checkedItem.querySelector('.price').innerHTML;
    const itemId = checkedItem.getAttribute('id');
    items.push({
      itemLabel,
      itemWeight,
      itemWeightQuantity,
      itemPrice,
      itemId,
    });
  });
  const message = createWaMsg(items);
  const waLink = createWaLink(message, isMobile);
  setWaLinkElementHref(waLink);
  setWaIconHasItems(!!checkedInputsItems.length);
  // save to localhost
  saveSelectionToLocalhost(items);
} 

// Your code to run since DOM is loaded and ready
if (window.innerWidth > 690) {
  document.getElementsByTagName('body')[0].classList.add("desktop-mode");
} else {
  document.getElementsByTagName('body')[0].classList.add("mobile-mode");
}

onLoad(isMobile);
