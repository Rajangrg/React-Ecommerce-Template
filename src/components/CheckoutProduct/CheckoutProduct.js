import React from "react";
import { Item, Rating, Button, Divider } from "semantic-ui-react";
import "./CheckoutProduct.css";

import { useStateValue } from "../../StateProvider/StateProvider";

function CheckoutProduct({ id, title, price, rating, imageUrl }) {
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id
    })
  };

  return (
    <div>
      <Item className="checkoutProduct__item">
        <Item.Image
          size="tiny"
          src={imageUrl}
          className="checkoutProduct__image"
        />
        <Item.Content>
          <Item.Header className="checkoutProduct__title">{title}</Item.Header>
          <Item.Meta>
            {" "}
            <Rating icon="star" defaultRating={rating} maxRating={5} />
          </Item.Meta>
          <Item.Description>
            <span className="checkoutProduct__price">${price}</span>
          </Item.Description>
          <Item.Extra>
            <Button
              color='red'
              className="checkoutProduct__button"
              onClick={removeFromBasket} 
            >
              REMOVE
            </Button>
          </Item.Extra>
        </Item.Content>
        <Divider inverted section />
      </Item>
    </div>
  );
}

export default CheckoutProduct;
