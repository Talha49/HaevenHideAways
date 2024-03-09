import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Appartments = ({ room, heading = 'Unlock the Essence of Home' }) => {
 

  return (
    <div className='px-20 py-20'>
      <div className='text-center'>
        <h2 className='font-bold tracking-widest mb-4 text-3xl'>{heading}</h2>
        <p className='font-semibold tracking-wide text-xl'>
          Escape to <span className='text-amber-700'>Serenity</span>, Find Your{' '}
          <span className='text-green-500'>Heaven</span>
        </p>
      </div>
     
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-8 px-5'>

        {room?.length > 0 ? (
          room.map((item, index) => (
            <div key={index} className='border border-gray-300 rounded-lg overflow-hidden transition-all ease-in-out duration-300 transform hover:shadow-lg hover:border-blue-500'>
            <div className='relative'>
              <Image
                className='w-full h-48 object-cover'
                src={item.attributes?.Images?.data?.attributes?.url}
                alt=''
                width={400}
                height={200}
              />
              <div className='absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 m-4 rounded-lg text-xs'>
                {item.attributes?.categories?.data[0]?.attributes?.Name}
              </div>
            </div>
            <div className='p-4'>
              <h2 className='text-lg font-semibold mb-2'>{item.attributes?.Name}</h2>
              <p className='text-sm text-gray-600 mb-2'>{item.attributes?.Address}</p>
              <p className='text-sm text-gray-700 mb-4'>{item.attributes?.Description}</p>
              <div className='text-sm'>
                <h2 className='text-blue-500 font-semibold mb-2'>{item.attributes?.Phone}</h2>
                <Link href={'/Details/' + item?.id}>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-md text-sm w-full hover:bg-blue-600'>Book Now</button>
                </Link>
              </div>
            </div>
          </div>
          
          
          
          
          ))
        ) : (
          [1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className='h-[220px] bg-slate-200 w-full animate-pulse rounded-lg transition-all ease-in-out'></div>
          ))
        )}
      </div>
    </div>
  );
};

export default Appartments;
