import { Resend } from 'resend';
import {NextResponse} from 'next/server'
import EmailTemplate from '@/emails';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req){

    try{
  
         const response  = await req.json();
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [response.data.Email],
            subject: 'Room Booking ',
            react: EmailTemplate({response})
          });
   return NextResponse.json({data})       
    }
    catch(error){
    
      return NextResponse.json({error})
    }

}
