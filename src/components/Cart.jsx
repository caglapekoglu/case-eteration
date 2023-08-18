import React, { useState } from 'react'

const Cart = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
  return (
    <div className='flex items-center justify-center lg:justify-start flex-col gap-5'>
        <div>
        <span className="text-secondary text-[12px]">Cart</span>
        <div className="bg-white w-[220px] flex flex-col gap-[15px] p-4 text-sm">
          <div className="flex gap-2 justify-between">
            <div>
                <p>Samsung s22</p>
                <span className='text-primary'>12.000₺</span>
            </div>
            <div className='flex items-center'>
                <button className='bg-primary-bg w-6 h-6 flex justify-center items-center' onClick={increment}>-</button>
                <p className='bg-primary w-6 h-6 flex text-white justify-center items-center'>{count}</p>
                <button className='bg-primary-bg w-6 h-6 flex justify-center items-center' onClick={decrement}>+</button>
            </div>
          </div>
          <div className="flex gap-2 justify-between" >
            <div>
                <p>Lenovo PC</p>
                <span className='text-primary'>18.000₺</span>
            </div>
            <div className='flex items-center'>
                <button className='bg-primary-bg w-6 h-6 flex justify-center items-center' onClick={increment}>-</button>
                <p className='bg-primary w-6 h-6 flex text-white justify-center items-center'>{count}</p>
                <button className='bg-primary-bg w-6 h-6 flex justify-center items-center' onClick={decrement}>+</button>
            </div>
          </div>
          <div className="flex gap-2 justify-between">
            <div>
                <p>iPhone 12</p>
                <span className='text-primary'>15.000₺</span>
            </div>
            <div className='flex items-center'>
                <button className='bg-primary-bg w-6 h-6 flex justify-center items-center' onClick={increment}>-</button>
                <p className='bg-primary w-6 h-6 flex text-white justify-center items-center'>{count}</p>
                <button className='bg-primary-bg w-6 h-6 flex justify-center items-center' onClick={decrement}>+</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="text-secondary text-[12px]">Checkout</span>
        <div className="bg-white w-[220px] flex flex-col gap-[15px] p-4 text-sm">
          <div className='flex gap-2'>
                <p>Total Price</p>
                <span>117.000₺</span>
          </div>
          <a className='bg-primary flex justify-center p-2 text-white rounded-[4px]' href="/" >Checkout</a>
        </div>
      </div>
    </div>
  )
}

export default Cart