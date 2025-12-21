import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../components/context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productsData, setProductsData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  // Function to get the actual image URL
  const getImageUrl = (imagePath) => {
    try {
      // Remove '/src/' from the path if present
      const cleanPath = imagePath.replace('/src/', '../');
      return new URL(cleanPath, import.meta.url).href;
    } catch (error) {
      console.error('Error loading image:', error);
      return imagePath;
    }
  }

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId || item.id === productId);
    
    if (product) {
      setProductsData(product);
      // Get the proper image URL
      const firstImage = getImageUrl(product.image[0]);
      setImage(firstImage);
      console.log("Product found:", product, product.sizes);
    }
  }

  useEffect(() => {
    if (products && products.length > 0) {
      fetchProductData()
    }
  }, [productId, products])
  
  return productsData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnail images */}
          <div className="flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productsData.image.map((item, index) => {
              const imgUrl = getImageUrl(item);
              return (
                <img 
                  src={imgUrl} 
                  key={index} 
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setImage(imgUrl)}
                  className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer hover:opacity-75" 
                />
              );
            })}
          </div>
          
          {/* Main image */}
          <div className="w-full sm:w-[80%]">
            <img 
              src={image} 
              alt={productsData.name} 
              className="w-full  sm:w-[80%]" 
            />
          </div>
        </div>
          {/* Product info */}
          <div className="flex-1">
            <h1 className='font-medium text-2xl mt-2'>{productsData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2">(122)</p>
            </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productsData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productsData.description}</p>
              <div className="flex flex-col gap-4 my-8">
                <p>Select Size</p>
                <div className="flex gap-2">
                  {productsData.sizes.map((item, index) => (
                    <button 
                      key={index}
                      onClick={() => setSize(item)}
                      className={` py-2 px-4 bg-gray-100 ${size === item ? 'border-orange-500' : ''}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          </div>
      </div>
    </div>
  ) : <div className="opacity-0">Loading...</div>
}

export default Product