import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from '../redux/cartSlice'; // Import actions from your cartSlice
import CartItem from './CartItems';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((product) => (
            <CartItem key={product.id} product={product}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
