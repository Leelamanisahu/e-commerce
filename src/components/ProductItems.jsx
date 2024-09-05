import React from 'react'
import { Link } from 'react-router-dom'

const ProductItems = ({ title,id, thumbnail, brand }) => {
  return (
    <Link to={`/product/${id}`} className="max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white m-4">
    <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />    
    <div className="px-6 py-4">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-700 text-base">{brand}</p>
    </div>
  </Link>
  )
}

export default ProductItems
