import React from "react";
import { Segment, Item, Label } from "semantic-ui-react";
import { useStateValue } from "../../StateProvider/StateProvider";
import { getBasketTotal } from "../../Reducer/Reducer";

import './SubTotal.css'

function SubTotal() {
    const[{basket},] = useStateValue();
  return (
    <div>
      <Item>
        <Item.Content>
          <Segment raised>
            <Label color="orange" ribbon>
              Total Price
            </Label>
            <span className="subtotal__price">${getBasketTotal(basket)}</span>
          </Segment>
        </Item.Content>
      </Item>
    </div>
  );
}

export default SubTotal;
