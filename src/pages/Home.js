import React from 'react'
import CharactersList from '../components/CharactersList'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

function Home() {
  return (
    
    <div className='flex flex-col'>
      <NavBar/>
      <CharactersList/>
      <Footer></Footer>
    </div>
    
    
  )
}

export default Home