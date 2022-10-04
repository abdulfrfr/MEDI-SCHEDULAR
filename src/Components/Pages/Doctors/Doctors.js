import { useState, useEffect } from 'react'
import NextPages from '../../NextPages'
import {FiFilter} from 'react-icons/fi'
import {BsBoxArrowInDown} from 'react-icons/bs'
import {move} from '../Services/ServicesItems'
import DocItems, {headers} from './DocItems'


function Doctors(){
    const [indx, setIndx] = useState({
        one: 0,
        two: 1,
        six: 8,
        seven: 9
    })
    const [getMove, setGetMove] = useState(0)
    const [user, setUser] = useState([])
    const [show, setShow] = useState(false)
    
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

    function getUsers(id){
        const mul_id = id * 8
        const mul_add = mul_id + 8
            setUser(DocItems.slice(mul_id,mul_add))
        
    }

    useEffect(()=>{
        const user1 = DocItems.slice(0,8)
        setUser(user1)

        
    },[DocItems])
    

    function getID(id){
        setGetMove(id)
        getUsers(id)

    }
    return(
        <section>
        <div className="px-3 pt-3">
            <div className=" flex justify-between items-center w-[78vw]">
                <div className="text-sm flex justify-between items-center w-[35vw]">
                    <div className="bg-red-200 rounded-sm text-red-500 px-5 py-2 text-sm">All Doctors</div>
                    <div>Approved Doctors</div>
                    <div>Active Doctors</div>
                    <div>Inactive Doctors</div>
                </div>
                <div>
                    <div className="border-[1px] border-red-500 rounded-lg text-red-500 px-16 py-2 text-sm">Add Doctor</div>
                </div>
            </div>

            <div className="flex justify-between items-center w-[15vw] mt-3">
                <div className="text-sm bg-white px-2 py-2 w-[7vw] rounded-md flex justify-around items-center"> 
                <div><FiFilter/></div>
                <div>Filter</div>
                </div>
                <div className="text-sm bg-white px-2 py-2 w-[7vw] rounded-md flex justify-around items-center">
                <div><BsBoxArrowInDown/>
                </div><div>Export</div>
                </div>
            </div>

            <div className='mt-3'>
                <div className='w-[78vw] h-[72vh] bg-white rounded-md px-3 py-1'>
                <div>
                    { headers.map((header, index)=>(
                            <div className='flex justify-between items-center w-[75vw] text-sm border-b-[1px] border-gray-300 pb-2'>
                                <div className='flex justify-start items-start w-[11vw]'>{header.name}</div>
                                <div className='flex justify-start items-start w-[11vw]'>{header.email}</div>
                                <div className='flex justify-center items-center w-[11vw]'>{header.roles}</div>
                                <div className='flex justify-center items-center w-[11vw]'>{header.medicareID}</div>
                                <div className='flex justify-center items-center w-[11vw]'>{header.phone}</div>
                                <div className='flex justify-start pl-2 items-center w-[11vw]'>{header.joinedDate}</div>
                                <div className='flex justify-center items-center w-[11vw]'>{header.status}</div>
                            </div>
                        ))
                    }
                </div>


                <div>
                {user.map((user, index)=>(
                    <div className='py-3 flex justify-between items-center w-[75vw] text-sm border-b-[1px] border-gray-300'>
                                <div className='flex justify-start items-start w-[11vw]'>{user.name}</div>
                                <div className='flex justify-start items-start w-[11vw]'>{user.email}</div>
                                <div className='flex justify-center items-center w-[11vw]'>{user.roles}</div>
                                <div className='flex justify-center items-center w-[11vw]'>{user.medicareID}</div>
                                <div className='flex justify-center items-center w-[11vw]'>{user.phone}</div>
                                <div className='flex justify-center items-baseline w-[11vw]'>{user.joinedDate} <div className='text-xs text-gray-400'>{user.time}</div></div>
                                <div className='flex justify-center items-center w-[11vw]'><div className='bg-green-500 text-white rounded-2xl px-3'>{user.status}</div> </div>
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
            </div>
        </div>
        </section>
    )
}

export default Doctors