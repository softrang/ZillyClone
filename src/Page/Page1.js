import React from 'react'
import Slide from './Slide'
import Ban1 from "../Assets/banPhoto/ban1.jpg"
import Ban2 from "../Assets/banPhoto/ban2.jpg"
import Ban3 from "../Assets/banPhoto/ban3.jpg"
import Ban4 from "../Assets/banPhoto/ban4.jpg"


const Page1 = () => {
  return (
    <div className='w-full  '>
<div className=' App h-max bg-zinc-00 grid      grid-cols-2  grid-rows-1 p-5 gap-5 z-10'>
<div className="  rounded-xl z-10  overflow-hidden relative">
  
  <Slide image ={Ban1}/>
  <h1 className='text-5xl   z-30 mt-40  absolute px-2 font-mono font-bold italic'> Fresh Organic</h1>
      <h1 className='text-2xl   z-30 mt-40  py-12 px-2 absolute font-sans font-bold text-green '> Food For All </h1>
      <h1 className='text-4xl z-30 mt-80 left-20 absolute text-zinc-900 font-bold font-sans py-3'> $ 59.00</h1>
      <button className=' z-30 absolute text-md py-2 sm:text-sm sm:py-1 sm:px-3 xl:text-base xl:py-2 xl:px-7 hover:bg-green1 hover:text-white font-bold bg-green-100 text-zinc-900 border-2 border-zinc-300 px-7 rounded-xl absolute left-20 bottom-40 sm:bottom-20  '> Shop Now</button>
   
 
</div>

    
    <div className=' grid  grid-cols-1  grid-rows-2  gap-5'>
    <div className='bg-pink-100 h-60  rounded-xl overflow-hidden relative'> 
    <Slide image ={Ban2}/>
    <h1 className='text-3xl  z-30 mt-5 px-2 absolute font-mono font-bold italic'> Premium Honeynuts</h1>
      <h1 className='text-lg   z-30 mt-10 px-2 py-3 absolute font-sans font-bold text-green '> 100% Salted Organic Nuts </h1>
      <h1 className='text-4xl  z-30 mt-20 left-10 absolute text-rose-700 font-bold font-sans py-3'> $ 59.00</h1>
      <button className=' z-30 absolute text-md py-2      hover:bg-green1 hover:text-white font-bold bg-green-100 text-zinc-900 border-2 border-zinc-300 px-7 rounded-xl absolute left-10 bottom-10   '> Shop Now</button>
   
    
        </div>
    <div className=' grid  grid-cols-2  grid-rows-1  gap-5'> 

    <div className='rounded-xl bg-blue-100 overflow-hidden relative'> 

    <Slide image ={Ban3}/>
    <h1 className='text-2xl  z-30 mt-5 px-2 absolute text-white font-mono font-bold italic'> New Baby Diaper</h1>
      <h1 className='text-lg  z-30 mt-10 px-2 py-3 absolute font-sans font-bold text-white '> Top Quality Product </h1>
    
      <button className=' z-30 absolute text-md py-2    hover:bg-green1 hover:text-white font-bold bg-green-100 text-zinc-900 border-2 border-zinc-300 px-7 rounded-xl absolute left-10 bottom-8  '> Shop Now</button>
   
   
    </div>
    <div className='rounded-xl bg-violet-100 overflow-hidden relative'> 


    <Slide image ={Ban4}/>
    <h1 className='text-2xl  z-30 mt-5 px-2 absolute font-mono font-bold italic'> Dark wash FaceWash</h1>
      <h1 className='text-lg  z-30 mt-10 px-2 py-3 absolute font-sans font-bold text-green '> All Fixed Size </h1>
   
      <button className=' z-30 absolute text-md py-2  hover:bg-green1 hover:text-white font-bold bg-green-100 text-zinc-900border-2 border-zinc-300 px-7   rounded-xl absolute left-10 bottom-8  '> Shop Now</button>
   
   
    </div>
    </div>

    </div>
   
   
   
   
   

</div>
      
    </div>
  )
}

export default Page1
