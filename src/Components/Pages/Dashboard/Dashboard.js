import Menu from './Menu'
import Engagements from './Engagements'

function Dashboard(){

    return(
        <section className='mt-5 px-7 mx-[auto] overflow-hidden'>
            <Menu/>
            <Engagements/>
        </section>
    )
}

export default Dashboard