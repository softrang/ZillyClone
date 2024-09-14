import React from 'react'

const Blog1 = ({deta}) => {
  return (
    <div className='blog min-w-[25%] h-max p-3 overflow-hidden'> 
    <div className=' w-full h-max shadow-md shadow-zinc-800 bg-zinc-10 p-2 border-2 border-zinc-300 rounded-xl overflow-hidden'>
        <div className='w-full h-48 '>
        <img className='w-full h-full   hover:scale-[1.1] transition-all' src={deta.image} alt=''/>
        
         </div>
        <h1 className='text-xsm font-sans py-2 italic'>{deta.Ftitle}</h1>
    
        <h1 className='text-xl py-2 font-bold'>{deta.Title}</h1>
        <h1 className='text-sm py-1 leading-6 text-left  overflow-hidden text-ellipsis line-clamp-2 '>{deta.repro}</h1>
       

<div className='w-full h-10 flex justify-end items-center'> 
  <button className='px-2 py-1 bg-sky-900 rounded-xl font-bold text-zinc-50 hover:bg-green1 hover:text-white'> Read More </button>
</div>

</div>

    </div>
  )
}

export default Blog1
