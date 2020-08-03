import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { Container, Item, Card } from "semantic-ui-react";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <Container>
          {basket?.length === 0 ? (
            <div>
              <h2>Your shopping basket is empty</h2>
              <p>
                You have no items in your basket. To buy one or more items ,
                please click "Add to basket" next to the item
              </p>
            </div>
          ) : (
            <div>
              {basket?.length >= 2 ? (
                <h2>Your shopping basket items </h2>
              ) : (
                <h2>Your shopping basket item </h2>
              )}
              <Card>
                <Item.Group>
                  {basket?.map((item) => {
                    return (
                      <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        price={item.price}
                        rating={item.rating}
                      ></CheckoutProduct>
                    );
                  })}
                </Item.Group>
              </Card>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}

export default Checkout;
