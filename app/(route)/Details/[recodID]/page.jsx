"use client"
import Appartments from '@/app/_components/Appartments';
import globalApi from '@/app/_utils/globalApi'
import React,{useEffect,useState} from 'react'
import RoomDetails from '../_components/RoomDetails';


const Page = ({params}) => {

  const [room, setRoom] = useState('');

   useEffect(() => {
 
     getRoomsById();
     
   },[] )
 const getRoomsById =() => {
  globalApi.getAppartmentById(params.recodID).then((resp) => {

    
    setRoom(resp.data.data)
  });
 }

  
  

  return (
    <div className='p-5 md:px-10'>
    <h2 className='font-bold text-[22px]'>Details</h2>

    <div className='grid grid-cols-1 lg:grid-cols-4 '>
      {/* Doctor Detail  */}
      <div className=' col-span-3'>
        <RoomDetails rooms={room} />

      </div>
      {/* Doctor Suggestion  */}
      <div className= '~'>
      
      </div>
    </div>
  </div>
  )
}

export default Page