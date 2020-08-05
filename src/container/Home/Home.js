import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import { Container, Grid, Segment, Dimmer, Loader } from "semantic-ui-react";
import "./Home.css";
import { db } from "../../Firebase/FirebaseConfig";

function Home() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("Products").onSnapshot((snapshot) => {
      setProduct(snapshot.docs.map((doc) => doc.data()));
      setLoading(false);
    });
  }, [setProduct]);
  console.log(product);

  return (
    <div className="home">
      {loading ? (
        <Segment className="home__segment">
          <Dimmer active inverted>
            <Loader size="large" className="home__loaderMessage">
              Loading...
            </Loader>
          </Dimmer>
        </Segment>
      ) : (
        <Container>
          <Grid container columns={4} doubling stackable>
            {product.map((product, index) => {
              return (
                <Grid.Column stretched key={index}>
                  <Product
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    imageUrl={product.imageUrl}
                  ></Product>
                </Grid.Column>
              );
            })}
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default Home;
