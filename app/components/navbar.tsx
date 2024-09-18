'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import Button from './button'

const links = [
  {
      name: 'Introduction',
      path: '/'
  },
  {
      name: 'Education',
      path: '/education'
  },
  {
      name: 'projects experience',
      path: '/project'
  },
  
  {
      name: 'publications',
      path: '/publications'
  },
  {
      name: 'skills',
      path: '/skills'
  },
  {
    name: 'awards',
    path: '/awards'
},
]

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='fixed z-50 w-full bg-black border-b-2 border-gray-600 sm:px-24 px-0 shadow-md'>
        <div className=' flex flex-row justify-between sm:px-24 px-3 py-6'>
        <div className='sm:text-6xl text-lg tracking-[-1px] text-gray-100 font-bold font-[family-name:var(--font-geist-mono)]'>Nazmun Nessa (Sumi) Bakth.</div>
        
        
        <div className='sm:block hidden'>
            <Button/>
        </div>

        <div className='sm:hidden flex '>
          <button onClick={toggleMenu} className='focus:outline-none'>
            {menuOpen ? <HiX size={30} className='text-gray-100'/> : <HiMenu size={30} className='text-gray-100'/>}
          </button>
        </div>
        </div>
        
        <div className='hidden sm:flex flex-row justify-around px-10 py-8 text-lg text-gray-100 font-semibold'>
        
        {links.map((link, index) => {
            return(
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-gray-300 border-b-2 border-gray-100"} capitalize font-semibold hover:text-gray-500 transition-all`}>
                    {link.name}
                </Link>
            )
        })}
        </div>

        <div
        className={`sm:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        } px-3 text-lg text-gray-100 font-semibold bg-black border-b-2 border-gray-100`}
      >
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && 'text-gray-300 border-dashed border-b-2 border-gray-100'
            } text-center block py-4 capitalize font-semibold hover:text-gray-300 transition-all`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar