import {useState} from 'react'
import Nav from './Nav'
import SideNav from './SidenavAssets/SideNav'

function Parmernent(){
    const [page, setPage] = useState([])
    const [text, setText] = useState('')
    

    return(
        <section>
        <section className='hidden xl:flex '>
            <SideNav setText={setText} page={page} setPage={setPage}/>
            <Nav text={text} page={page} />
            
        </section>
        <div className='h-screen xl:hidden flex justify-center items-center bg-gray-300'>
        <div className='w-[70vw] text-blue-600 text-center'>
            <p>Please Visit on Your Desktop or Laptop Computer</p>
        </div>
        </div>
        </section>
    )
}

export default Parmernent