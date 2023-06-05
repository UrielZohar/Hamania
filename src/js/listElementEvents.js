
const onPizzaClick = (event => {
  // get the pizza type
  const selectedOption = event.target[event.target.options.selectedIndex];
  pizzaText = selectedOption.getAttribute("text");
  pizzaPrice = +selectedOption.getAttribute("price");
  const pizzaType = selectedOption.getAttribute("type");
  const isMultipleToppings = selectedOption.getAttribute("isMultipleToppings") === 'true';
  // update the WA message
  const waMsg = createWaMsg(pizzaText, '', pizzaPrice);
  const waLink = createWaLink(waMsg);
  setWaLinkElementHref(waLink);
  enablePizzaToppingsElement();
  updatePizzaToppingsElement(pizzaType);
  if (isMultipleToppings) {
    addPizzaToppingsElementMultiple();
  } else {
    removePizzaToppingsElementMultiple();
  }
});

const onToppingClick = (event => {
  // get the selected options
  const selectedOptions = Array.from(pizzaToppingsElement.selectedOptions);
  console.log(selectedOptions.length);
  // update the price
  const toppingPrice = Math.max(((selectedOptions.length - 1) * 5) - 5, 0);
  const toppingText = selectedOptions.filter(option => !option.hasAttribute("placeholdered")).map(({text}) => text).join(', ');
  // update the WA message
  const waMsg = createWaMsg(pizzaText, toppingText, pizzaPrice + toppingPrice);
  const waLink = createWaLink(waMsg);
  setWaLinkElementHref(waLink);
});
