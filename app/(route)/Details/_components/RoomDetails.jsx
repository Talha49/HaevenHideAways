/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Button } from '@/components/ui/button'
import { FaPhone, FaMapMarkerAlt, FaBed, FaHome,FaBath  } from 'react-icons/fa';
import BookRooms from './BookRooms';
const RoomDetails = ({rooms}) => {


  console.log(rooms)

  return (
   <>
     <div className='grid grid-cols-1 md:grid-cols-3 items-center border-[1px] p-5 mt-5 rounded-lg'> 

     {/***Doctor Image */}

     <div > 
 
  <img className='w-full rounded-lg h-full object-cover'  src={rooms.attributes?.Images?.data?.attributes?.url}  alt=''/>
 

      </div>


   {/***Doctor Deatils */}
   <div className=' col-span-2 mt-5 flex flex-col gap-3 items-baseline md:px-10'>
     
    {/***First Row */}
    <div >
    <h2 className='flex items-center gap-2'><FaHome  size={20} className="text-purple-500" /> {/* Room Icon */}
      <span>{rooms.attributes?.Name}</span></h2>
     <p className='flex items-center gap-2'><FaBed  size={20} className="text-purple-500 "/> 
      <span>{rooms.attributes?.Beds}</span> </p> 
    </div>
    
    {/***Second Row */}
    <div>
    {/* <h2 className='flex items-center gap-2'> <FaCouch size={30} className="text-purple-500 " />
    <span>{rooms.attributes?.Room}</span></h2> */}
      <p className='flex items-center gap-2'><FaBath size={20} className="text-purple-500 "/> {/* Bathroom Icon with size 40 */}
      <span>{rooms.attributes?.Bathroom}</span></p>
    </div>

     {/***Third Row */}
     <div>
      <h2  className='flex items-center gap-2'> <FaPhone size={20} className="text-purple-500 "/> {/* Phone Icon with size 40 */}
      <span>{rooms.attributes?.Phone}</span></h2>
      <p  className='flex items-center gap-2 mt-2'>  <FaMapMarkerAlt size={20} className="text-purple-500 "/> {/* Address Icon with size 40 */}
      <span>{rooms.attributes?.Address}</span></p>
    </div>
    <div>
      <Button><BookRooms  rooms={rooms}/></Button>
    </div>
   </div>
     </div>
     <div className='p-3 border-[1px] rounded-lg mt-5'>
         <h2 className='font-bold text-[20px]'>About Room</h2>
         <p className='text-gray-500 tracking-wide mt-2'>{rooms.attributes?.Details}</p> 
         
       </div>
   </>
  )
}

export default RoomDetails