import React from 'react'

const Nabver = (props) => {
  return (
    <div>
        <h1 className='group relative px-5 z-40  '> {props.tmeno} &nbsp;  <i className="fas fa-sort-down"></i> 
            <ul  className='hidden group-hover:block absolute bg-zinc-300 w-32 leading-8 transition-all'>
                <li>{props.meno1}</li>
                <li>{props.meno2}</li>
                <li>{props.meno3}</li>
                <li>{props.meno4}</li>
                <li>{props.meno5}</li>
                <li>{props.meno6}</li>
               
            </ul>
            </h1>
      
    </div>
  )
}

export default Nabver
