// add items

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// delete items

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
