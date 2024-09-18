'use client'

import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import Download from "./components/download";

export default function Home() {
  
  return (
    <div className=" bg-gray-900 flex sm:flex-row flex-col  justify-between sm:px-24 px-5  sm:pt-60 pt-36 font-[family-name:var(--font-geist-mono)]">

<div className="sm:hidden flex flex-col items-center sm:py-0 py-2 -mt-5">
        <Image src='/images/sumi.png' alt="icon" width={300} height={300} className="rounded-full shadow-lg"/>

      </div>


      <div className="flex flex-col text-lg text-gray-300 sm:text-justify text-left sm:w-[70%] w-full leading-8">
        <h1 className="pb-4">A recent PhD degree from the University of Aberdeen, looking forward to joining any research 
position or similar to best utilize my skills and knowledge and also to developing my research 
orientation with the experience of working in a practical and challenging environment. 
My career plan highly focuses research and teaching graduate development economics and 
successful contributions to any research and training activities I work for. </h1>

        <h1 className="text-gray-100 font fold text-xl py-2 font-semibold">Research Interest</h1>
        <h1 className="text-lg"> Development policies, Labor economics, Education Economics and Environmental 
        economics.</h1>

        <h1 className="font-bold text-gray-100 text-xl pt-5 pb-2">Membership</h1>
        <ul className="list-disc pl-5">
          <li>Lifetime member of Bangladesh Economic Association, Bangladesh</li>
          <li>Member of Scottish Economic Society, UK</li>
          <li>Member of Lions Club, Bangladesh</li>
        </ul>

        <div className="my-8 flex justify-center items-center">
        <Download/>
        
      </div>
      
      </div>

      <div className="sm:flex hidden flex-col items-center sm:py-0 py-5 ">
        <Image src='/images/sumi.png' alt="icon" width={300} height={300} className="rounded-full shadow-lg"/>

      </div>
      
    </div>
  );
}



//font-[family-name:var(--font-geist-sans)]
//font-[family-name:var(--font-geist-mono)]