import React from 'react'
import StarRating from './Starrating'

const Product = ({deta}) => {
  return (
    <div className='xsm:w-[100vw] sm:w-[49.5vw]  md:w-[33vw] lg:w-[19.9vw] h-max  '>
        <div className='w-full  h-max bg-white1  border border-zinc-200 py-2'> 
        <div className='w-full  '> 
            <h1 className='px-2 py-2'>{deta.Ftitle}</h1>

        </div>
        <div className='w-full h-44  flex justify-center items-center'> 
            <img className='w-7/12 h-full hover:scale-110 transition-all' src={deta.image} alt='' />

        </div>
        <div className='w-full h-44 p-5'> 
            <h1 className='text-2xl py-2'>{deta.Prise}</h1>

             <div className=' w-full h-10 text-xl  text-left'>
     
     <StarRating totalStars={5} defaultRating={deta.rank} />

   </div>


            <div className='w-full min-h-5 overflow-hidden text-ellipsis line-clamp-2 '> 
                <h1 className='text-base '>{deta.Title}</h1>
            </div>

        </div>
        <div className='w-full flex justify-center items-center '>
            <button className='px-8 py-2 rounded-xl bg-green-100 text-text-900 hover:text-white hover:bg-green1'> Order Now</button>

        </div>


        </div>
    </div>
  )
}

export default Product
