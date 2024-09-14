import React from 'react'
import StarRating from './Starrating'

const Fproduct11 = ({deta}) => {
  return (
    <div className='min-w-56 h-max mt-1 p-2 '>
    <div className='w-full shadow-md shadow-zinc-800 h-max bg-white1 flex justify-center items-center flex-col p-2 relative border-2 border-zinc-300 rounded-xl overflow-hidden'>
       <div className='w-full'> <h1 className="text-xs text-left font-mono italic">{deta.Ftitle}</h1></div> 
        
          <img className='w-8/12 h-40 scale-75 hover:scale-90 transition-all' src= {deta.image} alt=''/>
          <div className='w-full h-22'> 
          <div className='w-full '>  
        <h1 className='py-2 text-left text-lg'> {deta.Prise}</h1>
        </div>
        <div className=' w-full h-10 text-xl  text-left'>
     
     <StarRating totalStars={5} defaultRating={deta.rank} />

   </div>
        <div className='w-full h-max mb-2'> 
        <h1 className='text-base text-left   overflow-hidden text-ellipsis line-clamp-2'>{deta.Title}</h1>
        </div>
        </div>
        
    </div>
  
</div>
  )
}

export default Fproduct11
