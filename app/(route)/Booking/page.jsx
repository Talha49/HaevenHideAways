"use client"
import React,{useEffect,useState} from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from './_components/BookingList'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import globalApi from '@/app/_utils/globalApi';

const Page = () => {
 
  const [booking, setBooking] = useState([])
  
  const {user} = useKindeBrowserClient();


  useEffect(() =>{

  user&&history();
  },[user])

const history = () =>{
  globalApi.BookHistories(user?.email).then(resp => {
   
    setBooking(resp.data.data);
    console.log(resp.data.data)
  })
}

// const filteruser = (type) => {
//   if (!booking || !Array.isArray(booking)) {
//     console.error("bookingList is not initialized or not an array");
//     return [];
//   }

//   const result = bookingList.filter(item => 
//     type === 'upcoming' ? new Date(item.attributes.Date) >= new Date() : new Date(item.attributes.Date) <= new Date()
//   );
//  console.log(result)
//   return result;
// }
const filterUserBooking=(type)=>{
  const result=booking?.filter(item=>
     type=='upcoming'? new Date(item.attributes.Date)>=new Date()
     :new Date(item.attributes.Date)<=new Date()
      )
      console.log(result)
  return result;
}


  return (
    <div className='px-4 sm:px-10 mt-10'>
<h2 className='font-bold text-2xl'>My Booking</h2>
<Tabs defaultValue="account" className="w-full mt-5">
  <TabsList className='w-full justify-start '>
    <TabsTrigger value="account">Upcoming</TabsTrigger>
    <TabsTrigger value="password">Expired</TabsTrigger>
  </TabsList>
  <TabsContent value="account"><BookingList   updateRecord={() =>filterUserBooking()} expired={false}  booking={filterUserBooking('upcoming')}/></TabsContent>
  <TabsContent value="password"><BookingList updateRecord={() =>filterUserBooking()} expired={true}  booking={filterUserBooking('expired')}/></TabsContent>
</Tabs>

    </div>
  )
}

export default Page