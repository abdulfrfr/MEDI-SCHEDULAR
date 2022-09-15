import React from 'react'
import {FaRegBell} from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'
import {BsChevronDown} from 'react-icons/bs'
import abdul from './abdul.jpeg'


function Nav({text, page}){
    return(
        <section className='flex flex-col w-[80vw]'>
        <section className="bg-white h-[10vh] px-5  pl-3 flex justify-between items-center border-b-2 border-gray-100">
            <div className="flex items-center justify-start"><p className="mr-2">Welcome </p> <b>Abdul.</b></div>
            <div className='w-[15vw]'><p className='object-contain'>{text}</p></div>
            <div className='  text-sm w-[20rem] border-2 border-gray-300 rounded-xl px-10 py-1 flex justify-start items-center'>
            <div className='text-gray-300 text-lg'><BiSearch/></div>
            <input type='text' placeholder='search' className='border-none outline-none w-[15.625rem] px-3 py-1 text-sm'/>
            </div>
            <div className='flex justify-between items-center w-[10rem]'>
                <FaRegBell/>
                <img src={abdul} alt='img' className='w-[1.875rem] h-[1.875rem] rounded-[50%] object-cover'/>
                <p className='mr-2'>Abdul</p>
                <BsChevronDown className='text-lg'/>
            </div>
        </section>
        <section className='bg-gray-100 h-[90vh]'>
        {page.map((page, index)=> (
            <page.page/>
        ))}
        
            
        </section>
        </section>
    )
}

export default Nav