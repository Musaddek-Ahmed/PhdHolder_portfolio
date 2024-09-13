import Image from "next/image";
import { FaDownload } from "react-icons/fa6";

export default function Home() {
  
  return (
    <div className="bg-gradient-to-r from-pink-100 to-blue-100 flex sm:flex-row flex-col  justify-between sm:px-24 px-5 py-8 sm:pt-60 pt-36 ">
      <div className="flex flex-col items-center sm:py-0 py-5 ">
        <Image src='/images/sumi.png' alt="icon" width={400} height={400} className="rounded-full shadow-lg"/>

      </div>
      <div className="flex flex-col text-lg text-black text-justify sm:w-[50%] w-full leading-8">
        <h1 className="pb-4">A recent PhD degree from the University of Aberdeen, looking forward to joining any research 
position or similar to best utilize my skills and knowledge and also to developing my research 
orientation with the experience of working in a practical and challenging environment. 
My career plan highly focuses research and teaching graduate development economics and 
successful contributions to any research and training activities I work for. </h1>

        <h1 className="font fold text-xl py-2 font-semibold">Research Interest</h1>
        <h1 className="text-lg"> Development policies, Labor economics, Education Economics and Environmental 
        economics.</h1>

        <h1 className="font-bold text-xl pt-5 pb-2">Membership</h1>
        <ul className="list-disc pl-5">
          <li>Lifetime member of Bangladesh Economic Association, Bangladesh</li>
          <li>Member of Scottish Economic Society, UK</li>
          <li>Member of Lions Club, Bangladesh</li>
        </ul>

        <div className="my-8 flex justify-center items-center">
        <a
        href="/CV.pdf"
        download="CV.pdf"
         className="rounded-full flex flex-row gap-3 items-center bg-gray-500 text-white font-medium px-5 py-3 text-xl hover:bg-gray-800">
          Download CV 
          <FaDownload />
        </a>
      </div>
      
      </div>
      
    </div>
  );
}



//font-[family-name:var(--font-geist-sans)]
//font-[family-name:var(--font-geist-mono)]