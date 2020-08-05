import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import { Container, Grid } from "semantic-ui-react";
import './Home.css'
import {db} from '../../Firebase/FirebaseConfig'

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    db.collection('Products').onSnapshot(snapshot =>{
      setProduct(snapshot.docs.map(doc=>doc.data()))
    })
  }, [setProduct]);
  console.log(product);

  return (
    <div className="home">
      <Container>
        <Grid container columns={4} doubling stackable>
          {product.map((product) => {
            return (
              <Grid.Column stretched key={product.id}>
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
    </div>
  );
}

export default Home;
