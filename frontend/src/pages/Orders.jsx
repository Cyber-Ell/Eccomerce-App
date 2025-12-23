import React, { useContext } from 'react'
import { ShopContext } from '../components/context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  // Mock order data - replace this with actual orders from your backend/state
  const orders = [
    {
      _id: 'ORD001',
      items: [
        { productId: 'aaaaa', size: 'M', quantity: 2 },
        { productId: 'aaaab', size: 'L', quantity: 1 }
      ],
      amount: 220,
      status: 'Order Placed',
      date: '2024-12-20',
      payment: true,
      paymentMethod: 'COD'
    },
    {
      _id: 'ORD002',
      items: [
        { productId: 'aaaac', size: 'S', quantity: 1 }
      ],
      amount: 150,
      status: 'Shipped',
      date: '2024-12-15',
      payment: true,
      paymentMethod: 'Stripe'
    },
    {
      _id: 'ORD003',
      items: [
        { productId: 'aaaad', size: 'XL', quantity: 1 }
      ],
      amount: 180,
      status: 'Delivered',
      date: '2024-12-10',
      payment: true,
      paymentMethod: 'Razorpay'
    }
  ];

  return (
    <div className='border-t pt-14 px-4 sm:px-8 lg:px-16 min-h-screen'>
      <div className="max-w-6xl mx-auto">
        <div className='text-2xl sm:text-3xl mb-8'>
          <Title text1={'MY'} text2={'ORDERS'} />
        </div>

        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-xl text-gray-500 mb-4">No orders yet</p>
            <button 
              onClick={() => window.location.href = '/collection'}
              className="bg-black text-white px-8 py-3 text-sm uppercase hover:bg-gray-800 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className='space-y-6'>
            {orders.map((order, index) => (
              <div key={index} className=' rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white'>
                {/* Order Header */}
                <div className='bg-gray-50 px-4 sm:px-6 py-4 '>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                    <div>
                      <p className='font-semibold text-lg'>Order #{order._id}</p>
                      <p className='text-sm text-gray-600 mt-1'>
                        Placed on {new Date(order.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          order.status === 'Delivered' ? 'bg-green-500' : 
                          order.status === 'Shipped' ? 'bg-blue-500' : 
                          'bg-yellow-500'
                        }`}></div>
                        {order.status}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className='px-4 sm:px-6 py-4'>
                  <div className='space-y-4'>
                    {order.items.map((item, idx) => {
                      const productData = products.find((product) => product._id === item.productId);
                      
                      return productData ? (
                        <div key={idx} className='flex items-center gap-4 pb-4 '>
                          <img 
                            src={productData.image[0]} 
                            alt={productData.name}
                            className='w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md ' 
                          />
                          <div className='flex-1 min-w-0'>
                            <p className='font-medium text-sm sm:text-base truncate'>{productData.name}</p>
                            <div className='flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-600'>
                              <span className='font-semibold text-gray-900'>{currency}{productData.price}</span>
                              <span className='px-2 py-1 bg-gray-100 rounded'>Qty: {item.quantity}</span>
                              <span className='px-2 py-1 bg-gray-100 rounded'>Size: {item.size}</span>
                            </div>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Order Footer */}
                <div className='bg-gray-50 px-4 sm:px-6 py-4 '>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm'>
                      <div className='flex items-center gap-2'>
                        <span className='text-gray-600'>Payment:</span>
                        <span className='font-medium'>{order.paymentMethod}</span>
                      </div>
                      {order.payment && (
                        <span className='px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium w-fit'>
                          ✓ Paid
                        </span>
                      )}
                    </div>
                    <div className='flex items-center justify-between sm:justify-end gap-4'>
                      <div className='text-right'>
                        <p className='text-sm text-gray-600'>Total Amount</p>
                        <p className='text-xl font-bold text-gray-900'>{currency}{order.amount}.00</p>
                      </div>
                      <button className='border-2 border-gray-800 px-4 sm:px-6 py-2 text-sm font-medium hover:bg-gray-800 hover:text-white transition-all duration-200'>
                        Track Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Orders