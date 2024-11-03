import React from 'react'
import Slide from './Slide'
import Ban1 from "../Assets/banPhoto/ban1.jpg"
import Ban2 from "../Assets/banPhoto/ban2.jpg"
import Ban3 from "../Assets/banPhoto/ban3.jpg"
import Ban4 from "../Assets/banPhoto/ban4.jpg"


const Page1 = () => {
  return (
    <div className='w-full  '>
<div className=' w-90 m-auto h-max bg-zinc-00 flex xsm:flex-col md:flex-row lg:flex-row  items-center       gap-5 z-10'>
<div className=" xsm:w-full xsm:h-48 lsm:h-72 md:h-96 lg:h-96 rounded-xl z-10  overflow-hidden relative">
  
  <Slide image ={Ban1}/>
  <h1 className='xsm:text-2xl md:text-3xl lg:text-5xl   z-30 xsm:mt-5 md:mt-40 lg:mt-20  absolute px-2 font-mono font-bold italic'> Fresh Organic</h1>
      <h1 className='xsm:text-lg md:text-xl lg:text-2xl   z-30 xsm:mt-2 md:mt-40 lg:mt-20  py-12 px-2 absolute font-sans font-bold text-green '> Food For All </h1>
      <h1 className='xsm:text-2xl  lg:text-4xl z-30 xsm:mt-20 md:mt-60 lg:mt-40 left-20 absolute text-zinc-900 font-bold font-sans py-3'> $ 59.00</h1>
      <button className=' z-30 absolute text-md xsm:py-1 lg:py-2  hover:bg-green1 hover:text-white font-bold bg-green-100 text-zinc-900 border-2 border-zinc-300 xsm:px-2 md:px-5 lg:px-7 rounded-xl absolute left-20 xsm:bottom-5 md:bottom-10 lg:bottom-20   '> Shop Now</button>
   
 
</div>

    
    <div className='w-full h-max flex flex-col  gap-5'>

    <div className='bg-pink-100 xsm:h-48 lsm:h-72 md:h-48 xsm:w-full   rounded-xl overflow-hidden relative'> 
    <Slide image ={Ban2}/>
    <h1 className='xsm:text-xl lg:text-3xl  z-30 mt-5 px-2 absolute font-mono font-bold italic'> Premium Honeynuts</h1>
      <h1 className='xsm:text-base lg:text-lg   z-30 mt-10 px-2 py-3 absolute font-sans font-bold text-green '> 100% Salted Organic Nuts </h1>
      <h1 className='xsm:text-2xl lg:text-4xl  z-30 mt-20 left-10 absolute text-rose-700 font-bold font-sans py-3'> $ 59.00</h1>
      <button className=' z-30 absolute text-md xsm:py-1 lg:py-2      hover:bg-green1 hover:text-white font-bold bg-green-100 text-zinc-900 border-2 border-zinc-300 xsm:px-2 md:px-5 lg:px-7 rounded-xl absolute left-10 bottom-10 xsm:bottom-5   '> Shop Now</button>
   
    
        </div>

    <div className='w-full xsm:flex-col flex lsm:flex-row md:flex-row lg:flex-row h-max  gap-5'> 

    <div className='w-full rounded-xl xsm:h-48 lsm:h-72 md:h-48 bg-blue-100 overflow-hidden relative'> 

    <Slide image ={Ban3}/>
    <h1 className='xsm:text-lg lg:text-2xl  z-30 mt-5 px-2 absolute text-white font-mono font-bold italic'> New Baby Diaper</h1>
      <h1 className='xsm:text-base lg:text-lg  z-30 mt-10 px-2 py-3 absolute font-sans font-bold text-white '> Top Quality Product </h1>
    
      <button className=' z-30 absolute text-md xsm:py-1 lg:py-2    hover:bg-green1 hover:text-white font-bold bg-green-100 text-zinc-900 border-2 border-zinc-300 xsm:px-2 md:px-5 lg:px-7 rounded-xl absolute left-10 bottom-8 xsm:bottom-4  '> Shop Now</button>
   
   
    </div>

    <div className='w-full rounded-xl xsm:h-48 lsm:h-72 md:h-48 bg-violet-100 overflow-hidden relative'> 


    <Slide image ={Ban4}/>
    <h1 className='xsm:text-lg lg:text-2xl  z-30 mt-5 px-2 absolute font-mono font-bold italic'> Dark wash FaceWash</h1>
      <h1 className='xsm:text-base lg:text-lg  z-30 mt-10 px-2 py-3 absolute font-sans font-bold text-green '> All Fixed Size </h1>
   
      <button className=' z-30 absolute text-md xsm:py-1 lg:py-2  hover:bg-green1 hover:text-white font-bold bg-green-100 text-zinc-900 border-2 border-zinc-300 lg:px-7 xsm:px-3  md:px-5  rounded-xl absolute left-10 bottom-8 xsm:bottom-4  '> Shop Now</button>
   
   
    </div>


    </div>

    </div>
   
   
   
   
   

</div>
      
    </div>
  )
}

export default Page1
