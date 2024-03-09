"use client"
import React,{useState, useEffect} from 'react'
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import Appartments from "./_components/Appartments";
import globalApi from './_utils/globalApi';
export default function Home() {

  const [room, setRoom] = useState('')

  useEffect(() => {
 
  getRoom();
  },[])

  const getRoom = () =>{
 
  globalApi.getAppartment().then(resp =>{
    console.log(resp.data.data);
    setRoom(resp.data.data);
  })

  }

  return (
   <main>
    <Hero />
    <CategoryList />
    <Appartments room={room} />
   </main>
  );
}
