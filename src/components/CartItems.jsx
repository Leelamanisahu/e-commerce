import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseCount, decreaseCount, removeCart } from '../redux/cartSlice'; // Import removeCart action

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
      <div className="flex items-center flex-col sm:flex-row">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-2xl font-medium mt-4">{product.title}</h3>
          <p className="text-gray-600"><span className='font-bold'>Category:</span> {product.category}</p>
          <p className="text-gray-600"><span className='font-bold'>Description:</span>{product.description}</p>
          <hr className='font-bold'/>
          <p className="text-gray-600"><span className='font-bold'>Price:</span> ${product.price}</p>
          <p className="text-gray-600"><span className='font-bold'>Total:</span> ${product.price * product.count}</p>
        </div>

      
      <div className="flex items-center space-x-4">
        <button
          onClick={() => dispatch(decreaseCount({ id: product.id }))}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          -
        </button>
        <p className="text-lg">{product.count}</p>
        <button
          onClick={() => dispatch(increaseCount({ id: product.id }))}
          className="bg-green-500 text-white px-3 py-1 rounded-md"
        >
          +
        </button>
        <button
          onClick={() => dispatch(removeCart({ id: product.id }))}
          className="bg-gray-500 text-white px-3 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
      </div>
    </div>
  );
};

export default CartItem;
