import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Grid,
  Progress,
  Message,
} from "semantic-ui-react";
import "./AddProduct.css";

import { db, storage } from "../../Firebase/FirebaseConfig";
import { useStateValue } from "../../StateProvider/StateProvider";
import { Link, useHistory } from "react-router-dom";


function AddProduct() {
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [progress, setProgress] = useState(0);
  const [{ user }] = useStateValue();

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); //proogress details
        setProgress(progress);
      },
      (error) => {
        console.error(error);
        alert(error.message);
      },
      //final upload
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post image inside data
            db.collection("Products").add({
              title,
              price,
              rating,
              imageUrl: url,
            });
            setProgress(0);
            setTitle("");
            setPrice();
            setRating();
            setImage(null);
            history.push("/");
          });
      }
    );
  };

  return (
    <div className="addProduct">
      <Container>
        <Grid centered columns={3} doubling stackable>
          {user ? (
            <Grid.Column>
              <h2>Add Product</h2>
              <Card>
                <Form className="addProduct__form">
                  <Form.Field required>
                    <label>Product title</label>
                    <input
                      placeholder="product title"
                      type="text"
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>Product Price</label>
                    <input
                      placeholder="product price"
                      type="number"
                      onChange={(event) => setPrice(event.target.value)}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <label>Product Rating</label>
                    <input
                      placeholder="product rating"
                      type="number"
                      onChange={(event) => setRating(event.target.value)}
                    />
                  </Form.Field>
                  <Form.Field required>
                    <input
                      placeholder="Last Name"
                      type="file"
                      onChange={handleChange}
                    />
                    <Progress percent={progress} indicating size="tiny" />
                  </Form.Field>
                  <Button color="green" type="submit" onClick={handleUpload}>
                    Upload
                  </Button>
                </Form>
              </Card>
            </Grid.Column>
          ) : (
            <div className="addProduct__warningMessage">
              <Message warning>
                <Message.Header>
                  You must sign in to upload a product!
                </Message.Header>
                <p>
                  Please visit <Link to="/login">sigin page</Link>, then try
                  again.
                </p>
              </Message>
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default AddProduct;
