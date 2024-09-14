import React, { useState } from 'react'
import Heade from '../Header/Heade'
import Footer from '../Footer/Footer'
import { Link, useLocation } from 'react-router-dom'
import Product from './Product'

const ProductDetails = () => {
 
  const {item, allDeta} = useLocation().state
  const subDeta= allDeta.filter(obj => obj.image !== item.image)
  const [count, setCount] = useState(1);

  
  const Increment = () => {
    setCount(count + 1);
  };

  const Dicrement = () => {
    setCount(count - 1);
  };




 
  return (
    <>  
    <div className='App h-max'>
      <Heade/>
      <div className='w-full h-max  flex gap-5'> 

        <div className='w-1/2 h-max border-2 border-zinc-300 flex justify-center items-center'>

        <div className='w-96 h-96 mt-10  '>
          <img className='w-full h-full ' src={item.image} alt=''/>

        </div>

        </div>
        <div className='w-2/3 h-96 px-5'>
        <h1 className='text-2xl py-2 font-mono font-bold '> {item.Title}</h1>
        <h1 className='text-xl py-2 font-sans italic '>{item.Prise}</h1>
      
      <div className='w-full flex  justify-center items-center'> 
      <div className='w-1/2 h-max flex mt-2'> 
      <h1 className='leading-6 mt-2'> পরিমাণ : </h1>
      <button onClick={Dicrement} className='w-12 h-10 border-2 border-green-200 text-3xl  ml-2'>-</button>
      <button className='w-12 h-10 border-2 border-green-200 text-3xl '>{count}</button>
      <button onClick={Increment} className='w-12 h-10 border-2 border-green-200 text-3xl '>+</button>

     </div>

     <div className='w-1/2 h-full px-5'> 
        <button className='w-full  bg-blue-800  text-white text-2xl py-2 shadow-lg shadow-slate-600 rounded-md'> অর্ডার করুন </button>
        <button className='w-full  bg-orange-400 text-2xl py-2 mt-5 shadow-lg shadow-neutral-600 rounded-md'> কার্ট-এ যোগ করুন </button>

      </div>

      </div>
      <div className='w-1/2 h-48  flex mt-10'>
          <div className='w-1/2'>
          <h1>SKU: BG </h1>
          <h1>Tag </h1>

          </div>
          <div className='w-1/2'>
          <h1> Cateagoriy: {item.Ftitle} </h1>
          <h1> MFO: </h1>

          </div>
        </div>

        </div>
       

      </div>
      <div className='w-full h-max '> 
      <h1 className='px-2 py-3 text-black text-2xl font-sans '>Discription </h1> 
    <div className='w-full h-max text-black text-left p-5 text-xl leading-8 border-t border-blue-500' dangerouslySetInnerHTML={{ __html:item.repro }}> 

    </div>
    </div>


    <div className='App h-max bg-white border border-blue-500 mb-5'> 
    <h1 className='px-2 py-3 text-black text-2xl'> রিলেটেড প্রোডাক্ট </h1> 
    <div className='w-full h-max bg-zinc-50 text-black  text-xl leading-10 border-t border-blue-500 flex flex-wrap gap-3 justify-center itmes-center'> 
 
    {subDeta.map((items, index) => (

   
        <Link 
        key={index}
        to={`/product/${items.Ftitle}/${items.Title}`} 
        state={{ item:items , allDeta: allDeta }}
        >
        <Product  deta={items}/>

        </Link>
        ))}
  
          </div>

          </div>





    
    </div>
  <Footer/>
  </>
  )
}

export default ProductDetails
