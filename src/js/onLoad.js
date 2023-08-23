import { loadSelectionFromLocalhost } from "./localhostManager";
import { createWaMsg, createWaLink } from './waContent';
import { setWaLinkElementHref, setWaIconHasItems } from './elements';

const onLoad = (isMobile) => {
  const items = loadSelectionFromLocalhost();
  items.forEach(item => {
    const element = document.getElementById(item.itemId);
    element.querySelector(`.select-weight option[value="${item.itemWeightQuantity}"]`) && (element.querySelector(`.select-weight option[value="${item.itemWeightQuantity}"]`).selected = true);
    element.querySelector(`input[type="checkbox"]`).checked = true;
  });
  
  const message = createWaMsg(items);
  const waLink = createWaLink(message, isMobile);
  setWaLinkElementHref(waLink);
  setWaIconHasItems(!!items.length);
}

export { onLoad };