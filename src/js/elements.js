// get the a href element
const waLinkElement = document.querySelector('.wa-link');
const waIconElement = document.querySelector('.wa-icon');
const allCheckboxes = document.querySelectorAll("#orderForm input[type='checkbox']");
const allWeightSelects = document.querySelectorAll("#orderForm .select-weight");

const setWaLinkElementHref = (href) => {
  waLinkElement.setAttribute('href', href);
};

const setWaIconHasItems = (hasItems) => {
  if (hasItems) {
    !waIconElement.classList.contains("has-selected-items") && waIconElement.classList.add("has-selected-items");
  } else {
    waIconElement.classList.remove("has-selected-items");
  }
};

export {
  waLinkElement,
  waIconElement,
  allCheckboxes,
  allWeightSelects,
  setWaLinkElementHref,
  setWaIconHasItems,
};