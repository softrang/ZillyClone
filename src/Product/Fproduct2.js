import React from 'react'
import StarRating from './Starrating'

const Fproduct2 = ({deta1}) => {
  return (
    <div className='w-80 flex justify-center items-center p-2 '> 
    <div className='w-full h-40 bg-white1 shadow-md shadow-zinc-800 rounded-xl flex   overflow-hidden border-2 border-zinc-300'>
        <div className='w-1/3 h-full flex justify-center items-center '>
          <img className='w-full h-auto scale-75 hover:scale-90 transition-all' src={deta1.image} alt=''/>
        </div>
        <div className='w-2/3 h-full py-2 '>
        <h1 className='text-xs font-mono italic'>{deta1.Ftitle}</h1>
        <h1 className='text-xl py-2'>{deta1.Prise}</h1>
        <h1 className='text-base overflow-hidden text-ellipsis line-clamp-2'>{deta1.Title}</h1>
       
        <div className=' w-full h-10 text-xl  text-left'>
     
       <StarRating totalStars={5} defaultRating={deta1.rank} />

     </div>

        </div>
    
        </div>
    </div>
  )
}

export default Fproduct2
