const card = [];

const HandleCard = (state = card, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // if product already exit
      const exit = state.find((x) => x.id === product.id);
      if (exit) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = state.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const exits1 = state.find((x) => x.id === product.id);
      if (exits1.qty === 1) {
        return state.filter((x) => x.id !== exits1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};
export default HandleCard;
