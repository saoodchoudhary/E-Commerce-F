import React from 'react'
import { BsHandbag } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
const Header = () => {
  return (
    <header className='border-b-[1px] '>
      <div className='flex  justify-between px-10 py-4 max-w-7xl ml-auto mr-auto'>
      <div className='flex-1'><Link to="/"><h1 className=' flex-1 text-2xl font-bold'>YOUR LOGO</h1></Link></div>
      <div className='flex flex-1 align-middle bg-white border-gray-300 border-[1px] pl-1  rounded-md'>
         <input className=' text-sm focus:outline-none w-[100%] px-3  ' type='text' name='search' placeholder='Search for Products' />
        <div  className=' bg-blue-500 flex hover:bg-blue-600 transition-all rounded-r-md px-3'><FiSearch className=' text-white cursor-pointer self-center'/></div> 
      </div>
      <ul className='flex flex-1 self-center justify-center align-middle gap-11 '>
        <li className=' self-center '><Link to="/account/"><MdOutlineAccountCircle className='text-2xl transition-all text-gray-600 hover:text-blue-500'/></Link></li>
        <li className=' self-center '><Link to="/account/"><IoMdHeartEmpty className='text-2xl transition-all text-gray-600 hover:text-blue-500'/></Link></li>
        <li className=' self-center '><Link to="/account/"><BsHandbag className='text-xl transition-all text-gray-600 hover:text-blue-500'/></Link></li>
      </ul>
      </div>
    </header>
  )
}

export default Header
