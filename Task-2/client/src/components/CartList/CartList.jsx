import React from 'react';
import { useSelector } from 'react-redux';

const CartList = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;