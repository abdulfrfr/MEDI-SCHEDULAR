import { useState, useEffect } from 'react'
import {AllSettings} from './AllSettings'

function Settings(){
const [page, setPage] = useState([])


function getPage(id){
    const currentPage = AllSettings.filter((page, index)=> index === id)
    setPage(currentPage)
}


useEffect(()=>{
const firstPage = AllSettings.filter((page, index)=> index === 0)
setPage(firstPage)
},[])
    return(
        <section>
            <div className="flex justify-start items-start overflow-hidden">
                <div className="bg-gray-100 w-[16vw] h-screen">
                <div className="flex flex-col justify-center items-center w-[25vw] mt-10">
                <div className="flex flex-col justify-between items-start w-[15vw] h-[22vh]">
                    {AllSettings.map((page, index)=>(
                        <div className='cursor-pointer' onClick={()=> getPage(index)}>{page.text}</div>
                    ))}
                </div>
                </div>
                
                    
                </div>
                <div className="bg-white w-[64vw] h-screen">
                    <div>
                        {page.map((show, index)=>(<div>
                            <show.page/>
                        </div>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Settings