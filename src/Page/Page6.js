import React, { useEffect, useState } from 'react'
import Blog1 from '../Blog/Blog1'
import { useDeta } from '../Context/SharedDeta'


const Page6 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const blogs = document.querySelectorAll('.blog');
    const nextt = document.querySelector(".Next");
    const prevv = document.querySelector(".Prev");
  
    const handleNextClick = () => {

      console.log(count)
      setCount((prevCount) => prevCount + 1);  
      blogs.forEach((blog) => {
        blog.style.transition = 'transform 0.7s ease-in-out';
        blog.style.transform = `translateX(-${100 * (count + 1)}%)`;
      });
    };
  
    const handlePrevClick = () => {
      setCount((prevCount) => prevCount - 1);  
      blogs.forEach((blog) => {
        blog.style.transition = 'transform 0.7s ease-in-out';
        blog.style.transform = `translateX(-${100 * (count - 1)}%)`;
      });
    };


    if (count >= 2) {
       
      nextt.disabled = true; 
      nextt.style.opacity="0.5" 
      console.log(count)

    } else {
      nextt.disabled = false;
      nextt.style.opacity="1" 
    }
    if (count <= 0) {
     
      prevv.disabled = true; 
      prevv.style.opacity="0.5" 
      console.log(count)

    } else {
      prevv.disabled = false; 
      prevv.style.opacity="1" 
    }

  
    nextt.addEventListener("click", handleNextClick);
    prevv.addEventListener("click", handlePrevClick);
  
  
    return () => {
      nextt.removeEventListener("click", handleNextClick);
      prevv.removeEventListener("click", handlePrevClick);
    };
  }, [count]);





  const {deta1 } = useDeta()
 const Blog= deta1
  return (
    <div className='w-full'>
    <div className=' App  h-max bg-zinc-50  '>

      <div className='w-full h-max flex justify-between items-center px-5'> 
        <h1 className='text-3xl font-mono italic  py-5'> Latest News & Blog</h1>
        <div className='flex gap-2'> 
          <button className='Prev w-10 h-10 border-2 border-zinc-400'> <i className="fa-solid fa-angle-left"></i></button>
          <button className='Next w-10 h-10 border-2 border-zinc-400'><i className="fa-solid fa-angle-right"></i> </button>
        </div>
      </div>
      <div className='flex p-2  w-full h-max overflow-hidden'> 

      {Blog.map((items, index)=>(
        <Blog1 key={index} deta ={items}/>
      ))}
</div>





        </div>      
    </div>
  )
}

export default Page6
