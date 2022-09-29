import {SubItems} from './SubItems'
import {BsFillCheckCircleFill} from 'react-icons/bs'

function Sub(){
    return(
    <section>
       <div className="mx-4 mt-4">
            <div className="text-sm">Plan</div>
            <div className="flex justify-between items-center mt-3 w-[55vw]">
                <div className="border-2 border-blue-400 bg-blue-100 w-[26vw] rounded-md h-[18vh] px-4 py-2">
                    <div className='flex justify-end items-end -mt-4 -mr-5'><BsFillCheckCircleFill className='text-blue-500'/></div>
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col justify-center items-start">
                            <div className="text-sm font-bold">Beginner</div>
                            <div className="text-xs text-gray-400">30 Days Remaining</div>
                        </div>
                        <div className="flex justify-center items-baseline">
                            <div className="text-sm font-bold">N 30,000</div>
                            <div className="text-xs text-gray-400">/month</div>
                        </div>
                    </div>

                    <div>
                        <button className="text-xs border-[1px] border-blue-400 text-blue-300 mt-4 px-2 py-2 rounded-lg">Cancle Subscribtion</button>
                    </div>
                </div>
                <div className="bg-blue-600 w-[26vw] rounded-md h-[18vh] px-4 py-2">
                <div className="flex justify-between items-start text-white">
                        <div className="flex flex-col justify-center items-start">
                            <div className="text-sm font-bold">Professional</div>
                            <div className="text-xs text-white">365 Days</div>
                        </div>
                        <div className="flex justify-center items-baseline">
                            <div className="text-sm font-bold">N 49,000</div>
                            <div className="text-xs text-white">/month</div>
                        </div>
                    </div>

                    <div className="flex justify-start items-baseline">
                        <button className="text-xs border-[1px] bg-white border-white text-blue-600 mt-4 px-2 py-2 rounded-lg">Upgrade</button>
                        <div className="text-xs text-white ml-2">Learn more about thus plan</div>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <div className="text-sm font-bold mb-2 ">Enable auto review</div>
                <div className="text-sm text-gray-400">This option; if checked, your productive subscribtion,
                 if the current plan expires. However, this might prevent you from</div>
            </div>

            <div className="mt-3">
                <div className="mb-2 text-sm font-bold">Payment Method</div>
                <div className="flex justify-between items-center w-[45vw]">
                    <div className="w-[14vw] h-[14vh] bg-blue-100 rounded-lg border-[1px] border-blue-400"></div>
                    <div className="w-[14vw] h-[14vh] bg-white rounded-lg border-[1px]  border-blue-400"></div>
                    <div className="w-[14vw] h-[14vh] bg-gray-300 border-[1px] border-gray-300 rounded-lg "></div>
                </div>
            </div>

            <div className="mt-3">
                <div className="text-sm font-bold">Billing History</div>

                <div className="flex justify-start items-center w-[50vw] mt-2 bg-gray-300 px-2 py-1">
                    <div className='w-[13vw]'>Date</div>
                    <div className='w-[13vw]'>Details</div>
                    <div className='w-[14vw] translate-x-20'>Amount</div>
                    <div className='w-[14vw] translate-x-16'>Download</div>
                    
                </div>

                <div className='mt-2'>
                {SubItems.map((item, index)=>(
                    <div className='flex justify-between items-center w-[50vw] '>
                    <div className="h-[5vh] flex flex-col justify-between items-start text-sm">
                    <div>{item.date}</div>
                    </div>
                    <div className="h-[5vh] flex flex-col justify-between items-start text-sm">
                    <div>{item.details}</div>
                    </div>
                    <div className="h-[5vh] flex flex-col justify-between items-start text-sm">
                    <div>{item.amount}</div>
                    </div>
                    <div className="h-[5vh] flex flex-col justify-between items-start text-sm">
                    <div className='text-blue-500 '>{item.download}</div>
                    </div>
                </div>
                ))}
                </div>
            </div>
       </div>
    </section>
    )
}

export default Sub