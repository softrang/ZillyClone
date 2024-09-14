import React from 'react'

const SlideText = () => {
  return (
    <div className='w-full h-full z-30 absolute px-10 py-5 '>
      <h1 className='text-3xl font-mono font-bold italic'> Premium Honeynuts</h1>
      <h1 className='text-lg font-sans font-bold text-green '> 100% Salted Organic Nuts </h1>
      <h1 className='text-4xl  text-rose-700 font-bold font-sans py-3'> $ 59.00</h1>
      <button className='  text-md py-2  bg-green text-zinc-50 border-2 border-zinc-300 px-7 rounded-xl absolute left-10 bottom-20  '> Shop Now</button>
   
    </div>
  )
}

export default SlideText
