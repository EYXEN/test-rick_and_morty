import React from 'react'
import logoNav from '../assets/imgs/Group.png'


function NavBar() {

  return (
    <div className=' h-14 flex items-center justify-start shadow-md'>
      <div>
        <img className='mx-24' src={logoNav} width="46" height="49"/>
      </div>

    </div>
  )
}

export default NavBar