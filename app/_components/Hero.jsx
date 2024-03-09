import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {

 



  return (
<div class="flex flex-col md:flex-row justify-between items-center mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
  
    <div class="md:w-1/2 px-4 py-8">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Discover,<span className='text-amber-400'> Decide</span>, Book - <br/> Your Apartment <span className='text-amber-600'>Journey</span> Begins Here</h2>
        <p class="text-sm md:text-base mb-4">Welcome to HeavenHideAways, your premier destination for finding and booking the perfect apartment. Explore a curated selection of top-tier residences, where comfort meets convenience, and begin your journey to discovering your ideal home today</p>
       <Link href={'/search/Single'}> <Button >Explore More</Button></Link>
    </div>

  
    <div class="md:w-1/2 px-4 py-8">
        <img src='/hero2.jpg' alt='Picture' class="w-full" /> 
    </div>
</div>


  )
}

export default Hero