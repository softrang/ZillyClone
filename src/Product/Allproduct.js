import React, { useState } from 'react'
import Heade from '../Header/Heade'
import Footer from '../Footer/Footer'
import { useDeta } from '../Context/SharedDeta'
import Product from './Product'
import { Link } from 'react-router-dom'

const Allproduct = () => {

    const {deta,  deta2, deta3, deta4, deta5, deta6, deta7, deta8 } = useDeta()

const Deta9 = [...deta8,  ...deta2, ...deta7, ...deta5, ...deta4, ...deta6, ...deta3, ...deta ];
 

const [selectedItems, setSelectedItems] = useState([]);


const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== value));
    }
  };












return (
    <div className='App h-max'>
        <Heade/>
        <div className='w-full h-max flex gap-5 '> 
            <div className='w-3/12 h-max '>
            <div className='w-full h-max bg-zinc-50 mb-10 mt-10 border-2 border-zinc-300 rounded-xl '> 
                <h1 className='w-full text-center text-2xl py-2 font-mono font-bold'> Filter By Catagory</h1>

                <ul className='w-full text-base p-5 font-mono'>
        {[
          'Beverage',
          'Desserts',
          'Drinks & Juice',
          'Fish & Meats',
          'Fresh Fruits',
          'Pets & Animals',
          'Toys',
          'Vegetables'
        ].map((item) => (
          <li key={item} className='text-xl h-10 flex justify-left gap-3 items-center'>
            <input
              type="checkbox"
              className='w-5 h-5 border-2 border-zinc-300'
              value={item}
              onChange={handleCheckboxChange}
            />
            {item}
          </li>
        ))}
      </ul>

            </div>
           

             </div>
            <div className='w-9/12 h-max bg-white'>

            <div className='w-full h-max flex flex-wrap'> 
            {Deta9.filter((items) =>items.Ftitle.includes(selectedItems)).map((items, index )=>(
                    <Link
                    key={index} 
                    to={`/product/${items.Ftitle}/${items.Title}`} 
                    state={{ item: items, allDeta: Deta9 }}
                    >
                    <Product deta={items} />
                    </Link>
                ))}



            </div>
            
            
             </div>


        </div>
      

    <Footer/>
    </div>
  )
}

export default Allproduct
