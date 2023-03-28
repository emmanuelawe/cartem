'use client'
import Image from 'next/image'
import React from 'react'
import Cartem from '../public/cartem.png'
import {ArrowDownIcon, MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline'
import {VscTriangleDown} from 'react-icons/vsc'
import {signIn, signOut, useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { selectItems } from '@/redux/slices/basketSlice'


const Header = () => {
const {data: session} = useSession()
const router = useRouter()
const items = useSelector(selectItems)

return (
<header className=''>
    {/* Top Nav */}
    <div className='flex items-center bg-cartem_black-dark p-1 flex-grow py-4'>
    <div className='flex items-center flex-grow sm:flex-grow-0 px-4'>
        <Image 
        onClick={() => router.push("/")}
        src={Cartem} alt='Cartem Logo'
        width={90} height={30} style={{objectFit: 'contain'}}
        className='cursor-pointer'
            />
    </div>


    {/* Search Bar */}
    <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer
     bg-[#F15E22] hover:bg-[#F15E22]/90'>
        <div className='flex items-center p-2 rounded-l-md text-sm text-gray-700 space-x-2 bg-gray-200 h-10'>
        <p>All</p>
        <VscTriangleDown className='h-6 ' />
        </div>
        <input type='text' 
        placeholder='Search Cartem'
        className='p-4 h-full w-6 flex-grow flex-shrink focus:outline-none px-4' />
        <SearchIcon className='h-12 p-3' />
    </div>

    {/* Right Side */}
    <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>

        <div onClick={!session ? signIn : signOut}  className='link'>
        <p className='hover:underline'>
        {/* Hello, CHASE */}
            {session ? `Hello, ${session.user.name}` : 'Sign In'}
        </p>
        <p className='font-bold md:text-sm'>Account & Lists</p>
        </div>

        <div className='link'>
        <p>Returns</p>
        <p className='font-bold md:text-sm'>& Orders</p>
        </div>

        <div 
        onClick={() => router.push("/checkout")}
        className='relative link flex items-center'>

        <span className='absolute top-0 
        right-0 md:right-6 h-4 w-4 rounded-full text-center font-bold text-[#222222] bg-[#F15E22]'>
            {items.length}
        </span>

        <ShoppingCartIcon 
         className='h-9 md:h-10' />
        <p className='hidden md:inline font-bold md:text-sm mt-2'>Cart</p>
        </div>

    </div>

    </div>

    {/* Bottom Nav */}
    <div className='flex space-x-4 p-2 pl-4 items-center bg-cartem_black-dark/90 text-white text-sm'>
    
    <p className='link flex items-center font-bold'>
        <MenuIcon className='h-6 mr-1' /> 
        All
    </p>
    <p className='link'>Today&apos;s Deals</p>
    <p className='link'>Customer Service</p>
    <p className='link hidden lg:inline-flex'>Electronics</p>
    <p className='link hidden lg:inline-flex'>Food & Grocery</p>
    <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
    </div>
</header>
)
}

export default Header