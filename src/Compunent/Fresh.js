import React from 'react'
import Heade from '../Header/Heade'
import Footer from '../Footer/Footer'
import { useDeta } from '../Context/SharedDeta'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'

const Fresh = () => {
    const {deta, deta6} = useDeta()
  return (
    <div className='w-full h-max bg-zinc-100'>
    <div className='App h-max '> 
      <Heade/>

      <div className='w-full h-max bg-zinc-50 flex flex-wrap'> 
          {deta6.map((items, index)=>(

          <Link
          key={index} 
          to={`/product/${items.Ftitle}/${items.Title}`} 
          state={{ item: items, allDeta: deta6 }}
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

export default Fresh
