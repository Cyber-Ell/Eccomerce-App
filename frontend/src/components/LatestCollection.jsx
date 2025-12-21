import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './context/ShopContext' // adjust import to your export
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products = [] } = useContext(ShopContext) || {}
  const [latestProduct, setLatestProduct] = useState([])

  useEffect(() => {
    if (!Array.isArray(products)) {
      setLatestProduct([])
      return
    }
    setLatestProduct(products.slice(0, 10))
  }, [products])

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi impedit expedita,
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.length === 0 ? (
          <div className="col-span-full text-center text-sm text-gray-500">No products yet</div>
        ) : (
          latestProduct.map((item) => (
            <ProductItem
              key={item._id || item.id}
              id={item._id || item.id}
              image={item.image} // pass as-is; ProductItem handles array/string
              name={item.name}
              price={item.price}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default LatestCollection
