import React from 'react'
import StarRating from './Starrating'

const Fproduct2 = ({deta1}) => {
  return (
    <div className='xsm:w-full sm:w-[44.9vw] md:w-[29.9vw] lg:w-[22.3vw] flex justify-center items-center  '> 
    <div className='w-full h-40 bg-white1   flex   overflow-hidden border border-zinc-200'>
        <div className='w-1/3 h-full flex justify-center items-center '>
          <img className='w-full h-auto scale-75 hover:scale-90 transition-all' src={deta1.image} alt=''/>
        </div>
        <div className='w-2/3 h-full py-2 '>
        <h1 className='text-xs font-mono italic mb-3'>{deta1.Ftitle}</h1>
        <h1 className=' py- xsm:text-[105%] lg:text-[110%]'>{deta1.Prise}</h1>
        <h1 className='w-90 xsm:text-[90%] lg:text-[106%] overflow-hidden text-ellipsis line-clamp-2'>{deta1.Title}</h1>
       
        <div className=' w-full h-10 text-xl  text-left'>
     
       <StarRating totalStars={5} defaultRating={deta1.rank} />

     </div>

        </div>
    
        </div>
    </div>
  )
}

export default Fproduct2
