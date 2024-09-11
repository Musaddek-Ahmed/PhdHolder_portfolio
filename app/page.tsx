import Image from "next/image";

export default function Home() {
  return (
    <div className="flex sm:flex-row flex-col  justify-between sm:px-24 px-5 py-5 sm:pt-60 pt-36 ">
      <div className="flex flex-col items-center sm:py-0 py-5">
        <Image src='/images/sumi.png' alt="icon" width={400} height={400} className="rounded-full "/>

      </div>
      <div className="flex flex-col text-lg text-black text-justify sm:w-[50%] w-full leading-8">
        <h1 className="pb-4">A recent PhD degree from the University of Aberdeen, looking forward to joining any research 
position or similar to best utilise my skills and knowledge and also to developing my research 
orientation with the experience of working in a practical and challenging environment. 
My career plan highly focuses research and teaching graduate development economics and 
successful contributions to any research and training activities I work for. </h1>

        <h1 className="font fold text-xl py-2 font-semibold">Research Interest</h1>
        <h1 className="text-lg"> Development policies, Labor economics, Education Economics and Environmental 
        economics. </h1>

        <div className="my-8 flex justify-center items-center">
        <button className="rounded-full bg-gray-500 text-white font-medium px-5 py-3 text-xl hover:bg-gray-800">
          Download CV
        </button>
      </div>
      
      </div>
      
    </div>
  );
}



//font-[family-name:var(--font-geist-sans)]
//font-[family-name:var(--font-geist-mono)]