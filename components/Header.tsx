'use client'
import Image from 'next/image'
import React from 'react'
import Cartem from '../public/cartem.png'
import {MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline'

const Header = () => {
return (
<header className=''>
    {/* Top Nav */}
    <div className='flex items-center bg-cartem_black-dark p-1 flex-grow py-2'>
    <div className='flex items-center flex-grow sm:flex-grow-0 px-4'>
        <Image src={Cartem} alt='Cartem Logo'
        width={90} height={30} style={{objectFit: 'contain'}}
        className='cursor-pointer'
            />
    </div>

    {/* Search Bar */}
    <div className='hidden sm:flex items-center rounded-md flex-grow cursor-pointer
     bg-[#F15E22] hover:bg-[#F15E22]/90'>
        <input type='text' className='p-4 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 ' />
        <SearchIcon className='h-12 p-4' />
    </div>

    {/* Right Side */}
    <div>

    </div>

    </div>

    {/* Bottom Nav */}
    <div>

    </div>
</header>
)
}

export default Header