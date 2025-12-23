import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../components/context/ShopContext'
import Title from '../components/Title'
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {currency, delivery_fee, cartItems, products, updateQuantity, navigate, getCartAmount} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);


  return (
    <div className='border-t pt-14 px-4 sm:px-8 lg:px-16'>
      <div className="max-w-6xl mx-auto">
        <div className='text-2xl sm:text-3xl mb-3'>
          <Title text1={'YOUR'} text2={'CART'} />
        </div>

        {cartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
            <button 
              onClick={() => navigate('/collection')}
              className="bg-black text-white px-8 py-3 text-sm uppercase hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div>
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);
              
              return (
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-6'>
                    <img 
                      src={productData.image[0]} 
                      alt={productData.name}
                      className='w-16 sm:w-20 object-cover' 
                    />
                    <div>
                      <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                      <div className='flex items-center gap-5 mt-2'>
                        <p className='text-lg font-semibold'>{currency}{productData.price}</p>
                        <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 text-sm'>{item.size}</p>
                      </div>
                    </div>
                  </div>

                  <input 
                    type="number" 
                    min={1}
                    value={item.quantity}
                    onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                    className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' 
                  />

                  <Trash2 
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className='w-5 h-5 cursor-pointer text-gray-500 hover:text-red-500 transition-colors'
                  />
                </div>
              );
            })}

            <div className='flex justify-end my-20'>
              <div className='w-full sm:w-[450px]'>
                <div className='mb-8'>
                  <Title text1={'CART'} text2={'TOTALS'} />
                </div>

                <div className='flex flex-col gap-2 text-sm'>
                  <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}.00</p>
                  </div>
                  <hr />
                  <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency}{delivery_fee}.00</p>
                  </div>
                  <hr />
                  <div className='flex justify-between text-lg font-bold'>
                    <p>Total</p>
                    <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
                  </div>
                </div>

                <div className='w-full text-end mt-8'>
                  <button 
                    onClick={() => navigate('/place-order')}
                    className='bg-black text-white px-8 py-3 text-sm uppercase hover:bg-gray-800 transition-colors'
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart