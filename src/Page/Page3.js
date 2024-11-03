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
    <div className='w-90  m-auto h-max bg-white2 p-4 border-2 border-rose-700 rounded-lg '>
    <div className='w-full flex xsm:flex-col lsm:flex-row lg:flex-row justify-between items-center '>

        <div className='xsm:w-full lsm:w-5/12'> <h1 className=' text-3xl lg:px-2 xsm:py-5 font-serif italic'>Deal Of The Week</h1> </div> 
           <div className='xsm:w-full lsm:w-5/12 flex items-center justify-end gap-5 py-2 xsm:pb-5 xsm:px-0 lg:px-2'> 
            <button className=' w-16 h-16 bg-green1 rounded-xl shadow-lg shadow-zinc-800 text-white font-bold text-xsm px-2 '><p className='d text-xl '></p> days</button>
            <button className=' w-16 h-16 bg-green1 rounded-xl shadow-lg shadow-zinc-800 text-white font-bold text-xsm px-2'><p className='h text-xl'> </p> hours</button>
            <button className=' w-16 h-16 bg-green1 rounded-xl shadow-lg shadow-zinc-800 text-white font-bold text-xsm px-2'> <p className='m text-xl'> </p>munite</button>
            <button className=' w-16 h-16 bg-green1 rounded-xl shadow-lg shadow-zinc-800 text-white font-bold text-xsm px-2'> <p className='s text-xl'> </p> Sec</button>

        </div>

    </div>
    <div className=' w-full h-max bg-greenn rounded-xl  flex xsm:flex-col lsm:flex-row  '>
        <div className='xsm:w-full xsm:h-96 lsm:hidden  lg:block lg:h-auto lg:w-3/12 bg-greenn relative '> 
          <img className='absolute w-full   xsm:h-full lg:h-auto bottom-0' src={Banner2} alt=''/>
          
           </div>
        <div className='lg:w-3/12  lsm:hidden lg:block flex flex-col justify-center items-center '> 
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
        <div className='xsm:w-full lg:w-6/12 flex xsm:flex-col lsm:flex-row lsm:flex-wrap lg:flex-row lg:flex-wrap   justify-center itmes-center'>

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
