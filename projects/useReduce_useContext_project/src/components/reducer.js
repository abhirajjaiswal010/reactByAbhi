export const InitialState = {
  total: 0,
  products: [],
};

export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        products: action.payload,
      };

    case "Remove":
      return {
        ...state,
        products: action.payload,
      };
    case "Update price":
      return {
        ...state,
        total: action.payload,
      };
    default:
      throw Error("cannot match case in reducer");
  }
};

