import {useState, useEffect} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import NavItems from './NavItems'

function SideNav(){
    const [getId, setGetId] = useState('')

    useEffect(()=>{
        setGetId(0)
    }, [])

    function genId(index){
        setGetId(index)
    }

    return(
        <section className="h-screen w-[20vw] bg-white">
            <div className='flex justify-center items-baseline pt-5'>
            <h3 className='text-red-600 text-xl font-bold '>MED CARE </h3>
            <AiOutlinePlus className='text-black text-sm ml-2'/>
            </div>

            <div className='flex flex-col justify-between items-center h-[60vh] mt-10 w-[20vw]'>
            
                {NavItems.map((item, index)=>(
                    <div id={index} onClick={()=> genId(index)} className={getId === index? 'flex justify-start items-center text-white cursor-pointer nav--sec pl-16 py-2 w-[20vw]' : 'flex justify-start items-center cursor-pointer text-slate-900 pl-16 py-2 w-[20vw]'}>
                        <item.icon className='mr-3 text-lg'/>
                        <p className='text-[14px]'>{item.text}</p>
                    </div>
                ))}

                {/* <TbLayoutDashboard className='mr-3 text-xl text-white'/>
                <p className='text-white'>Dashboard</p> */}
            

            </div>
        </section>
    )
}

export default SideNav