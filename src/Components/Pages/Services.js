import { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'


function Services(){
    const [isShow, setIsShow] = useState(true)
    const [is_Show, setIs_Show] = useState(true)


    function whenShowClicks(){
        setIsShow(!isShow)

        if(!is_Show){
            setIs_Show(true)
        }
    }
    function whenShow_Clicks(){
        setIs_Show(!is_Show)

        if(!isShow){
            setIsShow(true)
        }
    }

    return(
        <section>
            <div className="pt-5 px-5">
                <div className="flex justify-between items-center w-[22vw] text-sm">
                    <div className="bg-red-200 text-red-600 px-3 py-1 rounded-md">All</div>
                    <div>Pending</div>
                    <div>Cancled</div>
                    <div>Completed</div>
                </div>


                <div className="text-sm flex justify-between items-center w-[30vw] mt-5">
                    <div>Filter by</div>
                    <div className='flex flex-col justify-center items-start'>
                    <div onClick={whenShowClicks} className="cursor-pointer border-2 border-gray-300 text-sm w-[10vw] px-3 py-2 flex justify-between items-center">
                        <div className="text-gray-300 ">Category</div>
                        <div><BsChevronDown className='text-sm'/></div>
                    </div>
                    <div className={isShow? 'hidden' : 'fixed top-[10.5rem] bg-gray-300 w-[10vw] border-2 border-gray-300 flex flex-col justify-between items-center h-[20vh]'}>
                        <div onClick={whenShowClicks} className='py-2 cursor-pointer'>Pending</div>
                        <div onClick={whenShowClicks} className='py-2 cursor-pointer'>Cancled</div>
                        <div onClick={whenShowClicks} className='py-2 cursor-pointer'>Completed</div>
                    </div>
                    </div>
                    
                    <div className='flex flex-col justify-center items-start'>
                    <div onClick={whenShow_Clicks} className="cursor-pointer border-2 border-gray-300 text-sm w-[10vw] px-3 py-2 flex justify-between items-center">
                        <div className=" ">status</div>
                        <div><BsChevronDown className='text-sm'/></div>
                    </div>
                    <div className={is_Show? 'hidden' : 'fixed top-[10.5rem] bg-gray-300 w-[10vw] border-2 border-gray-300 flex flex-col justify-between items-center h-[20vh]'}>
                        <div onClick={whenShow_Clicks} className='py-2 cursor-pointer'>Pending</div>
                        <div onClick={whenShow_Clicks} className='py-2 cursor-pointer'>Cancled</div>
                        <div onClick={whenShow_Clicks} className='py-2 cursor-pointer'>Completed</div>
                    </div>
                    </div>
                    
                </div>

                <div className='mt-4'>
                    <div className='w-[16vw] h-[30vh] bg-white overflow-hidden'>
                    <div className='px-2 py-2'>
                        <p className='text-xs text-gray-400'>Guide</p>
                        <p className='text-lg font-bold'>Emergency</p>
                        <p className='text-xs text-gray-400'>Due in 4 days</p>
                    </div>
                        
                        <div className='border-y-[1px] border-gray-200 flex justify-center items-center'>
                            <div className=' w-[7vw] border-r-[1px] border-gray-200 px-1 py-1 flex flex-col justify-center items-start'>
                                <p className='text-xs text-gray-400'>4 Tasks</p>
                                <p className='text-lg font-bold'>29</p>
                            </div>
                            <div className=' pl-2 w-[7vw] border-l-[1px] border-gray-200 px-1 py-1 flex flex-col justify-center items-start'>
                                <p className='text-xs text-gray-400'>Discussions</p>
                                <p className='text-lg font-bold'>18</p>
                            </div>
                        </div>
                        <div className='px-2 py-2'>
                            <div className='text-xs text-gray-400'>56% Completed</div>
                            <input className='red' type="range"  name="vol" value='56' readOnly='true'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services