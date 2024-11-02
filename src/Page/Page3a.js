import React from 'react'
import Ban5 from "../Assets/banPhoto/ban5.jpg"
import Ban6 from "../Assets/banPhoto/ban6.jpg"
import Ban7 from "../Assets/banPhoto/ban7.jpg"
import Slide from './Slide'

const Page3a = () => {
  return (
    <div className='w-full'> 
    <div className='  w-full h-max  bg-zinc-50 h-max flex xsm:flex-col md:flex-row lg:flex-row gap-5 px-2 py-10 '> 

    <div className='xsm:w-full lg:w-1/3 h-48 bg-zinc-400 rounded-xl overflow-hidden relative '>
    <Slide image={Ban5}/>
    <h1 className='text-xl left-10 text-zinc-50 z-30 mt-5  absolute font-mono font-bold italic'> Creamy Fruits</h1>
      <h1 className='text-lg left-10  text-zinc-50 z-30 mt-8  py-3 absolute font-sans font-bold text-green '> baby Jem </h1>
      <h1 className='text-2xl  z-30  top-12 left-10 absolute text-zinc-50 font-bold font-sans py-3'><span className='text-sm'>Only</span>  <br/> $ 12.99</h1>
      <button className=' z-30 absolute text-base py-1      hover:bg-green1 hover:text-white font-bold bg-zinc-50 text-zinc-900  px-3 rounded-xl absolute left-10 bottom-5   '> Shop Now</button>
   

     </div>
    <div className='xsm:w-full lg:w-1/3 h-48 bg-zinc-400 rounded-xl overflow-hidden relative '>
    <Slide image={Ban6}/>
    <h1 className='text-2xl right-10 text-zinc-900 z-30 mt-5  absolute font-mono font-bold italic'> Organic Fruits</h1>
      <h1 className='text-base right-10 text-zinc-900 z-30 mt-8  py-3 absolute font-sans font-bold text-green '> 100% Organic </h1>
      <h1 className='text-2xl  z-30 text-right  top-12 right-10 absolute text-zinc-900 font-bold font-sans py-3'><span className='text-sm '>Only</span>  <br/> $ 12.99</h1>
      <button className=' z-30 absolute text-base py-1      hover:bg-green1 hover:text-white font-bold bg-zinc-50 text-zinc-900  px-3 rounded-xl absolute right-10 bottom-5   '> Shop Now</button>
   

     </div>
    <div className='xsm:w-full lg:w-1/3 h-48 bg-zinc-400 rounded-xl overflow-hidden relative '>
    <Slide image={Ban7}/>
    <h1 className='text-2xl left-10 text-zinc-900 z-30 mt-5  absolute font-mono font-bold italic'> Kids Car Toys</h1>
      <h1 className='text-base left-10 text-zinc-900 z-30 mt-8  py-3 absolute font-sans font-bold text-green '> 2023 Colletions </h1>
      <h1 className='text-2xl  z-30  top-12 left-10 absolute text-zinc-900 font-bold font-sans py-3'><span className='text-sm'>Only</span>  <br/> $ 5.99</h1>
      <button className=' z-30 absolute text-base py-1      hover:bg-green1 hover:text-white font-bold bg-zinc-50 text-zinc-900  px-3 rounded-xl absolute left-10 bottom-5   '> Shop Now</button>
   


     </div>
    </div>
    </div>
  )
}

export default Page3a

