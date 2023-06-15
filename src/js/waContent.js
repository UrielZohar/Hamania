
// text constants
let phoneNumber = '972542542797';
// fetch the phone number from the API

const waLinkPrefix = (isMobile) => isMobile ? 'whatsapp://send?text=' : 'https://web.whatsapp.com/send?text=';
const waLinkSuffix = `&phone=${phoneNumber}`;


const createWaLink = (msg, isMobile) => {
  return `${waLinkPrefix(isMobile)}${msg}${waLinkSuffix}`;
}

const createWaMsg = (items) => {
  let message = '';
  let price = 0;
  items.forEach(({itemLabel, itemWeight, itemWeightQuantity, itemPrice}) => {
    price += Number.parseFloat(itemPrice) * itemWeightQuantity;
    message += `${itemLabel} ${itemWeight}%0a`;
  });
  price = price.toFixed(2);
  return `שלום יוסיאל 🥜%0a
אני רוצה:%0a
${message}%0a
    😀`
  ;
}

export {
  createWaLink,
  createWaMsg,
}
