const isoDateConverter = (isoString) => {
  const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
  const date = new Date(isoString);
  return date.toLocaleDateString("de-DE", options);
};

const makeExerp = (text, length) => {
  if (text.length <= length - 3) {
    return text;
  }
  return text.substr(0, length) + "...";
};

const getLocalStorageCart = (cartId) => {
  if (localStorage.getItem(cartId) === null) {
    return;
  }
  const storedObjects = localStorage.getItem(cartId);
  const cart = JSON.parse(storedObjects);
  return cart;
};

exports.isoDateConverter = isoDateConverter;
exports.getLocalStorageCart = getLocalStorageCart;
exports.makeExerp = makeExerp;
