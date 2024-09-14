import React from 'react'
import Fproduct3 from '../Product/Fproduct3'
import { useDeta } from '../Context/SharedDeta'
import Fproduct1 from '../Product/Fproduct1'
import Fproduct2 from '../Product/Fproduct2'
import Fproduct11 from '../Product/Fproduct11'
import Fproduct222 from '../Product/Fproduct222'
import { Link } from 'react-router-dom'

const Page5 = () => {
  const {deta, deta4, deta5, deta6, deta7, deta8 } = useDeta()
 

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
    <div className=' App  h-max bg-zinc-50 p-2 relative '>
    <div className='w-full flex '> 
<div className='w-8/12 h-max flex '> 
<div className='w-5/12 h-max bg-zinc-50 flex-justify-center items-center '>

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
<div className=' w-8/12 h-full bg-zinc-50 p-2 '> 

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


</div>
<div className='w-5/12 h-max bg-zinc-50 p-2'>

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
  )
}

export default Page5
