export const InitialState = {
  basket: [],
  user: ''
};

export const Reducer = (state, action) => {
  //console.log(action.item)
  //console.log(state)
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,//return all the state
        basket: [...state.basket, action.item] //get previous state and action item and return new state
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
      };
    default:
      return state;
  }
};

 