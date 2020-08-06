import React, { useState } from "react";
import { Container, Card, Form, Button, Grid } from "semantic-ui-react";
import "./Login.css";
import { auth } from "../../Firebase/FirebaseConfig";
import { useHistory } from "react-router-dom";

function Login() {
  //router
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((authUser) => {
          history.push("/");
        })
        .catch((error) => {
          alert(
            "Opps! something went wrong please check your console for more info"
          );
          console.error(error.message);
        });
    } else {
      alert("Please Enter all the fields");
    }
  };

  return (
    <div className="login">
      <Container>
        <Grid centered columns={3} doubling stackable>
          <Grid.Column>
            <h2>Sign In</h2>

            <Card>
              <Form className="login__form">
                <Form.Field required>
                  <label>E-mail</label>
                  <input
                    placeholder="First Name"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Password</label>
                  <input
                    placeholder="password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Field>
                <Button color="green" type="submit" onClick={loginUser}>
                  Login
                </Button>
              </Form>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
