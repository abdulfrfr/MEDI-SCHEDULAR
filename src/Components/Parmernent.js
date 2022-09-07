import {useState} from 'react'
import Nav from './Nav'
import SideNav from './SidenavAssets/SideNav'

function Parmernent(){
    const [page, setPage] = useState([])
    const [text, setText] = useState('')
    

    return(

        <section className='flex '>
            <SideNav setText={setText} page={page} setPage={setPage}/>
            <Nav text={text} page={page} />
            
        </section>
    )
}

export default Parmernent