export const InitialState = {
  basket: [],
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
      };
    default:
      return state;
  }
};

 