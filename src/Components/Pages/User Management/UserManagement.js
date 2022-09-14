import {useState} from 'react'
import {FiFilter} from 'react-icons/fi'
import {BsBoxArrowInDown} from 'react-icons/bs'
import Users from './UserItems'

function UserManagement(){
    const [user, setUser] = useState(Users)

    return(
        <section className="">
            <div className="flex justify-between items-center p-4 pr-10">
                <div className="flex justify-between items-center w-[30vw]">
                    <div className="flex justify-between items-center bg-blue-200 w-[10vw] px-3 py-1 text-xs rounded-lg">
                        <div><p>All Users</p></div>
                        <div className="bg-white w-[2rem] h-[2rem] flex justify-center items-center text-xs text-red-500 rounded-lg"><p>401</p></div>
                    </div>
                    <div className="flex justify-between items-center  w-[12vw] px-3 py-1 text-xs rounded-lg">
                        <div>Patients</div>
                        <div className="bg-gray-400 w-[2rem] h-[2rem] flex justify-center items-center text-xs text-white rounded-lg"><p className="">280</p></div>
                    </div>
                </div>
                <div>
                    <button className="text-red-500 border-[1px] border-red-500 w-[13vw] py-2 rounded-lg">Create New User</button>
                </div>
            </div>


            <div className='w-[17vw] flex justify-between items-center p-4'>
                <div className='flex justify-between items-center w-[7vw] px-3 py-2 rounded-lg bg-white'>

                <FiFilter/> 
                <p>Filter</p>
                </div>
                <div className='flex justify-between items-center w-[7vw] px-3 py-2 rounded-lg bg-white'>
                <div>
                <BsBoxArrowInDown/>
                </div>
                
                 <p>Export</p>
                 </div>
            </div>


            <div className='w-[75vw] h-[65vh] mx-4 rounded-lg bg-white'>
            <div className='flex justify-between items-center border-b-[1px] border-gray-300 px-4 py-0'>
                <div className=' w-[20vw] px-5 py-2 flex justify-between items-center'>
                <p>User ID</p>
                <p>User</p>
                
                </div> 


                <div className='flex justify-between items-center w-[40vw] text-sm'>
                <div className='w-[10vw] px-5 py-2'>
                    <p>User Type</p>
                </div>
                


                <div>
                <div className='flex justify-between items-center w-[30vw] px-5 py-2'>
                    <p>Service Request</p>
                    <p>Appointments</p>
                    <p>Status</p>
                </div>
                
                </div>
                </div>
            </div>

            <div>
                {user.map((user, index)=>(
                    <div className='border-b-[1px] border-gray-300'>
                    <div className='flex justify-between items-center px-5 py-4 text-sm h-[9.5vh]'>
                        <div className='flex justify-start items-center w-[30vw] '>
                            <div>{user.ID}</div>
                            <div className='flex flex-col justify-center items-start ml-32'>
                                <div>{user.user}</div>
                                <div>{user.email}</div>
                            </div>
                        </div>
                        <div className='w-[10vw] flex justify-start items-start ml-16'>
                            <div className='text-left'>{user.user_type}</div>
                        </div>
                        <div className='flex justify-between items-center w-[30vw] text-left'>
                            <div className='flex justify-start items-start overflow-hidden w-[5vw]'>{user.service}</div>
                            <div className='flex justify-start items-start overflow-hidden w-[5vw]'>{user.appointment}</div>
                            <div className='flex justify-start items-start overflow-hidden w-[5vw]'>{user.status}</div>
                        </div>
                    </div>
                    
                    </div>

                ))}
            </div>
            </div>
        </section>
    )
}

export default UserManagement