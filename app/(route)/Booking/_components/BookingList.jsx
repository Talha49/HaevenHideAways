import React from 'react'
import { FaClock , FaCalendar } from 'react-icons/fa';
import moment from 'moment';
import CancelAppointment from './CancelAppointment';
import { Button } from '@/components/ui/button';
import globalApi from '@/app/_utils/globalApi';
import toast from 'sonner';

const BookingList = ({booking,expired,updateRecord}) => {


const onDeleteBooking = (item) => {
  globalApi.deleteBooking(item.id).then(resp => {
    if(resp){
      updateRecord(); // Update the state after deletion
      console.log(resp);
    }
  });
}



  console.log('BookingList', booking)
  return (
    <div className='flex  flex-col gap-4 items-center border p-5 m-3 rounded-lg' >

      {
        booking.length >0 ? (booking.map((item,index) => (
          <div key ={index}className='flex flex-col gap-2 w-full'>
       
          <h2 className='font-bold text-[18px] items-center flex justify-between'>
             {item.attributes?.UserName}
             {!expired&&<CancelAppointment  OnContinueClick={() => onDeleteBooking(item)}/>}

          </h2>
         <h2  className='flex gap-2 items-center'>
         <FaCalendar className='text-primary h-5 w-5' />
         { moment(item.attributes.Date).format('DD-MMM-YYYY')}

         </h2>
         <h2 className='flex gap-2 text-gray-500 items-center'>
             <FaClock />
             {item.attributes?.Time}
          </h2>
      </div>

        ))):
        ( <div className='h-[150px] w-full bg-slate-100 animate-pulse  flex items-center rounded-lg'>
          <p className='font-semibold text-xl'>No Bookings Yet!!!</p>
        </div>
      )
      }
      
    </div>
  )
}

export default BookingList