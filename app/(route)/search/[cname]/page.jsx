"use client"
import Appartments from '@/app/_components/Appartments'
import globalApi from '@/app/_utils/globalApi'
import React,{useEffect,useState} from 'react'


const page = ({params}) => {

   const [appartment, setAppartment] = useState('');
  useEffect(() =>{
  
   byName(); 
  },[params.cname])

   const byName = () =>{
 
     globalApi.getAppartmentListbyName(params.cname).then(resp => {
     setAppartment(resp.data.data)
      console.log(resp);
     })

   }

   

  return (

    <div>

<Appartments heading={params.cname} room={appartment}/>
    </div>
  )
}

export default page