export const productReducer = (
  state = { prodname: "T-Shirt", products: [], categories: [] },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        prodname: action.data,
      };
      break;
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.data,
      };
      break;
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.data,
      };
      break;
  }
  return state;
};
