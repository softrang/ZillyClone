import React from 'react'
import Heade from '../Header/Heade'
import Footer from '../Footer/Footer'
import { useDeta } from '../Context/SharedDeta'
import Fproduct1 from '../Product/Fproduct1'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'

const Desserts = () => {
    const {deta, deta3} = useDeta()
  return (
    <div className='w-full h-max bg-zinc-100'>
    <div className='App h-max '> 
      <Heade/>

      <div className='w-full h-max bg-zinc-100 flex flex-wrap '> 
          {deta3.map((items, index)=>(

          <Link
          key={index} 
          to={`/product/${items.Ftitle}/${items.Title}`} 
          state={{ item: items, allDeta: deta3 }}
          >
          <Product deta={items} />
          </Link>

          ))}
        

      </div>

      <Footer/>

    </div>
  </div>
  )
}

export default Desserts
