import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { BiShoppingBag } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import {  faShippingFast} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = () => {
  return (
    <div className='flex justify-between border-b-[1px] py-2 px-3 text-gray-600 text-sm'>
        <p>Welcome to Worldwide Electronics Store</p>
      <ul className='flex gap-3'>
        <li className='flex gap-1 align-middle justify-center border-r-[1px] px-1'><CiLocationOn className=' self-center'/> Store Locator</li>
        <li  className='flex gap-1 align-middle justify-center border-r-[1px] px-1'><FontAwesomeIcon  className=' self-center' icon={faShippingFast} style={{color:"#616161"}}/> Track Your Order</li>
        <li className='flex gap-1 align-middle justify-center border-r-[1px] px-1'><BiShoppingBag  className=' self-center'/> Shop</li>
        <li className='flex gap-1 align-middle justify-center px-1'><RiAccountCircleLine  className=' self-center'/> My Account</li>
      </ul>
    </div>
  )
}

export default Navbar
