import React from 'react'
import Button1 from '../Button/Button1'
import StarRating from './Starrating'

const Fproduct1 = ({deta}) => {
  return (
    <div className='slider xsm:min-w-[100vw] sm:min-w-[50vw] md:min-w-[33vw] lg:min-w-[20vw] llg:min-w-[16.66vw] h-max    '>
        <div className='w-full h-max  bg-white1 flex justify-center items-center flex-col p-2 relative border border-zinc-200  overflow-hidden'>
           <div className='w-full'> <h1 className="text-xs text-left font-mono italic">{deta.Ftitle}</h1></div> 
            
              <img className='w-10/12 h-auto scale-75 hover:scale-90 transition-all' src= {deta.image} alt=''/>
              <div className='w-full h-max'> 
              <div className='w-full '>  
            <h1 className='py-2 text-left text-lg'> {deta.Prise}</h1>
            </div>

            <div className='w-full h-max mb-1'> 
            <h1 className='text-base text-left h-12   overflow-hidden text-ellipsis line-clamp-2'>{deta.Title}</h1>
            </div>
            <div className=' w-full h-10 text-xl '>
     
     <StarRating totalStars={5} defaultRating={deta.rank} />

     </div>
            </div>
         



                <div className='w-full  flex justify-center items-center'> 

                <Button1/>

                </div>
           


        </div>
      
    </div>
  )
}

export default Fproduct1
