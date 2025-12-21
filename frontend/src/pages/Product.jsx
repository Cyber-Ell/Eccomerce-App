import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../components/context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productsData, setProductsData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  // Function to get the actual image URL
  const getImageUrl = (imagePath) => {
    try {
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
      const firstImage = getImageUrl(product.image[0]);
      setImage(firstImage);
    }
  }

  useEffect(() => {
    if (products && products.length > 0) {
      fetchProductData()
    }
  }, [productId, products])
  
  return productsData ? (
    <div className='border-t-2 pt-10 px-4 sm:px-8 lg:px-16 transition-opacity ease-in duration-500 opacity-100'>
      <div className="flex gap-8 lg:gap-12 flex-col lg:flex-row max-w-7xl mx-auto">
        
        {/* Image Section */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          {/* Thumbnail images */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-start sm:justify-normal sm:w-[20%] lg:w-[15%] gap-2 sm:gap-3">
            {productsData.image.map((item, index) => {
              const imgUrl = getImageUrl(item);
              return (
                <img 
                  src={imgUrl} 
                  key={index} 
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setImage(imgUrl)}
                  className={`w-20 sm:w-full aspect-square object-cover shrink-0 cursor-pointer transition-all duration-200 border-2 ${
                    image === imgUrl ? 'border-gray-800 opacity-100' : 'border-gray-200 opacity-70 hover:opacity-100'
                  }`}
                />
              );
            })}
          </div>
          
          {/* Main image */}
          <div className="w-full sm:w-[75%] lg:w-[80%]">
            <img 
              src={image} 
              alt={productsData.name} 
              className="w-full h-auto object-cover rounded-lg" 
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1 lg:max-w-xl">
          <h1 className='font-medium text-2xl sm:text-3xl lg:text-4xl leading-tight'>
            {productsData.name}
          </h1>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mt-3">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="" className="w-4 h-4" />
            ))}
            <img src={assets.star_dull_icon} alt="" className="w-4 h-4" />
            <p className="pl-2 text-sm text-gray-600">(122)</p>
          </div>

          {/* Price */}
          <p className='mt-5 text-3xl sm:text-4xl font-semibold text-gray-900'>
            {currency}{productsData.price}
          </p>

          {/* Description */}
          <p className='mt-5 text-gray-600 leading-relaxed text-sm sm:text-base'>
            {productsData.description}
          </p>

          {/* Size Selection */}
          <div className="flex flex-col gap-3 my-8">
            <p className='font-medium text-gray-900'>Select Size</p>
            <div className="flex flex-wrap gap-2">
              {productsData.sizes.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => setSize(item)}
                  className={`py-3 px-6 border-2 transition-all duration-200 font-medium text-sm ${
                    size === item 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className='bg-black text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-800 active:bg-gray-900 transition-colors duration-200 w-full sm:w-auto'>
            Add to Cart
          </button>

          {/* Additional Info */}
          <hr className='mt-8 border-gray-200' />
          <div className="text-sm text-gray-600 mt-6 space-y-2">
            <p className='flex items-center gap-2'>
              <span className='text-green-600'>✓</span> 100% original product.
            </p>
            <p className='flex items-center gap-2'>
              <span className='text-green-600'>✓</span> Cash on delivery available.
            </p>
            <p className='flex items-center gap-2'>
              <span className='text-green-600'>✓</span> Easy returns and exchanges within 7 days.
            </p>
          </div>
        </div>
      </div>

      {/* Description and Reviews */}
      <div className="mt-12">
        <div className="flex border-b border-gray-200">
          <button className="px-4 py-2 font-medium text-sm text-gray-900 border-b-2 border-black">Description</button>
          <button className="px-4 py-2 font-medium text-sm text-gray-600 hover:text-gray-900">Reviews (122)</button>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 leading-relaxed">
            {productsData.description}
          </p>
        </div>
      </div>

      {/* Related Products Section */}
       <RelatedProducts category={productsData.category} subCategory={productsData.subCategory} />
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading product...</p>
      </div>
    </div>
  )
}

export default Product