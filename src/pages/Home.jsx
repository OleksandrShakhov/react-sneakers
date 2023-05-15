import React from 'react'
import Card from "../components/Card";

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart  }) {
  return (
    <div className="content">
        <div className='top-line'>
          <h1>{searchValue ? `Search by request: "${searchValue}"` : "All Sneakers"}</h1>
          <div className='search-block'>
            <img src="/img/search1.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue('')} className='search-block--remove' src="/img/btn-removeInput.svg" alt="Clear" />}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search..." />
          </div>
        </div>

        <div className="sneakers">
          {items
          // to make the search and display only reauested in the search field items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          // display all the items in the array
          .map((item, index) => (
            <Card
              key={index}
              title = {item.title}
              price = {item.price}
              imageUrl = {item.imageUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>

      </div>
  )
}

export default Home;