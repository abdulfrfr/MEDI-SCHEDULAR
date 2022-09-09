import {useState} from 'react'
import EngagementsItems, {items2, itemsPie} from "./EngagementsItems"
import {HiUsers} from 'react-icons/hi'
import {FaRegStar} from 'react-icons/fa'
import {doctor} from './DashboardItems'

function Engagements(){
    const [items, setItems] = useState(EngagementsItems)
    const [items1, setItems1] = useState(items2);
    const [items3, setItems3] = useState(itemsPie);
    const [doctors, setDoctors] =useState(doctor)
    return(
        <section className="mx-7 mt-7 flex justify-between items-start">
        <div className='w-[48vw] h-[55vh]'>
            <div className="w-[48vw] bg-white h-[39vh] rounded-2xl p-3">
                <h1 className='mb-3'>Account Engagements</h1>
                <div className='absolute'>
                {items.map((item, index)=>(
                    <div className="flex justify-between items-center mt-5">
                    <p className='text-xs'>{item.text}</p>
                    <div className="border-t-2 border-gray-100 w-[48vw]"></div>
                    </div>
               
                ))}
                </div>
                <div className='flex justify-between items-end mx-8 relative h-[31vh]'>
                    {items1.map((item, index)=>(
                        <div className='flex flex-col'>
                        <div className='flex justify-center items-end'>
                            <div className={`${item.red}`}></div>
                            <div className={`${item.purple}`}></div>
                        </div>
                            
                            <p className='text-xs mt-2'>{item.text}</p>
                            
                        </div>
                    ))}
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
            <div className='border-t-2 border-gray-100 w-[24vw]'></div>
            </div>
                    <div className='flex flex-col justify-center items-center h-[15.625rem]'>
                    <div className='stats rounded-[50%] flex flex-col justify-center items-center'> <h1>100%</h1> <p>overall</p> </div>
                    <div className='curve -rotate-[100deg] absolute top-[19.375rem] right-[6.9375rem]'></div>

             </div>
             <div className=''>
             {items3.map((item, index)=> (
                <div className='flex justify-between items-center mx-5'>
                <div className='flex justify-start items-center'>
                <div className={`${item.styles}`}></div>
                <p className='ml-2'>{item.text}</p>
                </div>
                <h1 className='font-bold'>{item.per}</h1>
            </div>
             ))}
             </div>
            </div>
        </section>
    )
}

export default Engagements