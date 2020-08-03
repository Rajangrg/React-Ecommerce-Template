import React from "react";

import { Segment, Container, List, Divider, Image } from "semantic-ui-react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <Segment inverted>
        <Container textAlign="center">
          <Divider inverted section />
          <Image
            centered
            size="mini"
            src="https://img.icons8.com/doodle/96/000000/user-male-circle.png"
            alt="userPic"
          />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="https://github.com/Rajangrg">
              By Rajan Gurung
            </List.Item>
            <List.Item as="a" href="#">
              Source Code
            </List.Item>
            <List.Item as="a" href="#">
              MIT License
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
