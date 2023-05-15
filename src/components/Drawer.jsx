import React from 'react'

function Drawer({onClose, onRemove, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
          <h2>Cart
            <img onClick={onClose} src="/img/btn-remove.svg" alt="Remove" />
          </h2>

          {
            items.length < 1 ?
            <div className="cartEmpty">
              <img src="/img/cartEmpty.jpg" alt="Empty" />
              <h3>Cart Empty</h3>
              <p>Add at least one pair of sneakers to place an order.</p>
              <button onClick={onClose}>Come Back
                <img src="/img/arrowComeBack.svg" alt="Back" />
              </button>
          </div>
          :
          <div className='parent'>
              <div className="items">
                {
                  items.map((obj) => (
                    <div className='cartItem'>
                      <img className='sneakersImg' width='70px' height='70px' src={obj.imageUrl} alt="Sneakers" />
                      <div>
                        <p>{obj.title}</p>
                        <b>$ {obj.price}</b>
                      </div>
                      <img onClick={() => onRemove(obj.id)} className='removeBtn' src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                  ))
                }
              </div>

            <div className='cartTotalBlock'>
            <ul>
              <li>
                <span>Total:</span>
                <div></div>
                <b>$ 1599.99 </b>
              </li>
              <li>
                <span>GST (5%):</span>
                <div></div>
                <b>$ 7</b>
              </li>
            </ul>
            <button className="greenButton">Checkout
              <img src="/img/arrowCheckout.svg" alt="arrow" />
            </button>
            </div>
          </div>
          }
        </div>
      </div>
  )
}

export default Drawer