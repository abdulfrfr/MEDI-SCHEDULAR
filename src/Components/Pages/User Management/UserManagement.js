import {useEffect, useState} from 'react'
import {FiFilter} from 'react-icons/fi'
import {BsBoxArrowInDown} from 'react-icons/bs'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import Users, {move} from './UserItems'

function UserManagement(){
    const [user, setUser] = useState([])
    const [indx, setIndx] = useState({
        one: 0,
        two: 1,
        six: 5,
        seven: 6
    })
    const [getMove, setGetMove] = useState()
    const [res1, setRes1] = useState(0)
    const [res2, setRes2] = useState(0)

    


    


    
    
    
    useEffect(()=>{
        const user1 = Users.slice(0,5)
        setUser(user1)

        setGetMove(0)
        

        
    },[])


   

    function getUsers(id){
        const mul_id = id * 5
        const mul_add = mul_id + 5
            setUser(Users.slice(mul_id,mul_add))
        
    }
    

    function getID(id){
        setGetMove(id)
        getUsers(id)

    }

    return(
        <section className="">
            <div className="flex justify-between items-center p-4 pr-10">
                <div className="flex justify-between items-center w-[23vw]">
                    <div className="flex justify-between items-center bg-blue-200 w-[9vw] px-2 py-1 text-xs rounded-lg">
                        <div><p>All Users</p></div>
                        <div className="bg-white w-[3rem] h-[2rem] flex justify-center items-center text-xs text-red-500 rounded-lg"><p>401</p></div>
                    </div>
                    <div className="flex justify-between items-center  w-[10vw] px-2 py-1 text-xs rounded-lg">
                        <div>Patients</div>
                        <div className="bg-gray-400 w-[3rem] h-[2rem] flex justify-center items-center text-xs text-white rounded-lg"><p className="">280</p></div>
                    </div>
                </div>
                <div>
                    <button className="text-red-500 border-[1px] border-red-500 w-[13vw] mr-3 py-2 rounded-lg">Create New User</button>
                </div>
            </div>


            <div className='w-[17vw] flex justify-between items-center px-4 pt-1 pb-2'>
                <div className='flex justify-between items-center w-[7vw] px-3 py-1 rounded-lg bg-white'>

                <FiFilter/> 
                <p>Filter</p>
                </div>
                <div className='flex justify-between items-center w-[7vw] px-3 py-1 rounded-lg bg-white'>
                <div>
                <BsBoxArrowInDown/>
                </div>
                
                 <p>Export</p>
                 </div>
            </div>


            <div className='w-[75vw] mx-4 rounded-lg bg-white'>
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
            

            <div className='flex justify-center items- p-4'>
                <div className='border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'><IoIosArrowBack/></div>
                
                <div onClick={()=> getID(move[indx.one].id)} className={move[indx.one].id === getMove ?'cursor-pointer border-[1px] border-red-500 bg-red-500 text-white rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2' : 'cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'}>{move[indx.one].num}</div>
                <div onClick={()=> getID(move[indx.two].id)} className={move[indx.two].id === getMove ?'cursor-pointer border-[1px] border-red-500 bg-red-500 text-white rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2' : 'cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'}>{move[indx.two].num}</div>
                
                <div className='cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'>
                    <div className='flex justify-center items-center'>
                        <div className='mr-[2px] w-1 h-1 rounded-[50%] bg-gray-400'></div>
                        <div className='mr-[2px] w-1 h-1 rounded-[50%] bg-gray-400'></div>
                        <div className='mr-[2px] w-1 h-1 rounded-[50%] bg-gray-400'></div>
                    </div>
                </div>
            
                    <div onClick={()=> getID(move[indx.six].id)}  className={move[indx.six].id === getMove ?'cursor-pointer border-[1px] border-red-500 bg-red-500 text-white rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2' : 'cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'}>{move[indx.six].num}</div>
                    <div onClick={()=> getID(move[indx.seven].id)}  className={move[indx.seven].id === getMove ?'cursor-pointer border-[1px] border-red-500 bg-red-500 text-white rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2' : 'cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'}>{move[indx.seven].num}</div>
                
                <div className='cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'><IoIosArrowForward/></div>
            </div>
            </div>
        </section>
    )
}

export default UserManagement