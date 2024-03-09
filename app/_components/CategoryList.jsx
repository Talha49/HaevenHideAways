'use client'
import React,{useEffect,useState} from 'react'
import globalApi from '../_utils/globalApi'
import Image from 'next/image'
import Link from 'next/link'


const CategoryList = () => {

   const [category, setCategory] = useState('');

    useEffect(() =>{
 
         getCategoryList()
    },[])

  const getCategoryList =() => {

    globalApi.getCategory().then(resp => {
        console.log(resp.data.data)
        setCategory(resp.data.data)
    })
  }

  return (
    <div  className='px-10 py-5'>
        <h2 className='text-xl text-center font-bold '>Availaible Categories</h2>

        <div className= 'grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-5 '>
          {
           category&& category.map((item, index) => (
              <Link href={'/search/' +item.attributes?.Name} className='flex flex-col text-center gap-1 items-center rounded-full  bg-blue-50 p-5 m-2 hover:scale-110 transition-all ease-in-out' key={index}>
                      <Image src={item.attributes?.Icon?.data?.attributes?.url} alt='' width={40} height={40}  /> 
                  <label className='text-blue-600 text-sm'>{item.attributes?.Name}</label>
              </Link>
            ))
          }
        </div>
        
        </div>
  )
}

export default CategoryList

//fawibef363@sfpixel.com