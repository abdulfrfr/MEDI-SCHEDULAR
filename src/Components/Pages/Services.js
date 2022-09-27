import {BsChevronDown} from 'react-icons/bs'


function Services(){
    return(
        <section>
            <div className="pt-5 px-5">
                <div className="flex justify-between items-center w-[20vw] text-sm">
                    <div className="bg-red-200 text-red-600 px-3 py-1 rounded-md">All</div>
                    <div>Pending</div>
                    <div>Cancled</div>
                    <div>Completed</div>
                </div>
                <div className="text-sm flex justify-between items-center w-[25vw] mt-5">
                    <div>Filter by</div>
                    <div className="border-2 border-gray-300 text-sm w-[9vw] px-2 py-1 flex justify-between items-center">
                        <div className="text-gray-300 ">Category</div>
                        <div><BsChevronDown className='text-sm'/></div>
                    </div>
                    <div className="border-2 border-gray-300 text-sm w-[9vw] px-2 py-1 flex justify-between items-center">
                        <div className=" ">status</div>
                        <div><BsChevronDown className='text-sm'/></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services