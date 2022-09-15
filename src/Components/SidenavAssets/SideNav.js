import {useState, useEffect} from 'react'
import NavItems from './NavItems'
import Logo from '../Logo'
import {FiSend} from 'react-icons/fi'

function SideNav({setText, page, setPage}){
    const [getId, setGetId] = useState('')
    const [items, SetItems] = useState(NavItems)
    

    useEffect(()=>{
        setGetId(0)
        
    }, [])

    useEffect(()=>{
        setText('Dashboard')
        
    }, [])

    useEffect(()=>{
        setPage(items.filter((item, index)=> index === 0))
        
    }, [])



    
    

    function genId(id, text){
        setGetId(id)
        setPage(items.filter((item, index)=> index === id))
        setText(text)
        
    }

    return(
        <section className="pb-10 flex flex-col justify-between items-center h-screen w-[20vw] bg-white border-r-2 border-gray-100">
        <div>
        <div className='flex justify-center items-center '><Logo/></div>
            
            <div className='flex flex-col justify-between items-center h-[60vh] mt-10 w-[20vw]'>
            
                {items.map((item, index)=>(
                    <div id={index} onClick={()=> genId(index, item.text)} className={getId === index? 'flex justify-start items-center text-white cursor-pointer nav--sec pl-16 py-2 w-[20vw]' : 'flex justify-start items-center cursor-pointer text-slate-900 pl-16 py-2 w-[20vw]'}>
                        <item.icon className='mr-3 text-lg'/>
                        <p className='text-[0.875rem]'>{item.text}</p>
                    </div>
                ))}

                {/* <TbLayoutDashboard className='mr-3 text-xl text-white'/>
                <p className='text-white'>Dashboard</p> */}
            

            </div>
            </div>
            <div className='flex justify-start items-center cursor-pointer text-slate-900 pl-16 py-2 w-[20vw]'>
                <FiSend className='mr-3 text-lg'/>
                <p className=' text-[0.875rem]'>Log Out</p>
            </div>
        </section>
    )
}

export default SideNav