const dateConverterOptions = {
  month: "short",
  day: "2-digit",
};

const convertIsoDateToLocale = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("de-DE", dateConverterOptions);
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

export { convertIsoDateToLocale, makeExerp, getLocalStorageCart };
