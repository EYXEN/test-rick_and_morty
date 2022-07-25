import React,{useEffect, useState}  from 'react'
import { useParams,Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import IconBack from '../../assets/imgs/icons/arrow_back_24pxx.svg'

import CardDetails from './CardDetails';

function CharacDetails() {
const typeInfo ={"gender":'Gender', "status":'Status' , "specie":'Specie', "origen":"Origin", "type":'Type',"locations":'Locations'}
const dataEpisodies ={
  "name": "Rick Potion #9",
  "air_date": "January 27, 2014",
  "air_date2": "March 10, 2014",
  "air_date3": "September 27, 2015",
  "air_date4": "June 20, 2021",
  "air_date5": "September 20, 2015",
  "air_date6": "April 14, 2014",
  "episode": "S01E06",
  "episode2": "S01E04",
  "episode3": "S01E09",
  "episode4": "S01E02",
  "episode5": "S01E01",
  "episode5": "S01E08",
  "episode6": "S01E07",

}

const {listCharacters : character} = useSelector((state )=>state.character)

  
  
  
  const params = useParams();
  const {Id} = params
  const item = character.results?.length > 0 &&  character.results?.filter((item) => item.id == Id);
  const [listId,setListId] = useState([])
useEffect(()=>{
  setListId(item[0])
  

},[])
    
  
  return (
    <div>
      <div className='grid grid-cols-3 mt-5'>
        <div className='mt-5 '><Link to='/'><div className=' flex  justify-center  '><img className='mx-2' src={IconBack}/> <h3 className='font-bold'>GO BACK</h3></div></Link></div>
        <div className='flex justify-center flex-col items-center'><img className='rounded-full shadow-2xl' src={listId?.image}/><h2 className='font-normal text-center text-5xl my-3'>{listId?.name}</h2></div>
        <div></div>
      </div>

      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
        
          <div className='flex flex-col items-center '>
        
            <div className='flex items-start w-80'>
              <h3 className='font-medium text-gray-500 text-start  text-xl mb-4'>Informations</h3>
            </div>
            
              <div className='pl-3'>
                <CardDetails title2={typeInfo.gender} info1={listId?.gender}/>
                <CardDetails title2={typeInfo.status} info1={listId?.status}/>
                <CardDetails title2={typeInfo.specie} info1={listId?.species}/>
                <CardDetails title2={typeInfo.origen} info1={listId?.origin?.name}/>
                <CardDetails title2={typeInfo.type} info1={listId?.type}/>
                <CardDetails title2={typeInfo.locations} info1={listId?.location?.name}/>

              </div>

          </div>
        

        <div>



        <div className='flex flex-col lg:items-start sm:items-center '>
        
        <div className='flex items-start w-80'>
          <h3 className='font-medium text-gray-500 text-start  text-xl mb-4'>Episodies</h3>
        </div>
        
          <div className='pl-3'>
            <CardDetails title2={dataEpisodies.episode} info1={dataEpisodies.air_date}/>
            <CardDetails title2={dataEpisodies.episode2} info1={dataEpisodies.air_date2}/>
            <CardDetails title2={dataEpisodies.episode3} info1={dataEpisodies.air_date3}/>
            <CardDetails title2={dataEpisodies.episode4} info1={dataEpisodies.air_date4}/>
            <CardDetails title2={dataEpisodies.episode5} info1={dataEpisodies.air_date5}/>
            <CardDetails title2={dataEpisodies.episode6} info1={dataEpisodies.air_date6}/>

          </div>

      </div>

        </div>
      </div>

      

    </div>
  )
}

export default CharacDetails;