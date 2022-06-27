import React from "react";
import { Menu, Icon } from "semantic-ui-react";

import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateProvider";
import { auth } from "../../Firebase/FirebaseConfig";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Menu stackable>
        <Menu.Menu position="left">
          <Menu.Item>
            <Link to="/" className="header__leftItem">
              <img
                className="header__logo"
                src="https://img.icons8.com/ios/100/000000/online-shop-favorite.png"
                alt="secondhand store logo"
              />
              <p className="header__companyName">Second-hand Store</p>
            </Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
            <Menu.Item>
            <Link to="/uploadImage" >
                <Icon name="upload" className="links"/><span className="links">Add product</span>
            </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/checkout" >
                  <Icon name="shop" className="links"/><span className="links">{basket?.length} </span> 
              </Link>
            </Menu.Item>
            <Menu.Item>
             <Link to="/login" >
              {user ? (
                <div onClick={login}>
                  <Icon name="sign-out" className="links"/>
                  <span className="links">Logout</span>
                </div>
              ) : (
                <>
                  <Icon name="sign-in" className="links"/>
                  <span className="links">Sign in</span>
                </>
              )}
           </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Header;
