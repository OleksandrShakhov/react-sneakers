import React from 'react'
import { Link } from "react-router-dom"

function Header(props) {

  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
            <img width="40" height="40" src="/img/logo.png" alt="logo" />
            <div>
              <h3>Sneakers</h3>
              <p>Best sneakers ever</p>
            </div>
        </div>
      </Link>
        <ul className="headerRight">
          <li onClick={props.onClickCart}>
            <img width="20" height="20" src="/img/cart.svg" alt="cart" />
            <span>$ 49.99</span>
          </li>
          <li>
            <Link to="/favorites">
              <img width="20" height="20" src="/img/like.svg" alt="save" />
            </Link>
          </li>
          <li>
            <img width="20" height="20" src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
  )
}

export default Header;