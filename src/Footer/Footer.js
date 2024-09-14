import React from 'react'
import Llogo from "../Assets/logoIcon/light-logo.svg"
import Play from "../Assets/logoIcon/google-play.jpg"
import App from "../Assets/logoIcon/app-stoe.jpg"
import Pay from "../Assets/logoIcon/payment-logo.svg"

const Footer = () => {
  return (
    <div className='bg-green1'>
    <div className=' App h-max bg-green text-white '>
<div className=' w-full h-max flex gap-2 px-5'> 
<div className='w-1/4  p-2'>
<img className='py-5' src= {Llogo} alt='' />
<p className='text-xsm font-mono italic mb-5'> When an unknown printer took a galley of type scrambled it to make a type specimen book.</p>
<p className='mt-2'> <i className="fa-solid fa-location-dot"></i>&nbsp;  23/A Road, Newyork City</p>
<p className='mt-2'> <i className="fa-solid fa-phone-volume"></i>&nbsp;  +9888-256-666</p>


 </div>
<div className='w-1/6  p-2'> 
<h1 className='text-2xl px-5 py-5 '> Quick Links </h1>
<h1 className='text-xl px-5 py-1 '> Smartphones </h1>
<h1 className='text-xl px-5 py-1 '> Headphones </h1>
<h1 className='text-xl px-5 py-1 '> Laptop & Tablet </h1>
<h1 className='text-xl px-5 py-1 '> Monitors </h1>
<h1 className='text-xl px-5 py-1 '> Printers </h1>
<h1 className='text-xl px-5 py-1 '> Gadgets </h1>
 
 
</div> 
<div className='w-1/6  p-2'> 
<h1 className='text-2xl px-5 py-5 '> Acount </h1>
<h1 className='text-xl px-5 py-1 '> Dashboard </h1>
<h1 className='text-xl px-5 py-1 '> Orders </h1>
<h1 className='text-xl px-5 py-1 '> Edit Address </h1>
<h1 className='text-xl px-5 py-1 '> Order Details </h1>
<h1 className='text-xl px-5 py-1 '> Thank You </h1>
<h1 className='text-xl px-5 py-1 '> Login Register</h1>

</div>
<div className='w-1/5  p-2'> 
<h1 className='text-2xl px-5 py-5 '> Privacy Policy </h1>
<h1 className='text-xl px-5 py-1 '> Returns & Exchanges </h1>
<h1 className='text-xl px-5 py-1 '> Payment Terms </h1>
<h1 className='text-xl px-5 py-1 '> Delivery Terms</h1>
<h1 className='text-xl px-5 py-1 '> Payment & Pricing </h1>
<h1 className='text-xl px-5 py-1 '> Terms Of Use </h1>
<h1 className='text-xl px-5 py-1 '> Privacy Policy </h1>

</div>
  <div className='w-1/4  p-2'> 
  <h1 className='text-2xl py-5 '> Sinup News Later</h1>
  <p className='text-xsm'>When an unknown printer took a <br/> galley of type and scrambled</p>

  <dvi className="w-11/12 h-max flex  border-2 border-zinc-100 rounded-xl overflow-hidden mt-5 mb-5"> 
    <input type='text' placeholder='Serch Hare ' className='w-full h-8 px-5 text-md outline-none text-black bg-zinc-100'/>
    <button className='w-12 h-18 bg-green1 text-zinc-100'> <i className="fa-solid fa-magnifying-glass"></i> </button>
  </dvi>
  <p className='text-sm'>Download App on Mobile :</p>
  <p className='text-xsm'>15% discount on your first purchase</p>
<div className='w-full h-8 flex mt-3 gap-5'> 
<div className='w-1/3 '>
<img className='w-full h-full' src={Play} alt=''/>

 </div>
<div className='w-1/3 '>
<img className='w-full h-full' src={App} alt=''/>
 </div>

</div>




</div>



</div>
<hr className='w-full h-5 mt-5 '/>
<div className='w-full h-10 flex justify-between items-center px-10'> 

<div> <h1> © 2024 zilly. All Rights Reserved by RadiusTheme  </h1> </div>
<div> <img src= {Pay} alt='' /> </div>

</div>

    </div>
    </div>
  )
}

export default Footer
