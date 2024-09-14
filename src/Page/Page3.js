import React, { useEffect } from 'react'

import Banner2 from "../Assets/banner/banner2.png"
import { useDeta } from '../Context/SharedDeta'

import Fproduct11 from '../Product/Fproduct11'
import Fproduct22 from '../Product/Fproduct22'
import Fproduct222 from '../Product/Fproduct222'
import { Link } from 'react-router-dom'

const Page3 = () => {
  useEffect(() => {
    const endDate = "27 July 2025 08:20:00 PM";
  
    const Day = document.querySelector('.d');
    const Hour = document.querySelector('.h');
    const Minut = document.querySelector('.m');
    const sec = document.querySelector('.s');
  
    function clock() {
      const end = new Date(endDate);
      const now = new Date();
      const diff = (end - now) / 1000;
  
      if (diff < 0) return;
  
      Day.textContent = Math.floor(diff / 3600 / 24);
      Hour.textContent = Math.floor(diff / 3600) % 24;
      Minut.textContent = Math.floor(diff / 60) % 60;
      sec.textContent = Math.floor(diff) % 60;
    }
  
    clock();
  
    const intervalId = setInterval(() => {
      clock();
    }, 1000);
  
    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);







  const { deta3, deta4, deta5, deta6, deta7 } = useDeta()
 

  const [item1, item2]= deta4
  const [item11, item22]= deta5
  const [item111, item222]= deta6
  const [item1111] = deta7
  const [item11111] = deta3

  const Veg = [item1, item11, item111, item2,item22, item222];
  const Veg1 = [item1111]
  const Veg11 = [item11111]

  return (
    <div className='w-full'>
    <div className=' App h-max bg-white2 p-8 border-2 border-rose-700 rounded-lg '>
    <div className='flex justify-between items-center '>
        <div> <h1 className=' text-3xl px-2 font-serif italic'>Deal Of The Week</h1> </div> 
           <div className=' flex gap-5 py-2 px-2'> 
            <button className=' w-16 h-16 bg-green1 rounded-xl shadow-lg shadow-zinc-800 text-white font-bold text-xsm px-2 '><p className='d text-xl '></p> days</button>
            <button className=' w-16 h-16 bg-green1 rounded-xl shadow-lg shadow-zinc-800 text-white font-bold text-xsm px-2'><h1 className='h text-xl'> </h1> hours</button>
            <button className=' w-16 h-16 bg-green1 rounded-xl shadow-lg shadow-zinc-800 text-white font-bold text-xsm px-2'> <h1 className='m text-xl'> </h1>munite</button>
            <button className=' w-16 h-16 bg-green1 rounded-xl shadow-lg shadow-zinc-800 text-white font-bold text-xsm px-2'> <h1 className='s text-xl'> </h1> Sec</button>

        </div>
    </div>
    <div className=' w-full h-max bg-greenn rounded-xl  flex  gap-2'>
        <div className='w-1/2 bg-greenn relative'> 
          <img className='absolute bottom-0' src={Banner2} alt=''/>
          
           </div>
        <div className='w-2/6  flex flex-col justify-center items-center '> 
        {Veg1.map((items, index)=>(

          <Link
          key={index} 
          to={`/product/${items.Ftitle}/${items.Title}`} 
          state={{ item: items, allDeta: Veg }}
          >
          <Fproduct11 deta={items} />
          </Link>

        ))}
        
        {Veg11.map((items, index)=>(

          <Link
          key={index} 
          to={`/product/${items.Ftitle}/${items.Title}`} 
          state={{ item: items, allDeta: Veg }}
          >
          <Fproduct222 deta1={items} />
          </Link>


        ))}
        



         </div>
        <div className='w-10/12 flex flex-wrap gap-x-5  justify-center itmes-center'>

          {Veg.map((items, index)=>(


              <Link
              key={index} 
              to={`/product/${items.Ftitle}/${items.Title}`} 
              state={{ item: items, allDeta: Veg }}
              >
              <Fproduct22 deta1={items} />
              </Link>

          ))}

   
          </div>
         </div>



    </div>
          
        </div>
  )
}

export default Page3
