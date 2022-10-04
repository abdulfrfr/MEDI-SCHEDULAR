import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {BsChevronDown} from 'react-icons/bs'

function Appointments(){
    return(
        <section>
        <div className="pt-4 pl-4 pr-16 ">
        <div className="flex justify-between items-center text-sm">
            <div className='flex justify-center items-center '>
                <div className='mr-2'>June 2022</div>
                <div className='flex justify-center items-center'>
                    <div className='text-gray-500 bg-gray-300 p-1 rounded-md mr-1'><IoIosArrowBack/></div>
                    <div className='text-gray-500 bg-gray-300 p-1 rounded-md ml-1'><IoIosArrowForward/></div>
                </div>
            </div>
            <div className="text-white bg-red-500 px-2 py-1 rounded-lg">Today</div>
            <div className="flex justify-start items-center">
                <div>Filter by</div>
                <div className="ml-2 border-[1px] border-gray-400 px-5 py-1 rounded-md flex justify-between items-center">
                    <div className='mr-1'>Month</div>
                    <div><BsChevronDown className='font-bold'/></div>
                </div>
            </div>
        </div>
        <div className='mt-2 bg-white h-[78vh] w-[74vw]'>
        
        </div>
        </div>
        </section>
    )
}

export default Appointments