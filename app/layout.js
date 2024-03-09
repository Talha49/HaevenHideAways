import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner"
import Footer from "./_components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HeavenHideAways",
  description: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        
      
      <div className='md:px-20'>
           <Header />
         
        </div>
        {children}
       
           <Toaster />


        <div >
        <Footer />
        </div>
        </body>
    </html>
  );
}
