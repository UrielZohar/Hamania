
Promise.all([db.collection("pizza-types").where("enabled", "==", true).get(), db.collection("toppings").where("enabled", "==", true).get()]).then(([pizzaTypeQuerySnapshot, toppingsQuerySnapshot]) => {
  pizzaTypeQuerySnapshot.forEach((doc) => {
    allTypes.push(doc.data());
  });
  toppingsQuerySnapshot.forEach((doc) => {
    allToppings.push(doc.data());
  });

  pizzaTypesElement.innerHTML = `
    <option disabled selected value>בחר את הסוג</option>
    ${allTypes.map(({type, text, price, isMultipleToppings}) => `<option 
      type="${type}" 
      price=${price} 
      text="${text}"
      isMultipleToppings="${isMultipleToppings}">
        ${text}
    </option>`).join('')}
  `;
});