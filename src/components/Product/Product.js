import React from "react";
import { Card, Image, Rating, Button } from "semantic-ui-react";
import "./Product.css";
import { useStateValue } from "../../StateProvider/StateProvider";

function Product({ id, title, price, rating, imageUrl }) {
  const [, dispatch] = useStateValue();

  const addTobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        imageUrl,
      },
    });
  };
  return (
    <div className="product">
      <Card className="product__card">
        <Image className="product__image" centered src={imageUrl} />
        <Card.Content>
          <Card.Header className="product__title">{title}</Card.Header>
          <Card.Meta>
            <Rating icon="star" defaultRating={rating} maxRating={5} />
          </Card.Meta>
          <Card.Description>
            <span className="product__price">${price}</span>
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="product__footer">
          <Button inverted className="product__button" onClick={addTobasket}>
            ADD TO BASKET
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Product;
