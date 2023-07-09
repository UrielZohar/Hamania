import { allCheckboxes, allWeightSelects, setWaLinkElementHref, setWaIconHasItems } from "./elements";
import { createWaMsg, createWaLink } from './waContent';
import { saveSelectionToLocalhost } from "./localhostManager"; 
import { isMobile } from "./deviceManager";

const clearSelection = () => {
  allCheckboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
  allWeightSelects.forEach(weightSelect => {
    weightSelect.selectedIndex = 0;
  });
  const items = [];
  const message = createWaMsg(items);
  const waLink = createWaLink(message, isMobile);
  setWaLinkElementHref(waLink);
  setWaIconHasItems(false);
  // save to localhost
  saveSelectionToLocalhost(items);
};

export { clearSelection };
