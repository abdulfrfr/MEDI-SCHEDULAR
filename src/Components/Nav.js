import React from 'react';
import { FiSearch } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiErrorWarningFill } from 'react-icons/ri'

function Nav(){
    return(
        <nav>
        <section className='bg-slate-800 hidden text-gray-400 py-2 md:px-10 px-5 xl:flex justify-start xl:justify-end '>
        
        <div className='hidden text-sm xl:flex justify-between'>
            <h4 className='mx-3 hover:text-white cursor-pointer border-b-2 border-slate-800 hover:border-white'>Home</h4>
            <h4 className='mx-3 hover:text-white cursor-pointer border-b-2 border-slate-800 hover:border-white'>Hospitals</h4>
            <h4 className='mx-3 hover:text-white cursor-pointer border-b-2 border-slate-800 hover:border-white'>Doctors</h4>
            <h4 className='mx-3 hover:text-white cursor-pointer border-b-2 border-slate-800 hover:border-white'>Appointment</h4>
            <h4 className='mx-3 hover:text-white cursor-pointer border-b-2 border-slate-800 hover:border-white'>Careers</h4>
            <h4 className='mx-3 hover:text-white cursor-pointer border-b-2 border-slate-800 hover:border-white'>Pay a Bill</h4>
            <h4 className='mx-3 hover:text-white cursor-pointer border-b-2 border-slate-800 hover:border-white'>Login</h4>
            <h4 className='mx-3 hover:text-white cursor-pointer border-b-2 border-slate-800 hover:border-white'>Sign Up</h4>
        </div>
        </section>
        <section className='bg-slate-600 text-white py-5 md:px-10 px-5'>
            <div className='flex justify-between items-center'>
            <AiOutlineMenu className='text-white md:hidden font-bold text-xl'/>
                <h1 className='font-bold text-2xl'>MEDI SCHEDULAR</h1>
                <div className='md:border-b-2 md:border-gray-400 flex md:justify-between items-center pr-2 pl-2'>
                    <input className='bg-slate-600 hidden md:block border-bg-slate-600  w-60 outline-none pr-5' type='text' placeholder='what are you curious about?' value=''/>
                    <FiSearch className='text-xl'/>
                </div>
            </div>
            <div className='hidden md:flex justify-start mt-10 '>
            
                <h4 className='mr-7 border-b-2 border-slate-600 hover:border-white cursor-pointer text-md'>DOCTORS</h4>
                <h4 className='mr-7 border-b-2 border-slate-600 hover:border-white cursor-pointer text-md'>HOSPITALS</h4>
                <h4 className='mr-7 border-b-2 border-slate-600 hover:border-white cursor-pointer text-md'>VACATIONS</h4>
                <h4 className='mr-7 border-b-2 border-slate-600 hover:border-white cursor-pointer text-md'>APPOINTMENTS</h4>
                <h4 className='mr-7 border-b-2 border-slate-600 hover:border-white cursor-pointer text-md'>TESTIMONIES</h4>
                <h4 className='mr-7 border-b-2 border-slate-600 hover:border-white cursor-pointer text-md'>EVENTS</h4>
            </div>
        </section>
        <section className='hidden bg-slate-600'>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer '>Home</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer'>Hospitals</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer'>Doctors</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer '>Appointment</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer '>Careers</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer '>Pay a Bill</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer '>Login</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer '>Sign Up</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer' >DOCTORS</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer' >HOSPITALS</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer' >VACATIONS</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer' >APPOINTMENTS</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer' >TESTIMONIES</h6>
            <h6 className='mx-3 mb-2 text-gray-300 hover:text-white cursor-pointer' >EVENTS</h6>

        </section>
        <section className='py-3 md:px-10 px-5 bg-amber-100'>
            <div className='flex items-center text-sm md:text-md'><RiErrorWarningFill className='mr-2 text-amber-400 text-xl'/> <a href='http://wwww.twitter.com/abdulfrfr/' className='border-b-2 border-black cursor-pointer'>COVID-19 Resource Center</a> </div>
            <p className='md:px-6 pl-7 mt-2 text-sm md:text-md'>Review the latest information on visitor policies, safety procedures, vaccines, and more in the <a href='http://wwww.twitter.com/abdulfrfr/' className='border-b-2 border-black cursor-pointer'>COVID-19 Resource Center.</a></p>
            
        </section>
        </nav>
    )
}

export default Nav