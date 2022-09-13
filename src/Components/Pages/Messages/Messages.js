import {useState} from 'react'
import {BsChevronDown, BsFilterLeft, BsThreeDots, BsEmojiSmile} from 'react-icons/bs'
import {BiFilterAlt, BiSend} from 'react-icons/bi'
import userMessages from './messagesItems'
import {FaUserAlt} from 'react-icons/fa'
import {GrAttachment} from 'react-icons/gr'
import { items2 } from '../Dashboard/EngagementsItems';

function Messages(){
    const [users, setUsers] = useState(userMessages);

    return(
        <section className=''>
            <div className="p-4 w-[80vw] flex justify-between items-center">
                <div className="flex w-[25vw] justify-between items-center">
                    <div className="flex w-[11vw] justify-between items-center bg-blue-200 py-2 px-3 rounded-lg">
                        <div className="text-xs">Messages</div>
                        <div className="bg-white text-red-500 px-2 py-1 rounded-lg text-xs">608</div>
                    </div>
                    <div className="flex w-[11vw] justify-between items-center bg-gray100 py-2 px-3 rounded-lg">
                        <div className="text-xs">Templates</div>
                        <div className="bg-gray-500 text-white px-3 py-2 rounded-lg text-xs">401</div>
                    </div>
                </div>
                <div>
                    <div className="w-[25vw] flex justify-between items-start">
                        <button className="text-xs bg-gray-100 border-2 border-red-500 px-4 py-2 rounded-lg text-red-500">Create New Message</button>
                        <div className="bg-white w-[12vw] flex justify-between items-center px-2 py-1 rounded-lg text-sm">
                            <div>View:</div>
                            <div className='flex justify-between items-center w-[6vw]'><p>All Types</p> <BsChevronDown/></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='w-[25vw] flex justify-between items-center text-[1rem] px-4 '>
                <div>Customer's Support (220)</div>
                <div className='text-gray-400'>Staff (45)</div>
            </div>
            <section className='w-[80vw] p-4 flex justify-between items-start'>
                <div className='w-[35vw] h-[65vh] rounded-xl bg-white'>
                    <div className='bg-gray-200 w-[35vw] flex justify-between items-center h-[7vh] rounded-lg pl-10 pr-5'>
                        <div className='flex justify-center items-start'>
                            <p className='text-sm'>CUSTOMER</p>
                            <p className='text-xs text-white rounded-xl px-1 bg-red-500 ml-2'>3</p>
                        </div>
                        <div className='text-sm'>DETAILS</div>
                        <div className='flex justify-evenly items-center w-[5vw]'><BsFilterLeft/><BiFilterAlt/><p className='text-xs'>Filter</p></div>
                    </div>
                    <div className='flex flex-col justify-between h-[58vh] p-3'>
                        {users.map((user, index)=>(
                            <div>
                            
                            <div className='flex justify-start items-center'>
                                <div className={`${user.styles}`}></div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-xs text-gray-400'>{user.serial}</div>
                                <div className='text-gray-300 text-2xl bg-gray-500 rounded-[50%] h-[6vh] w-[2.7vw] flex justify-center items-center '><user.icon/></div>
                            </div>
                                <div className='flex justify-between items-center w-[30vw]'>
                                    <div className='flex flex-col justify-center items-start w-[15w] ml-2'>
                                    <div className='text-xs'>{user.name}</div>
                                    <div className='text-sm text-gray-400'>{user.status}</div>
                                    </div>
                                    <div className='flex flex-col justify-center items-start  ml-2 '>
                                    <div className='text-xs'>{user.text}</div>
                                    <div className='text-sm text-gray-400'>{user.date}</div>
                                    </div>
                                </div>
                                <div className='ml-2'>{<user.icons/>}</div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='w-[40vw] rounded-xl px-4 bg-white p-3'>
                <div className='border-b-[1px] border-gray-400 pb-3'>
                    <div className='flex justify-start items-center'>
                        <div className='text-gray-300 text-2xl bg-gray-500 rounded-[50%] h-[6vh] w-[2.7vw] flex justify-center items-center '><FaUserAlt/></div>
                        <div className='flex flex-col justify-center items-start'>
                            <div className='text-sm'>Blessing Jacob</div>
                            <div className='text-xs text-gray-400'>Basic User</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-xs text-gray-400'>Created on 23 Sept. 2021</p>
                        </div>
                        <div className='flex justify-between items-center w-[15vw]'>
                            <div className='text-xs text-red-500 px-3 py-2 border-red-500 rounded-lg border-[1px]'><button>Create Consultation</button></div>
                            <div className=' flex justify-center items-center text-gray-500 text-sm w-[30px] h-[30px] bg-gray-300  rounded-[50%]'><BsThreeDots/></div>
                        </div>
                    </div>
                </div>



                <div className='py-2'>
                    <p className='text-xs text-gray-400'>23 Dec. 2021</p>
                </div>


                <div>
                    <div className='mt-2'>
                        <div className='flex justify-between items-center mt-0'>
                            <div className='bg-gray-400 w-[2rem] h-[2rem] rounded-[50%]'></div>
                            <div className='flex flex-col justify-center items-start'>
                            <div className='px-5 py-2 rounded-2xl text-sm shadow-xl '><p>I need some help on my consultation registeration please</p></div>
                            <div className='text-xs'><p>09:00am</p></div>
                            </div>
                        </div>



                        <div>
                        <div className='flex justify-end items-end mt-0'>
                            <div className=' bg-gray-300 px-5 py-2 rounded-2xl text-sm  '><p>Hi, how may i help you please?</p></div>
                        </div>
                        <div className='flex justify-end items-end'>
                            <div className='text-xs text-gray-400'><p>10:45am</p></div>
                        </div>
                        </div>



                        <div className='flex justify-between items-center mt-0'>
                            <div className='bg-gray-400 w-[2rem] h-[2rem] rounded-[50%]'></div>
                            <div className='flex flex-col justify-center items-start'>
                            <div className='px-5 py-2 rounded-2xl text-sm shadow-xl '><p>I need some help on my consultation registeration please</p></div>
                            <div className='text-xs'><p>09:00am</p></div>
                            </div>
                        </div>



                        <div>
                            <div className='flex justify-end items-end mt-0'>
                                <div className=' bg-gray-300 px-5 py-2 rounded-2xl text-sm  '><p>Okay, could you pleae send the appointment ID?</p></div>
                            </div>
                            <div className='flex justify-end items-end'>
                                <div className='text-xs text-gray-400'><p>10:45am</p></div>
                            </div>
                        </div>


                        <div className='flex justify-start items-center mt-0'>
                            <div className='bg-gray-400 w-[2rem] h-[2rem] rounded-[50%]'></div>
                            <div className=''>
                        <div className='ml-4 bg-blue-300 flex justify-center items-center rounded-2xl w-[5vw] h-[5vh]'>
                            <div className='bg-gray-300 w-2.5 h-2.5 rounded-[50%]'></div>
                            <div className='bg-gray-200 w-2.5 h-2.5 rounded-[50%]'></div>
                            <div className='bg-gray-100 w-2.5 h-2.5 rounded-[50%]'></div>
                        </div>
                        </div>
                        </div>

                        
                    </div>
                </div>

                <div>
                    <div className='flex w-[35vw] ml-5 mt-4 rounded-sm justify-center items-center'>
                    <div className='flex justify-start items-center'>
                        <BsEmojiSmile className='text-lg mr-2'/>
                        <input className='border-none outline-none bg-white text-gray-700 w-[30vw]' type='text' placeholder='Type Something...' name='message'/>
                    </div>
                    <div className='flex justify-start items-center'>
                        <GrAttachment className='text-lg ml-4'/>
                        <div className=' ml-2  bg-red-500 rounded-[50%] w-[2rem] h-[2rem] flex justify-center items-center'>
                        <BiSend className='text-lg text-white '/>
                        </div>
                    </div>
                        
                    </div>
                </div>
                </div>
                
                
            </section>
        </section>
    )
}

export default Messages