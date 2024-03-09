"use client";
import globalApi from "@/app/_utils/globalApi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import { toast } from "sonner";


const Page = () => {
  
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
 
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const data = {
    data:{
        FullName: fullName,
        PhoneNumber: phoneNumber,
        Email: emailAddress,
        Message:message,
    }
    };

    console.log('Form submitted:', data);

    setFullName('');
    setPhoneNumber('');
    setEmailAddress('');
    setMessage('');

    
    // try {
    //   const response = await globalApi.contactPage(data);
    //   console.log('Response:', response);
    //   alert('Message sent successfully!');
    // } catch (error) {
    //   console.error('Error sending data to the API:', error);
    //   alert('Failed to send message. Please try again later.');
    // }

    try{
       globalApi.contactPage(data).then(resp => {
        if(resp){
            globalApi.sendEmail(data).then(resp => {
                console.log(resp)
            })
       toast("You have send SuccessFull")
        }
        else{
            toast("Failed While Sending")
        }
       })
    }
    catch(err){
     console.log(err)

    }
  };

  return (
    <div className="bg-gradient-to-r from-zinc-50 to-zinc-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Want to contact us? Fill the form below. Send us a message freely. We are here to help you.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 className="text-lg font-bold">Get In Touch</h2>
          <p className="max-w-sm mt-4 mb-4 dark:text-neutral-400">
            We are here to help. Contact us on the given detailsbelow 
          </p>
          {/* Contact info */}
          <div className="grid grid-cols-2 gap-5  ">
          <div class="flex flex-col gap-3 bg-gradient-to-r from-slate-200 to-slate-200 rounded-lg p-6 shadow-lg text-white">
         <div className="flex gap-3 items-center">
         <FontAwesomeIcon icon={faPhone} style={{ color: 'blue',fontSize: '1.5em' }} />
         <p className="text-black">+92-3145612949</p>
         </div>
         <div className="flex gap-3 items-center">
         <FontAwesomeIcon icon={faEnvelope} style={{ color: 'blue', fontSize: '1.5em' }} />
         <p className="text-black">ghaurit82@gmail.com</p>
         </div>
      </div>
      <div class="bg-gradient-to-r from-slate-200 to-slate-200 rounded-lg p-6 shadow-lg ">
      <div className="flex gap-3 items-center ">
         <FontAwesomeIcon icon={faMapMarker} style={{ color: 'blue', fontSize: '1.5em' }} />
         <p className="text-black">Street#4, Harley, LA, USA</p>
         </div>
      </div>



          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4 border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                name="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4 border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                name="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900   focus:ring-4  border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                name="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white dark:placeholder:text-neutral-200 dark:bg-neutral-900   rounded-md outline-none  h-36 focus:ring-4  border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-neutral-900 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7 dark:bg-white dark:text-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
