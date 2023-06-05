
const fetchContactNumber = () => 
  fetch("https://otblh8o1gi.execute-api.us-east-2.amazonaws.com/pizza-sahki-stage/getPhoneNumber")
  .then(response => response.text())
  .catch(err => console.log(err));

export {
  fetchContactNumber,
}