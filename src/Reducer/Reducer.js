export const InitialState = {
  basket: [
    {
      id: 1,
      title: "The Power of Now: A Guide to Spiritual Enlightenment",
      price: 9.5,
      rating: 5,
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41WIbflfG2L._SX323_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title:
        "Squier by Fender Jim Root Telecaster Electric Guitar - Laurel Fingerboard - Flat Black",
      price: 1500,
      rating: 3,
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51724XHDqpL._AC_SL1000_.jpg",
    },
  ],
  user: "",
};

export const Reducer = (state, action) => {
  //console.log(action);
  //console.log(state)
  switch (action.type) {
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
