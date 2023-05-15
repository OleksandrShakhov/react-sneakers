import React from 'react';
import { Route } from "react-router-dom";

import axios from "axios";
//import Card from "./components/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"



function App() {

  // State to keep all the sneakers from backennd(mock.api)
  const [items, setItems] = React.useState([])
  // state to keep items in the cart
  const [cartItems, setCartItems] = React.useState([]);
  // state to keep items in the favorite
  //const [favorites, setFavorites] = React.useState([]);
  //state to open the cart
  const [cartOpened, setCartOpened] = React.useState(false);
  // state to keep a search value
  const [searchValue, setSearchValue] = React.useState('');

  // create the useEffect state to set the condition of execution
  React.useEffect(() => {

    // example how to get data from back-end using axios
    // take all an array from the back-end (mockAPI in my case)
    // and attech the value to the setItems state
    axios.get("https://63f3c688fe3b595e2ee917cd.mockapi.io/items")
    .then(response => {
      setItems(response.data);
    })

    // take all the items palced in cart on the back-end and display in in cart on the front-end
    axios.get("https://63f3c688fe3b595e2ee917cd.mockapi.io/cart")
    .then(response => {
      setCartItems(response.data);
    })
  }, [])

  //function to add items to cart (push data)
  const onAddToCart = (obj) => {
    // to put all the items in the cart (keep in the back-end)
    axios.post("https://63f3c688fe3b595e2ee917cd.mockapi.io/cart", obj);
    //display all the items in the cart (front)
    setCartItems(prev => [...prev, obj]);
  }

  /*const onAddToFavorite = (obj) => {
    axios.post("https://63f3c688fe3b595e2ee917cd.mockapi.io/favorites", obj);
    setFavorites(prev => [...prev, obj]);
  }*/

  const onRemoveItem = (id) => {
    //remove from back-end
    axios.delete(`https://63f3c688fe3b595e2ee917cd.mockapi.io/cart/${id}`);
    // remove from front-end
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  // function to change search input 
  const onChangeSearchInput = (event) =>  {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> : null}
      <Header
        onClickCart = {() => setCartOpened(true)}
      />

      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          //onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites />
      </Route>

    </div>
  );
}

export default App;
