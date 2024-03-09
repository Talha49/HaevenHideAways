'use client'
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import globalApi from '@/app/_utils/globalApi'
import Link from 'next/link'
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
 
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import { usePathname } from 'next/navigation';


const CategoryList = () => {

   const [category, setCategory] = useState('');

    const params= usePathname();
    const catId = params.split('/')[2];

    useEffect(() =>{
 
         getCategoryList()
         console.log(catId)
    },[])

  const getCategoryList =() => {

    globalApi.getCategory().then(resp => {

        setCategory(resp.data.data)
    })
  }
  return (
    <div className='h-screen mt-5 flex flex-col'>
       <Command className="rounded-lg border  shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
         {
          category && category.map((item,index) => (
            <CommandItem key={index}>
              
              <Link href={'/search/' + item.attributes?.Name} className={`p-2 flex gap-2
                text-[14px]
                text-blue-600
                items-center
                rounded-md cursor-pointer w-full ${catId === item.attributes?.Name && 'bg-blue-100'} `}>  <Image src={item.attributes?.Icon?.data?.attributes?.url}  alt='' width={20} height={20}/>
  <label className='text-purple-500'>{item.attributes?.Name}</label>
</Link>

            </CommandItem>
          ))
         }
        </CommandGroup>
        <CommandSeparator />
        
      </CommandList>
    </Command>
    </div>
  )
}

export default CategoryList