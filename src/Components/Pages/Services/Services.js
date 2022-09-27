import { useState, useEffect } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import NextPages from '../../NextPages'
import { ServItems, move } from './ServicesItems'


function Services(){
    const [isShow, setIsShow] = useState(true)
    const [is_Show, setIs_Show] = useState(true)
    const [user, setUser] = useState([])
    const [indx, setIndx] = useState({
        one: 0,
        two: 1,
        six: 8,
        seven: 9
    })
    const [getMove, setGetMove] = useState(0)
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


    useEffect(()=>{
        const user1 = ServItems.slice(0,8)
        setUser(user1)

        
    },[ServItems])


   

    function getUsers(id){
        const mul_id = id * 8
        const mul_add = mul_id + 8
            setUser(ServItems.slice(mul_id,mul_add))
        
    }
    

    function getID(id){
        setGetMove(id)
        getUsers(id)

    }

    function filter_by_pending(){
        const pending = ServItems.filter((item)=> item.due === 'Pending')
        setUser(pending)

        whenShowClicks()
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


                <div className="text-sm flex justify-between items-center w-[30vw] mt-3">
                    <div>Filter by</div>
                    <div className='flex flex-col justify-center items-start'>
                    <div onClick={whenShowClicks} className="cursor-pointer border-2 border-gray-300 text-sm w-[10vw] px-3 py-2 flex justify-between items-center">
                        <div className="text-gray-300 ">Category</div>
                        <div><BsChevronDown className='text-sm'/></div>
                    </div>
                    <div className={isShow? 'hidden' : 'fixed top-[10.5rem] bg-gray-300 w-[10vw] border-2 border-gray-300 flex flex-col justify-between items-center h-[20vh]'}>
                        <div onClick={filter_by_pending} className='py-2 cursor-pointer'>Pending</div>
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

                <div className='mt-2 grid grid-cols-4'>
                {user.map((user, index)=>(<div>
                        <div className='w-[16vw] h-[30vh] bg-white overflow-hidden mb-2'>
                    <div className='px-2 py-2'>
                        <p className='text-xs text-gray-400'>{user.guide}</p>
                        <p className='text-lg font-bold'>{user.status}</p>
                        <p className='text-xs text-gray-400'>{user.due}</p>
                    </div>
                        
                        <div className='border-y-[1px] border-gray-200 flex justify-center items-center'>
                            <div className=' w-[7vw] border-r-[1px] border-gray-200 px-1 py-1 flex flex-col justify-center items-start'>
                                <p className='text-xs text-gray-400'>{user.tasks}</p>
                                <p className='text-lg font-bold'>{user.tasksNum}</p>
                            </div>
                            <div className=' pl-2 w-[7vw] border-l-[1px] border-gray-200 px-1 py-1 flex flex-col justify-center items-start'>
                                <p className='text-xs text-gray-400'>{user.dis}</p>
                                <p className='text-lg font-bold'>{user.disNum}</p>
                            </div>
                        </div>
                        <div className='px-2 py-2'>
                            <div className='text-xs text-gray-400'>{user.range}</div>
                            <input min='0' max='100'  className={user.color === 'red'? 'red' : user.color === 'green' ? 'green' : 'yellow'} type="range"  name="vol" value={user.rangeVal} readOnly='true'/>
                        </div>
                    </div>

                    </div>))}

                </div>
                
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
        </section>
    )
}

export default Services