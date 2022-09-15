import {useState} from 'react'
import DashboardItems from "./DashboardItems"

function Menu(){
    const [items, setItems] = useState(DashboardItems)
    
    return(
        <section>
            <div className="mx-5 flex justify-between items-center">
        {items.map((item, index)=>(
            <div className="w-[18vw] h-[20vh] bg-white rounded-xl px-3 py-5 flex flex-col justify-between">
                <div>
                <item.icon className={`${item.styles}`}/>
                <p className="w-[10vw] text-xs">{item.text}</p>
                </div>
                
                <div className="flex justify-between items-center">
                    <h1 className='font-bold text-xl'>{item.number}</h1>
                    <p className={`${item.style}`}>{item.num}</p>
                </div>
            </div>
        ))}
            
        </div>
        </section>
    )
}

export default Menu