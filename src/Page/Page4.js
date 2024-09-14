import React from 'react'
import Fproduct2 from '../Product/Fproduct2'
import { useDeta } from '../Context/SharedDeta'
import  Banner3 from "../Assets/banner/banner3.jpg"
import Fproduct22 from '../Product/Fproduct22'
import { Link } from 'react-router-dom'

const Page4 = () => {

  const {deta,  deta2, deta3, deta4, deta5, deta6, deta7, deta8 } = useDeta()
 

  const [item1, item2]= deta5
  const [item11, item22]= deta6
  const [item111, item222]= deta2
  const [item1111, item2222] = deta8

  const Veg = [item1, item11, item111, item1111, item2,item22, item222, item2222];
  





  return (
    <div className='w-full'>
    <div className=' App h-max bg-zinc-50 '>
    
    <div className='flex justify-between items-center '>
        <div> <h1 className=' text-3xl px-2 font-serif italic'>Trending Products</h1> </div> 
        <div className=' flex gap-5 py-2 px-2'> 
            <button className=' px-5 py-2 bg-rose-500'>See More</button>
        </div>
    </div>
    <div className='w-full bg-zinc-50 flex flex-wrap gap-x-0 gap-y-5 justify-center items-center'>
   
   
    {Veg.map((items, index)=>(

             <Link
              key={index} 
              to={`/product/${items.Ftitle}/${items.Title}`} 
              state={{ item: items, allDeta: Veg }}
              >
              <Fproduct2 deta1={items} />
              </Link>

          ))}
        
        
        
          </div>


<div className='w-full h-68 p-2 bg-zinc-50  py-10'> 
<img className='w-full h-full' src= {Banner3} alt='' />

</div>




    </div>
          
        </div>
  )
}

export default Page4
