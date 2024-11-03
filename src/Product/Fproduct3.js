import React from 'react'
import StarRating from './Starrating'

const Fproduct3 = ({deta}) => {
  return (
    <div className='w-full  h-40 bg-white1  flex  border border-zinc-200  overflow-hidden'>

        <div className='w-1/3 h-full  border-r border-zinc-200 flex justify-center items-center '> 
        <img className='w-full h-auto scale-75 hover:scale-90 transition-all' src={deta.image} alt=''/>
        
        </div>
        <div className='w-2/3 h-full py-2 px-2 '>
        <h1 className='text-xs font-mono italic'>{deta.Ftitle}</h1>
        <h1 className='text-xl py-2'>{deta.Prise}</h1>
        <h1 className='text-base  overflow-hidden text-ellipsis line-clamp-2'>{deta.Title}</h1>
        <div className=' w-full h-10 text-xl  text-left'>
     
       <StarRating totalStars={5} defaultRating={deta.rank} />

     </div>
        
         </div>
      
    </div>
  )
}

export default Fproduct3
