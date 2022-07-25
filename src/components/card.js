import React from 'react'
import { Link } from 'react-router-dom';

function Card({character,id}) {
  return (
    <Link to={`/Details/${id}`}>
      <div className=" w-60 h-60 bg-white rounded-lg border border-gray-200 shadow-md m-6">
          
              <img className="rounded-t-lg h-40 w-screen" src={character.image} alt="" />
          
          <div className="p-3">
              
                  <h5 className=" font-bold tracking-tight text-gray-900">{character.name}</h5>
              
              <p className="mb-3 font-normal text-gray-400">{character.species}</p>
            
          </div>
      </div>
    </Link>
  )
}

export default Card;