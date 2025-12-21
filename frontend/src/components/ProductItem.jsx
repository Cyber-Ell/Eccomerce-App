import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from './context/ShopContext'

const placeholder = '/placeholder.png' // put a local placeholder in public/

const ProductItem = ({ id, price, image, name }) => {
  const { currency = '₦' } = useContext(ShopContext) 

  // handle image whether it's array or string or undefined
  const imageSrc = Array.isArray(image)
    ? image[0]
    : typeof image === 'string'
    ? image
    : placeholder

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={name || 'product'}
          className="hover:scale-110 transition ease-in-out w-full object-cover"
          onError={(e) => { e.currentTarget.src = placeholder }}
        />
        <p className="pt-3 pb-1 text-sm break-words">{name}</p>
        <p className="text-sm font-medium">{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
