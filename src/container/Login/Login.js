import React from "react";
import { Container, Card, Form, Button, Grid } from "semantic-ui-react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Container>
        <Grid centered columns={3}>
          <Grid.Column>
          <h2>Sign In</h2>
            <Card>
              <Form className="login__form">
                <Form.Field>
                  <label>E-mail</label>
                  <input placeholder="First Name" text="email" required />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input placeholder="Last Name" text="password" required />
                </Form.Field>
                <Button color="green" type="submit">Login</Button>
              </Form>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
