import React from 'react'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegThumbsUp } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { GiPin } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
const Highlighted = () => {
    return (
        <div>
            <div className=' flex gap-5 align-middle justify-stretch border border-solid border-gray-300 rounded-md my-3 p-2 mx-2'>
                <div className='flex justify-center flex-1 gap-2 border-r-[1px]'>
                    <FontAwesomeIcon className=' self-center text-blue-500' icon={faShippingFast} />
                    <div>
                        <h3 className=' font-semibold'>Free Delivery</h3>
                        <p className=" text-center">from $50</p>
                    </div>
                </div>
                <div className='flex justify-center flex-1 gap-2 border-r-[1px]'>
                    <FaRegThumbsUp className='self-center text-blue-500' />
                    <div>
                        <h3 className=' font-semibold'>Free Delivery</h3>
                        <p className=" text-center">from $50</p>
                    </div>
                </div>
                <div className='flex justify-center flex-1 gap-2 border-r-[1px]'>
                    <MdOutlineCurrencyExchange className='self-center text-blue-500' />
                    <div>
                        <h3 className=' font-semibold'>Free Delivery</h3>
                        <p className=" text-center">from $50</p>
                    </div>
                </div>
                <div className='flex justify-center flex-1 gap-2 border-r-[1px]'>
                    <RiSecurePaymentFill className='self-center text-blue-500' />
                    <div>
                        <h3 className=' font-semibold'>Free Delivery</h3>
                        <p className=" text-center">from $50</p>
                    </div>
                </div>
                <div className='flex justify-center flex-1 gap-2'>
                    <GiPin className='self-center text-blue-500' />
                    <div>
                        <h3 className=' font-semibold'>Free Delivery</h3>
                        <p className=" text-center">from $50</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlighted
