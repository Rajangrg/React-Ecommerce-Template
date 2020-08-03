import React from "react";
import { Item, Rating, Button, Divider } from "semantic-ui-react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, price, rating, imageUrl }) {
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
            <Button inverted className="checkoutProduct__button">
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
