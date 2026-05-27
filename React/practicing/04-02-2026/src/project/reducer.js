const initialState = {
  coffeeSold: 0,
};

function coffeeReducer(state = initialState, action) {
  switch (action.type) {
    case 'BUY_COFFEE':
      return {
        ...state,
        coffeeSold: state.coffeeSold + 1,
      };

    case 'CANCEL_COFFEE':
      return {
        ...state,
        coffeeSold:
          state.coffeeSold > 0 ? state.coffeeSold - 1 : 0,
      };

    default:
      return state;
  }
}

export default coffeeReducer;
