import React,{useEffect, useState} from 'react'

// assest 
import Logo from '../assets/imgs/logo-home.svg'

// redux
import {apiData} from '../redux/slices/characters'
import {useDispatch,useSelector} from 'react-redux'
import Card from './card'

import { Filters } from './Filters'





function CharactersList() {

   const {listCharacters : character} = useSelector((state )=>state.character)

   const [loading, setLoading] = useState(true)
	 const [filter, setFilter] = useState('')
   

    const dispatch = useDispatch()

    const urlApi = "https://rickandmortyapi.com/api/character";
  
    

    useEffect(()=>{
        dispatch(apiData(urlApi))
        setLoading(false)
        
       
        
    },[dispatch])
    

function loadMore (){
  dispatch(apiData(character.info.next))
  

}


  const personjesFiltrados = character.results?.filter((personaje) =>
		personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	)


  
    
    
  return ( 
    <div className='flex flex-col items-center h-fit'>
      <div className='my-5 '>
       <img className='sm:h-50 inline-block px-5 lg:h-60 max-w-xl' src={Logo}/>  
      </div>
      <div className='w-full'>
      <Filters filter={filter} setFilter={setFilter} />
      </div>
      
      
       <div className='grid lg:grid-cols-4 md:grid-cols-3'>
       

       {loading ? (
					<p>Loading...</p>
				) : personjesFiltrados?.length > 0 ? (
					personjesFiltrados?.map((personaje) => (
						<Card key={personaje.id} character={personaje}id={personaje.id} />
					))
				) : (
					<p>
						No se encontro personajes con la busqueda{''}
						<strong>"{filter}"</strong>.
					</p>
				)}






       {/*
        character.results?.length > 0 && character.results.map((item)=>(
          <Card key={item.id} character={item} id={item.id}/>
        ))*/
        }
       </div>

       <button className='btn bg-sky-50 py-2 px-8 rounded text-blue-500 font-medium mb-5 shadow-2xl shadow-black-500/40' onClick={loadMore}>LOAD MORE</button>

        
    </div>
  )
}

export default CharactersList;





















/*const character = [
        {
          "id": 1,
          "name": "Rick Sanchez",
          "status": "Alive",
          "species": "Human",
          "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          "type": "",
          "gender": "Male",
          "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
          },
        },
        {
            "id": 2,
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            "type": "",
            "gender": "Male",
            "origin": {
              "name": "unknown",
              "url": "https://rickandmortyapi.com/api/location/1"
            },
        }
    ]*/