import { useState, useEffect } from 'react'
import {AllSettings} from './AllSettings'
import {GoArrowRight} from 'react-icons/go'

function Settings(){
const [page, setPage] = useState([])
const [pId, getpId] = useState(0)


function when_page_isClicked(id){
    getpId(id)
}

function getPage(id){
    const currentPage = AllSettings.filter((page, index)=> index === id)
    setPage(currentPage)
    when_page_isClicked(id)

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
                <div className="flex flex-col justify-between items-start w-[20vw] h-[22vh]">
                    {AllSettings.map((page, index)=>(

                        <div className='cursor-pointer flex justify-center items-center' onClick={()=> getPage(index)}>
                        <div className={pId === index?'mr-3':'hidden'}><GoArrowRight className='text-red-500'/></div>
                        <div className={pId === index? 'text-md text-black' : 'text-sm text-gray-400'}>{page.text}</div>
                        </div>
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