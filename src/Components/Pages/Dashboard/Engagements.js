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
        <div className='w-[48vw] h-[60vh]'>
            <div className="w-[48vw] bg-white rounded-2xl p-3 ">
            <div className='object-cover'>
            <h1 className=' mb-1'>Account Engagements</h1>
                
                <div className=''>
                <BarChart/>
                </div>
            </div>
                
            </div>

            <div className='flex justify-between items-start mt-[10px]'>
                <div className='bg-white w-[20vw] h-[40vh] rounded-xl p-2'>
                <h1 className='mb-2'>Our Doctors</h1>
                    <div className='flex flex-col justify-between items-start w-[19vw] h-[90vh] overflow-x-hidden overflow-y-scroll '>
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
                <div className='w-[13vw] h-[18vh] bg-purple-100 rounded-xl text-center flex flex-col justify-between items-center p-1'>
                    <div className='bg-gray-200 w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'>
                        <HiUsers className='text-xl'/>
                    </div>
                    <h1 className='font-bold'>90K</h1>
                    <div className='w-[45px] border-gray-300 border-b-2'></div>
                    <div>
                    <p className='text-[0.6rem]'>2500 Users</p>
                    <p className='text-[0.6rem]'>Dounloaded the app this month</p>
                    </div>
                    
                </div>
                <div className='w-[13vw] h-[18vh] bg-green-100 rounded-xl text-center flex flex-col justify-between items-center p-1'>
                    <div className='bg-gray-200 w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'>
                        <FaRegStar className='text-xl'/>
                    </div>
                    <h1 className='font-bold'>874</h1>
                    <div className='w-[45px] border-gray-300 border-b-2'></div>
                    <div>
                    <p className='text-[0.6rem]'>Account Ranked</p>
                    <p className='text-[0.6rem]'>You are in top 80%</p>
                    </div>
                    
                    
                </div>

            </div>



            </div>
            <div className="w-[25vw] bg-white h-[58vh] rounded-2xl px-3 py-2">
            <div className=''>
            <h1>Status Overview</h1>
            </div>
            <div>
            <div className='flex justify-center items-center'>
            <DouChart/>
            </div>
            </div>
                
             
            </div>
        </section>
    )
}

export default Engagements