import React from 'react'

const Slide = (props) => {
  return (
    <div> 
    <img  className =" w-full h-full z-10  hover:scale-110 transition-all absolute" src={props.image} alt=''/> 
    </div>
  )
}

export default Slide
