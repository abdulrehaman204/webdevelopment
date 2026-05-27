function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    default:
      return state;
  }
}