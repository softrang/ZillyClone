import React from 'react'
import Fproduct3 from '../Product/Fproduct3'
import { useDeta } from '../Context/SharedDeta'

import Fproduct11 from '../Product/Fproduct11'
import Fproduct222 from '../Product/Fproduct222'
import { Link } from 'react-router-dom'

const Page5 = () => {
  const {deta, deta4, deta5, deta6,  deta8 } = useDeta()
 

  const [item1, item2]= deta
  const [item11, item22]= deta4
  const [item111, item222]= deta6
  const [item2222] = deta8
  const [item22222] = deta5
  

  const Veg1 = [item1, item11, item111];
  const Veg2 = [item2,item22, item222];
  const Veg3 = [item22222];
  const Veg4 = [item2222];
  



  return (
    <div className='w-full'>
    <div className='  h-max bg-zinc-50 p-2 relative '>
    <div className='w-full flex xsm:flex-col lsm:flex-row '> 

<div className='xsm:w-full  md:w-3/12 h-max bg-zinc-50 flex-justify-center items-center '>

{Veg4.map((items, index)=>(

            <Link
              key={index} 
              to={`/product/${items.Ftitle}/${items.Title}`} 
              state={{ item: items, allDeta: Veg4 }}
              >
              <Fproduct222 deta1={items} />
              </Link>

))}

                {Veg3.map((items, index)=>(

                <Link
                key={index} 
                to={`/product/${items.Ftitle}/${items.Title}`} 
                state={{ item: items, allDeta: Veg3 }}
                >
                <Fproduct11 deta={items} />
                </Link>

                ))}
                

 

 </div>
 <div className='xsm:w-full md:w-9/12 h-max flex  xsm:flex-col md:flex-row'> 
<div className=' xsm:w-full  w-1/2 h-full bg-zinc-50 p-2 '> 

{Veg1.map((items, index)=>(

               <Link
              key={index} 
              to={`/product/${items.Ftitle}/${items.Title}`} 
              state={{ item: items, allDeta: Veg1 }}
              >
              <Fproduct3 deta={items} />
              </Link>

))}





</div>



<div className='xsm:w-full w-1/2  lsm:hidden md:block h-max bg-zinc-50 p-2'>

{Veg2.map((items, index)=>(

<Link
key={index} 
to={`/product/${items.Ftitle}/${items.Title}`} 
state={{ item: items, allDeta: Veg2 }}
>
<Fproduct3 deta={items} />
</Link>

))}


 </div>

 </div>
 </div>




    </div>
          
        </div>
  )
}

export default Page5
