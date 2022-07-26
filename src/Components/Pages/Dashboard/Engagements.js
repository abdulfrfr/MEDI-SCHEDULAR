import {useState} from 'react'
import {HiUsers} from 'react-icons/hi'
import {FaRegStar} from 'react-icons/fa'
import {doctor} from './DashboardItems'
import BarChart from './BarChart'
import DouChart from './DouChart'


function Engagements(){
    const [doctors, setDoctors] =useState(doctor)
    return(
        <section className="mx-5 mt-5 flex justify-between items-start">
        <div className='w-[48vw] h-[70vh]'>
            <div className="w-[48vw] bg-white rounded-2xl p-3 ">
            <div className=''>
            <h1 className=' mb-1'>Account Engagements</h1>
                
                <div className=''>
                <BarChart/>
                </div>
            </div>
                
            </div>

            <div className='flex justify-between items-start mt-[10px]'>
                <div className='bg-white w-[20vw] h-[40vh] overflow-hidden  rounded-xl p-2'>
                <h1 className='mb-2'>Our Doctors</h1>
                    <div className='flex flex-col justify-between items-start w-[19vw] h-[20vh] overflow-x-hidden overflow-y-scroll '>
                    {doctors.map((doc, index)=>(
                        <div className='flex justify-between items-center'>
                            <div><img className='w-[50px] h-[50px] rounded-xl' src={doc.img} alt='doc-img'/></div>
                            
                            <div>
                                <p>{doc.name}</p>
                                <div className='flex justify-start items-center'>{<doc.icon className='w-[20px] text-red-500'/>}{<doc.icon className='w-[20px] text-red-500'/>}{<doc.icon className='w-[20px] text-red-500'/>}{<doc.icon className='w-[20px] text-red-500'/>}{<doc.icon className='w-[20px] text-red-200'/>}</div>
                                <p>{doc.number}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                    
                </div>
                <div className='w-[13vw] h-[27vh] py-5 bg-purple-100 rounded-xl text-center flex flex-col justify-between items-center p-1'>
                    <div className='bg-gray-200 w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'>
                        <HiUsers className='text-xl'/>
                    </div>
                    <h1 className='font-bold'>90K</h1>
                    <div className='w-[45px] border-gray-300 border-b-2'></div>
                    <div>
                    <p className='text-[0.6rem] font-bold'>2500 Users</p>
                    <p className='text-[0.6rem] font-bold'>Dounloaded the app this month</p>
                    </div>
                    
                </div>
                <div className='w-[13vw] h-[27vh] py-5 bg-green-100 rounded-xl text-center flex flex-col justify-between items-center p-1'>
                    <div className='bg-gray-200 w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'>
                        <FaRegStar className='text-xl'/>
                    </div>
                    <h1 className='font-bold'>874</h1>
                    <div className='w-[45px] border-gray-300 border-b-2'></div>
                    <div>
                    <p className='text-[0.6rem] font-bold'>Account Ranked</p>
                    <p className='text-[0.6rem] font-bold'>You are in top 80%</p>
                    </div>
                    
                    
                </div>

            </div>



            </div>
            <div className="w-[25vw] bg-white  rounded-2xl px-3 py-2">
            <div className='border-b-[1px] border-gray-300 mb-6'>
            <h1>Status Overview</h1>
            </div>
            <div>
            <div className=' flex justify-center items-center'>
            <DouChart />
            </div>
            <div className='flex flex-col justify-center items-center fixed top-[22.5rem] text-sm right-[11rem]'>
                <div>100%</div>
                <div>Overall</div>
            </div>
            <div className='flex justify-center items-center mb-5 mt-2'>
            <div>
                <div className='my-2 flex justify-between w-[20vw] items-center'>
                <div className='flex justify-start items-center'>
                    <div className='mr-1 w-[12px] h-[12px] rounded-[50%] border-none bg-[#FFB733]'></div>
                    <div><p>On Time</p></div>
                </div>
                <div><p>40%</p></div>
                </div>
                
                <div className='my-2 flex justify-between w-[20vw] items-center'>
                <div className='flex justify-start items-center'>
                    <div className='mr-1 w-[12px] h-[12px] rounded-[50%] border-none bg-[#BC37BC]'></div>
                    <div><p>In Progress</p></div>
                </div>
                <div><p>40%</p></div>
                </div>
                <div className='my-2 flex justify-between w-[20vw] items-center'>
                <div className='flex justify-start items-center'>
                    <div className='mr-1 w-[12px] h-[12px] rounded-[50%] border-none bg-[#02B702]'></div>
                    <div><p>Delayed</p></div>
                </div>
                <div><p>40%</p></div>
                </div>
            </div>
            </div>
            </div>
                
             
            </div>
        </section>
    )
}

export default Engagements