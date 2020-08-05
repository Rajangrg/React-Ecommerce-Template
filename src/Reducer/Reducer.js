export const InitialState = {
  basket: [],
  user: null,
};

export const Reducer = (state, action) => {
  //console.log(action);
  //console.log(state)
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state, //return all the state
        basket: [...state.basket, action.item], //get previous state and action item and return new state
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket]; //clone of recent basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //console.log(index)
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.error("no item found");
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => Math.round(item.price + amount), 0);
