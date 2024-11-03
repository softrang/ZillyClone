import React, { useEffect,  useState } from 'react'
import Fproduct1 from '../Product/Fproduct1'
import { useDeta } from '../Context/SharedDeta'
import Banner1 from "../Assets/banner/banner1.jpg"
import { Link } from 'react-router-dom'

const Page2 = () => {


  const {deta,  deta2, deta3 } = useDeta()

  const [item1, item2, item3, item4]= deta
  const [item11, item22, item33, item44]= deta2
  const [item111, item222, item333, item444]= deta3
 
  const Veg = [item1, item11, item111, item2,item22, item222, item3, item33,item333, item4, item44, item444 ];
 
 const Vegg = deta3;
 const Veggg = deta;
 const Beb1 = deta2;
 
 const Allle = Veg.length;
 
 const Beb = deta2.length;
 
 const Dess = deta2.length;
 
 const Vegl = deta.length

 //const Slide = document.querySelectorAll('.slider');
 //const khan = Slide.length
 //const oasim = khan -(Beb+Dess+Vegl);
 
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
   
   
    useEffect(() => {
     // const Slide = document.querySelectorAll('.slider');
      const All = document.querySelector(".all");
      const Bev1 = document.querySelector(".bev1");
      const Des = document.querySelector(".des");
      const Veg11 = document.querySelector(".veg");

      const next = document.querySelector(".goNext");
      const prev = document.querySelector(".goPrev");
       
      const nextt = document.querySelector(".goNextt");
      const prevv = document.querySelector(".goPrevv");
       
      const next2 = document.querySelector(".goNext2");
      const prev2 = document.querySelector(".goPrev2");
       
      const next3 = document.querySelector(".goNext3");
      const prev3 = document.querySelector(".goPrev3");
       



      const Alll= All.childNodes
        const Bev11= Bev1.childNodes
        const Des11= Des.childNodes
        const Vegg11= Veg11.childNodes
    
      
      const Next = () => {
        setCount((prevCount) => {
          const newCount = prevCount + 1;
          Alll.forEach((slider) => {
            if (slider.style) { 
              slider.style.transition = 'transform 0.7s ease-in-out';
              slider.style.transform = `translateX(-${100 * newCount}%)`;
            }
            console.log(newCount)
          });
          return newCount;
        });
      };
     

      const Next1 = () => {
        setCount1((prevCount) => {
          const newCount = prevCount + 1;
          Bev11.forEach((slider) => {
            if (slider.style) { 
              slider.style.transition = 'transform 0.7s ease-in-out';
              slider.style.transform = `translateX(-${100 * newCount}%)`;
            }
            console.log(newCount)
          });
          return newCount;
        });
      };
      const Next2 = () => {
        setCount2((prevCount) => {
          const newCount = prevCount + 1;
          Des11.forEach((slider) => {
            if (slider.style) { 
              slider.style.transition = 'transform 0.7s ease-in-out';
              slider.style.transform = `translateX(-${100 * newCount}%)`;
            }
            console.log(newCount)
          });
          return newCount;
        });
      };

      const Next3 = () => {
        setCount3((prevCount) => {
          const newCount = prevCount + 1;
          Vegg11.forEach((slider) => {
            if (slider.style) { 
              slider.style.transition = 'transform 0.7s ease-in-out';
              slider.style.transform = `translateX(-${100 * newCount}%)`;
            }
            console.log(newCount)
          });
          return newCount;
        });
      };




      const Prev = () => {
        setCount((prevCount) => {
          const newCount = prevCount - 1;
          Alll.forEach((slider) => {
            slider.style.transition = 'transform 0.7s ease-in-out';
            slider.style.transform = `translateX(-${100 * newCount}%)`;
            console.log(newCount)
          });
          return newCount;
        });
      };


      const Prev1 = () => {
        setCount1((prevCount) => {
          const newCount = prevCount - 1;
          Bev11.forEach((slider) => {
            slider.style.transition = 'transform 0.7s ease-in-out';
            slider.style.transform = `translateX(-${100 * newCount}%)`;
            console.log(newCount)
          });
          return newCount;
        });
      };

      const Prev2 = () => {
        setCount2((prevCount) => {
          const newCount = prevCount - 1;
          Des11.forEach((slider) => {
            slider.style.transition = 'transform 0.7s ease-in-out';
            slider.style.transform = `translateX(-${100 * newCount}%)`;
            console.log(newCount)
          });
          return newCount;
        });
      };


      const Prev3 = () => {
        setCount3((prevCount) => {
          const newCount = prevCount - 1;
          Vegg11.forEach((slider) => {
            slider.style.transition = 'transform 0.7s ease-in-out';
            slider.style.transform = `translateX(-${100 * newCount}%)`;
            console.log(newCount)
          });
          return newCount;
        });
      };



      if ( count >= Allle -6) {
       
        next.disabled = true; 
        next.style.opacity="0.5" 
     

      } 
       else {
        next.disabled = false;
        next.style.opacity="1" 
      }
      if ( count1 >= Beb-6) {
       
        nextt.disabled = true; 
        nextt.style.opacity="0.5" 
     

      } 
       else {
        nextt.disabled = false;
        nextt.style.opacity="1" 
      }
     

      if ( count2 >= Dess-6) {
       
        next2.disabled = true; 
        next2.style.opacity="0.5" 
     

      } 
       else {
        next2.disabled = false;
        next2.style.opacity="1" 
      }


      if ( count3 >= Vegl-6) {
       
        next3.disabled = true; 
        next3.style.opacity="0.5" 
     

      } 
       else {
        next3.disabled = false;
        next3.style.opacity="1" 
      }






     
      if (count <= 0) {
       
        prev.disabled = true; 
        prev.style.opacity="0.5" 
      

      } else {
        prev.disabled = false; 
        prev.style.opacity="1" 
      }


      if (count1 <= 0) {
       
        prevv.disabled = true; 
        prevv.style.opacity="0.5" 
      

      } else {
        prevv.disabled = false; 
        prevv.style.opacity="1" 
      }


      if (count2 <= 0) {
       
        prev2.disabled = true; 
        prev2.style.opacity="0.5" 
      

      } else {
        prev2.disabled = false; 
        prev2.style.opacity="1" 
      }


      if (count3 <= 0) {
       
        prev3.disabled = true; 
        prev3.style.opacity="0.5" 
      

      } else {
        prev3.disabled = false; 
        prev3.style.opacity="1" 
      }




      next.addEventListener("click", Next);
      prev.addEventListener("click", Prev);
      nextt.addEventListener("click", Next1);
      prevv.addEventListener("click", Prev1);
      next2.addEventListener("click", Next2);
      prev2.addEventListener("click", Prev2);
      next3.addEventListener("click", Next3);
      prev3.addEventListener("click", Prev3);



      return () => {
        next.removeEventListener('click', Next);
        prev.removeEventListener('click', Prev);
        nextt.removeEventListener('click', Next1);
        prevv.removeEventListener('click', Prev1);
        next2.removeEventListener('click', Next2);
        prev2.removeEventListener('click', Prev2);
        next3.removeEventListener('click', Next3);
        prev3.removeEventListener('click', Prev3);


      };


    });




useEffect(()=>{
  
  const All1 = document.querySelector(".all1");
  const All = document.querySelector(".all");
  const Bev = document.querySelector(".bev");
  const Bev1 = document.querySelector(".bev1");
  const Des1 = document.querySelector(".des1");
  const Des = document.querySelector(".des");
  const Veg1 = document.querySelector(".veg1");
  const Veg11 = document.querySelector(".veg");




  All1.addEventListener("click",()=>{
    All.style.transition = 'transform 0.7s ease-in-out';
   All.style.transform= "translateY(0%)"
     Des.style.transform= "translateY(0%)"
      Veg11.style.transform= "translateY(0%)"
       Bev1.style.transform= "translateY(0%)"

       const next = document.querySelector(".goNext");
       const prev = document.querySelector(".goPrev");
       
       const nextt = document.querySelector(".goNextt");
       const prevv = document.querySelector(".goPrevv");
       
       const next2 = document.querySelector(".goNext2");
       const prev2 = document.querySelector(".goPrev2");
       
       const next3 = document.querySelector(".goNext3");
       const prev3 = document.querySelector(".goPrev3");
       
       next.style.display="block"
       prev.style.display="block"
       nextt.style.display="none"
       prevv.style.display="none"
       next2.style.display="none"
       prev2.style.display="none"
       next3.style.display="none"
       prev3.style.display="none"







   
  })



Des1.addEventListener("click",()=>{
  Des.style.transform= "translateY(-100%)"
  Des.style.transition = 'transform 0.7s ease-in-out';
 All.style.transform= "translateY(100%)"
  Veg11.style.transform= "translateY(0%)"
   Bev1.style.transform= "translateY(0%)"

   const next = document.querySelector(".goNext");
       const prev = document.querySelector(".goPrev");
       
       const nextt = document.querySelector(".goNextt");
       const prevv = document.querySelector(".goPrevv");
       
       const next2 = document.querySelector(".goNext2");
       const prev2 = document.querySelector(".goPrev2");
       
       const next3 = document.querySelector(".goNext3");
       const prev3 = document.querySelector(".goPrev3");
       
       next.style.display="none"
       prev.style.display="none"
       nextt.style.display="none"
       prevv.style.display="none"
       next2.style.display="block"
       prev2.style.display="block"
       next3.style.display="none"
       prev3.style.display="none"





  
});


Veg1.addEventListener("click",()=>{

  Veg11.style.transform= "translateY(-100%)"
  Veg11.style.transition = 'transform 0.7s ease-in-out';
 All.style.transform= "translateY(100%)"
 Des.style.transform= "translateY(0%)"
 Bev1.style.transform= "translateY(0%)"



 const next = document.querySelector(".goNext");
       const prev = document.querySelector(".goPrev");
       
       const nextt = document.querySelector(".goNextt");
       const prevv = document.querySelector(".goPrevv");
       
       const next2 = document.querySelector(".goNext2");
       const prev2 = document.querySelector(".goPrev2");
       
       const next3 = document.querySelector(".goNext3");
       const prev3 = document.querySelector(".goPrev3");
       
       next.style.display="none"
       prev.style.display="none"
       nextt.style.display="none"
       prevv.style.display="none"
       next2.style.display="none"
       prev2.style.display="none"
       next3.style.display="block"
       prev3.style.display="block"











});

Bev.addEventListener("click",()=>{
  Bev1.style.transform= "translateY(-100%)"
  Bev1.style.transition = 'transform 0.7s ease-in-out';
All.style.transform= "translateY(100%)"
  Des.style.transform= "translateY(100%)"
   Veg11.style.transform= "translateY(100%)"




   const next = document.querySelector(".goNext");
   const prev = document.querySelector(".goPrev");
   
   const nextt = document.querySelector(".goNextt");
   const prevv = document.querySelector(".goPrevv");
   
   const next2 = document.querySelector(".goNext2");
   const prev2 = document.querySelector(".goPrev2");
   
   const next3 = document.querySelector(".goNext3");
   const prev3 = document.querySelector(".goPrev3");
   
   next.style.display="none"
   prev.style.display="none"
   nextt.style.display="block"
   prevv.style.display="block"
   next2.style.display="none"
   prev2.style.display="none"
   next3.style.display="none"
   prev3.style.display="none"







});

       

});


  




  return (
     <div className='w-full'>
    <div className=' w-90 m-auto h-max bg-zinc-50  z-10  '>
        <div className='w-full flex xsm:flex-col  lg:flex-row h-max justify-between items-center px-2'> 
        <h1 className=' xsm: w-full text-3xl font-sans px-2 py-2 font-bold'> Featured Products</h1>

        <div className=' xsm: w-full flex gap-2 justify-end items-center py-2'>
            <button className='all1 text-xsm xsm:px-1 lg:px-2'>All ({Allle})</button>
            <button className='bev text-xsm xsm:px-1 lg:px-2'>Beverage ({Beb})</button>
            <button className=' des1 text-xsm xsm:px-1 lg:px-2'>Desserts ({Dess}) </button>
            <button className='veg1 text-xsm xsm: px-1 lx:px-2'>Vegetables ({Vegl}) </button>

            <button className='goPrev w-10 h-10 border-2 border-zinc-400 opacity-50'><i className="fa-solid fa-angle-left"></i></button>
            <button className='goNext w-10 h-10 border-2 border-zinc-400 opacity-50'><i className="fa-solid fa-angle-right"></i></button>
            <button className='goPrevv hidden w-10 h-10 border-2 border-zinc-400 opacity-50'><i className="fa-solid fa-angle-left"></i></button>
            <button className='goNextt hidden w-10 h-10 border-2 border-zinc-400 opacity-50'><i className="fa-solid fa-angle-right"></i></button>
            <button className='goPrev2 hidden w-10 h-10 border-2 border-zinc-400 opacity-50'><i className="fa-solid fa-angle-left"></i></button>
            <button className='goNext2 hidden w-10 h-10 border-2 border-zinc-400 opacity-50'><i className="fa-solid fa-angle-right"></i></button>
            <button className='goPrev3 hidden w-10 h-10 border-2 border-zinc-400 opacity-50'><i className="fa-solid fa-angle-left"></i></button>
            <button className='goNext3 hidden w-10 h-10 border-2 border-zinc-400 opacity-50'><i className="fa-solid fa-angle-right"></i></button>

             </div>

        </div>

        <div className='w-full h-92 relative overflow-hidden '> 
    <div className='w-full h-max all flex overflow-hidden '> 

       
    {Veg.map((items, index) => (
      <Link 
      key={index} 
      to={`/product/${items.Ftitle}/${items.Title}`} 
      state={{ item: items, allDeta: Veg }}
      >
      <Fproduct1 deta={items} />
      </Link>

))}

              
      </div>

      <div className=' bev1 flex overflow-hidden absolute '> 

       
          {Beb1.map((items, index)=>(

            <Link 
            key={index} 
            to={`/product/${items.Ftitle}/${items.Title}`} 
            state={{ item: items, allDeta: Veg }}
            >
            <Fproduct1 deta={items} />
            </Link>


          ))}
              
      </div>
     

      <div className='des flex absolute '> 
      {Vegg.map((items, index)=>(

           <Link 
            key={index} 
            to={`/product/${items.Ftitle}/${items.Title}`} 
            state={{ item: items, allDeta: Veg }}
            >
            <Fproduct1 deta={items} />
            </Link>


          ))}

      </div>

      <div className='veg flex absolute'>
      {Veggg.map((items, index)=>(

           <Link 
            key={index} 
            to={`/product/${items.Ftitle}/${items.Title}`} 
            state={{ item: items, allDeta: Veg }}
            >
            <Fproduct1 deta={items} />
            </Link>


          ))}

      </div>


      </div>
     


<div className='w-full h-44 bg-zinc-50 py-2'>
    <img className='w-full h-full' src={Banner1} alt=''/>
    
    
    
     </div>

     

    </div>
        </div>
  )
}

export default Page2
