import {useEffect, useState} from 'react'
import {FiFilter} from 'react-icons/fi'
import {BsBoxArrowInDown} from 'react-icons/bs'
import Users, {move, colors} from './UserItems'
import NextPages from '../../NextPages'

function UserManagement(){
    const [user, setUser] = useState([])
    const [indx, setIndx] = useState({
        one: 0,
        two: 1,
        six: 8,
        seven: 9
    })
    const [getMove, setGetMove] = useState(0)
    const [show, setShow] = useState(false)


    
// when the left arrow is clicked
    function changeDisplayFirst(){
        if(getMove === 6){
            setShow(false)
        }else {
            console.log('okay!');
        }
        if(indx.one === 0){
            setIndx(()=>{return {
                
                    one: 0,
                    two: 1,
                    six: 8,
                    seven: 9
                
            }})
        } else if (getMove >= 7){
            setIndx(()=>{return {
                
                one: 6,
                two: 7,
                six: 8,
                seven: 9
            
        }})
        }
        else {
            
            setIndx(()=>{return {
                
                one: indx.one--,
                two: indx.two--,
                six: 8,
                seven: 9
            
        }})

        if(indx.two === 7 && indx.six === 8){
            if(getMove === 8){
                setGetMove(6)
            } else{
                console.log('confused');
            }
            
        } else{
            console.log('sigh');
        }
        
        }
        if(getMove === 0){
            setGetMove(0)
            getUsers(0)
        } else {
            setGetMove(()=> getMove - 1)
            getUsers(getMove - 1)
        }

        
        
    }


// when the right arrow is clicked
    function changeDisplaySecond(){
        if(indx.two === 6){
            setShow(true)
        } else{
            console.log('working');
        }
        if(indx.two === 7){
            setIndx(()=>{return {
                
                one: 6,
                two: 7,
                six: 8,
                seven: 9
            
        }})
            
        } else{
            setIndx(()=>{return {
                
                one: indx.one++,
                two: indx.two++,
                six: 8,
                seven: 9
            
        }})   
             
        }

        if(getMove === 9){
            setGetMove(9)
            getUsers(9)
        } else {
            setGetMove(()=> getMove + 1)
            getUsers(getMove + 1)
        }
        
        
        
    }
    


    
    
    
    useEffect(()=>{
        const user1 = Users.slice(0,5)
        setUser(user1)

        
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
                <div className='text-sm  flex justify-around items-center w-[7vw] px-2 py-2 rounded-md bg-white'>

                <FiFilter/> 
                <p>Filter</p>
                </div>
                <div className='text-sm  flex justify-around items-center w-[7vw] px-2 py-2 rounded-md bg-white'>
                <div>
                <BsBoxArrowInDown/>
                </div>
                
                 <p>Export</p>
                 </div>
            </div>


            <div className='w-[75vw] h-[70vh] mx-4 rounded-lg bg-white'>
            <div className='flex justify-between items-start border-b-[1px] border-gray-300 px-4 py-0 w-[75vw]'>
                <div className=' w-[17vw] px-0 py-2 flex justify-between items-start translate-x-2'>
                <p>User ID</p>
                <p>User</p>
                
                </div> 


                <div className='flex justify-between items-start w-[42vw] text-sm -translate-x-10'>
                <div className='w-[10vw] px-0 py-2 translate-x-1'>
                    <p>User Type</p>
                </div>
                


                <div>
                <div className='flex justify-between items-start w-[30vw] px-0 py-2 '>
                    <p>Service Request</p>
                    <p>Appointments</p>
                    <p>Status</p>
                </div>
                
                </div>
                </div>
            </div>

            <div>
                {user.map((user, index)=>(
                    <div className='border-b-[1px] py-1 border-gray-300'>
                    <div className='flex justify-between items-center px-5 py-4 text-sm h-[9.5vh]'>
                        <div className='flex justify-start items-center w-[23vw] '>
                            <div className='w-[5rem]'>{user.ID}</div>
                            <div className='flex flex-col justify-center items-start translate-x-[7rem]'>
                                <div>{user.user}</div>
                                <div>{user.email}</div>
                            </div>
                        </div>
                        <div className='w-[10vw] flex justify-start items-start'>
                            <div className='flex justify-center items-center w-[5vw]'>{user.user_type}</div>
                        </div>
                        <div className='flex justify-between items-center w-[30vw] text-center'>
                            <div className='flex justify-center items-center overflow-hidden w-[5vw] -translate-x-7'>{user.service}</div>
                            <div className='flex justify-center items-center overflow-hidden w-[5vw] -translate-x-4'>{user.appointment}</div>
                            <div className={user.status === 'Active'? `${colors[0].green}` : user.status === 'Pending' ? `${colors[2].yellow}` : `${colors[1].red}`}>{user.status}</div>
                        </div>
                    </div>
                    
                    </div>

                ))}
            </div>

                <div>
                    <NextPages 
                    changeDisplayFirst={changeDisplayFirst}
                    changeDisplaySecond={changeDisplaySecond}
                    getMove={getMove}
                    show={show}
                    move={move}
                    getID={getID}
                    indx={indx}

                    /> 
                </div>
            </div>
        </section>
    )
}

export default UserManagement