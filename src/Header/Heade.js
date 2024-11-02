import React from 'react'
import Dlogo from "../Assets/logoIcon/dark-logo.svg"
import  Babares from "../Assets/menoIcon/black/bevarage.svg"
import  Babares1 from "../Assets/menoIcon/black/Desserts.svg"
import  Babares2 from "../Assets/menoIcon/black/Drinks.svg"
import  Babares3 from "../Assets/menoIcon/black/Fish.svg"
import  Babares4 from "../Assets/menoIcon/black/Fressh.svg"
import  Babares5 from "../Assets/menoIcon/black/Toys.svg"
import  Babares6 from "../Assets/menoIcon/black/Toys.svg"
import  Babares7 from "../Assets/menoIcon/black/vegetables.svg"

import Bev from "../Assets/menoIcon/White/beverage-01.svg"
import Bev1 from "../Assets/menoIcon/White/dessert-01.svg"
import Bev2 from "../Assets/menoIcon/White/drinks-01.svg"
import Bev3 from "../Assets/menoIcon/White/fish-01.svg"
import Bev4 from "../Assets/menoIcon/White/fruits-01.svg"
import Bev5 from "../Assets/menoIcon/White/toys-01.svg"
import Bev6 from "../Assets/menoIcon/White/meat-01.svg"
import Bev7 from "../Assets/menoIcon/White/vegetables-1.svg"

import { Link } from 'react-router-dom'

const Heade = () => {

   
  
  return (
    <div className='z-50'>
    <div className='h-max bg-white py-3 relative'>
        <div className='flex gap-5 xsm:flex-wrap lg:flex-nowrap  '> 
        <div className='xsm:w-full lg:w-2/12 xsm:py-0 lg:py-4  flex justify-between items-center lg:px-3 xsm:px-0'> 
      <Link to="/">  <img src= {Dlogo} alt=''/> </Link> 
        <div className='xsm:block lg:hidden  text-xl py-2 px-5 rounded-2xl font-mono border-2 border-zinc-300 flex justify-center items-center'> 
        
        
       < h1 className='group   '> <i className="fa-solid fa-bars"></i> 
            <ul  className='hidden group-hover:block absolute bg-zinc-50 z-50  w-full leading-8 left-0 top-full '>
            <Link to ="/bevarej">  <li className='flex px-2 gap-5 py-2 border-b-2 border-zinc-300'><img className='w-10 h-10 scale-75' src= {Babares} alt=''/>  Bebares </li></Link>
            <Link to ="/dessert"> <li className='flex px-2 gap-5 py-2 border-b-2 border-zinc-300'><img src= {Babares1} alt=''/> Desserts </li></Link>
            <Link to ="/drink"> <li className='flex px-2 gap-5 py-2 border-b-2 border-zinc-300'><img src= {Babares2} alt=''/> Drinks & Juice </li></Link> 
            <Link to ="/fish"> <li className='flex px-2 gap-5 py-2 border-b-2 border-zinc-300'><img src= {Babares3} alt=''/> Fish & Meats </li></Link>
            <Link to ="/fresh"> <li className='flex px-2 gap-5 py-2 border-b-2 border-zinc-300'><img src= {Babares4} alt=''/> Fresh Fruits </li></Link>
            <Link to ="/pets">  <li className='flex px-2 gap-5 py-2 border-b-2 border-zinc-300'><img src= {Babares5} alt=''/> Pets & Animals </li></Link>
            <Link to ="/toys">  <li className='flex px-2 gap-5 py-2 border-b-2 border-zinc-300'><img src= {Babares6} alt=''/> Toys </li></Link>
            <Link to ="/veg">  <li className='flex px-2 gap-5 py-2 border-b-2 border-zinc-300'><img src= {Babares7} alt=''/> Vegetables </li></Link>
              
               
            </ul>
            </h1>
        
        
         </div>
        
        </div>

        <div className='xsm:w-full lg:w-10/12 xsm:py-0 lg:py-5  flex justify-between gap-2 items-center lg:px-5 xsm:px-0'>
            <div className='flex justify-center items-center w-8/12 xsm:w-10/12 h-10  py-5 rounded-xl overflow-hidden border-2 border-zinc-300'> <input type='search' placeholder='Search Heare' className='w-full h-10 outline-none px-5 bg-white3'/> <button className='w-12 h-10  text-white bg-green1'> <i className="fa-solid fa-magnifying-glass"></i></button> </div>
            
            <button className='w-12 h-12 text-xl border-2 border-zinc-300 rounded-full bg-white1 text-sky-300 flex justify-center items-center'> <i className="fa-solid fa-user"></i> </button>
             </div>
             </div>
             
              <div 
             className="w-full h-max xsm:hidden lg:block  flex z-30 px-2 py-2 border-2 border-zinc-300 bg-zinc-50 justify-center items-center relative">
     
              <ul className="bg-zinc-50  w-full leading-8 flex lg:flex-wrap gap-3 justify-center items-center whitespace-nowrap">
            <Link to ="/products">  <li className='   flex justify-center items-center   gap-2  '><div className='w-12 h-10 flex justify-center items-center  rounded-full '> </div> All Products </li></Link>
            <Link to ="/bevarej">  <li className='  flex justify-center items-center  gap-2  '><div className='w-12 h-10 flex justify-center items-center  rounded-full '><img className='w-full scale-50 h-auto' src= {Bev} alt=''/></div> Bebares </li></Link>
            <Link to ="/dessert"> <li className='   flex justify-center items-center  gap-2 '><div className='w-12 h-10  flex justify-center items-center  rounded-full '><img className='w-full scale-50 h-auto' src= {Bev1} alt=''/></div> Desserts </li></Link>
            <Link to ="/drink"> <li className='  flex justify-center items-center  gap-2  '><div className='w-12 h-10 flex justify-center items-center  rounded-full '><img className='w-full scale-50 h-auto'  src= {Bev2} alt=''/></div> Drinks & Juice </li></Link> 
            <Link to ="/fish"> <li className='   flex justify-center items-center gap-2  '><div className='w-12 h-10 flex justify-center items-center  rounded-full '><img className='w-full scale-50 h-auto'  src= {Bev3} alt=''/></div> Fish & Meats </li></Link>
            <Link to ="/fresh"> <li className='  flex justify-center items-center   gap-2  '><div className='w-12 h-10 flex justify-center items-center  rounded-full '><img className='w-full scale-50  h-auto' src= {Bev4} alt=''/></div> Fresh Fruits </li></Link>
            <Link to ="/pets">  <li className='  flex justify-center items-center  gap-2  '><div className='w-12 h-10 flex justify-center items-center  rounded-full '><img className='w-full scale-50  h-auto' src= {Bev5} alt=''/></div> Pets & Animals </li></Link>
            <Link to ="/toys">  <li className='   flex justify-center items-center  gap-2  '><div className='w-12 h-10 flex justify-center items-center  rounded-full '><img className='w-full scale-50 h-auto'  src= {Bev6} alt=''/> </div>Toys </li></Link>
            <Link to ="/veg">  <li className='   flex justify-center items-center  gap-2  '><div className='w-12 h-10 flex justify-center items-center  rounded-full '><img className='w-full scale-50  h-auto' src= {Bev7} alt=''/></div> Vegetables </li></Link>
              
               
            </ul>
           
             
             
              </div>

    </div>
    </div>
  )
}

export default Heade
