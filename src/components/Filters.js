import React from 'react'
import search from '../assets/imgs/icons/search-input.png'

export const Filters = ({ filter, setFilter }) => {
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}

    const handleClick = ({target}) =>{
        setFilter(target.value)

    }

	return (
	<div className=' h-20 flex items-center justify-center space-x-4'>

      <div className='w-64 h-14 border-2 border-gray-500  flex items-center rounded-lg'>
        <div className='mx-2'><img src={search}/></div>
       <input className='focus:outline-none' 
       type='text'
       placeholder='Filter by name'
       onChange={handleInput}
       value={filter}/>
      </div>

      

    

      

	
	</div>
	)
}

/** */