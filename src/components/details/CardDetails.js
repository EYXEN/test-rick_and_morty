import React from 'react'

function CardDetails({title2,info1,info2}) {
  return (

    <div className='border-b-2 mx-3 pb-2 mb-3 w-80'>
      
      <h6 className='font-bold text-base'>{title2}</h6>
      <p className='text-gray-400 text-sm'>{info1}</p>
      <p className='text-gray-400 text-sm'>{info2}</p>
    </div>
    
  )
}

export default CardDetails

