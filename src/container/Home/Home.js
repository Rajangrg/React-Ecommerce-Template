import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import { Container, Grid } from "semantic-ui-react";
import './Home.css'

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    //sample data will be replaced with db data in future.
    setProduct([
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
      {
        id: 3,
        title:
          "FEA Men's Tool Spectre Spiral Vicarious Men's T-Shirt,Black,X-Large",
        price: 200,
        rating: 4,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/51Hgu-mKe%2BL._AC_UX466_.jpg",
      },
      {
        id: 4,
        title: "Led Zeppelin I (Remastered Original Vinyl)",
        price: 29.27,
        rating: 5,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/816FdtquvwL._SX425_.jpg",
      },
      {
        id: 5,
        title:
          "Audio-Technica AT-LP60XUSB-BK Fully Automatic Belt-Drive Stereo Turntable",
        price: 129,
        rating: 5,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71sSGRlNwKL._AC_SL1500_.jpg",
      },
      {
        id: 6,
        title: "Zen Mind, Beginner's Mind: Informal Talks on Zen Meditation and Practice",
        price: 25,
        rating: 5,
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41Y-u0Q38sL._SX316_BO1,204,203,200_.jpg",
      },
      
    ]);
  }, []);
  console.log(product);

  return (
    <div className="home">
      <Container>
        <Grid container columns={4} doubling stackable>
          {product.map((product) => {
            return (
              <Grid.Column stretched key={product.id}>
                <Product
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
