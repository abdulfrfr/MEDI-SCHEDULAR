import { useState, useEffect } from 'react'
import NextPages from '../NextPages'
import {FiFilter} from 'react-icons/fi'
import {BsBoxArrowInDown} from 'react-icons/bs'
import {ServItems, move} from './Services/ServicesItems'

function Doctors(){
    const [indx, setIndx] = useState({
        one: 0,
        two: 1,
        six: 8,
        seven: 9
    })
    const [getMove, setGetMove] = useState(0)
    const [isShow, setIsShow] = useState(true)
    const [is_Show, setIs_Show] = useState(true)
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
            setUser(ServItems.slice(mul_id,mul_add))
        
    }
    

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
                <div className='w-[78vw] h-[70vh] bg-white rounded-md'>


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