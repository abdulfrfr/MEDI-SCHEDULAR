import home from './home.jpg'
import {BsArrowRight} from 'react-icons/bs'

function Home(){
    return(
        <section className='w-full h-screen'>
            <div className='bg-gray-900/90 w-full md:h-[700px] absolute'>
            <img src={home} alt="home" className='w-full md:h-full  mix-blend-overlay'/>
            </div>
                
            <div className='relative pt-14 pb-7 md:px-52 md:pt-52 md:pb-40 md:flex-col justify-center items-center text-center'>
                <h1 className='text-white text-2xl font-bold md:text-6xl md:font-extrabold md:py-10'>WITH GOOD HEALTH COMES GOOD STRENGHT</h1>
                <p className='text-gray-400 text-xs md:text-lg text-center '>Veniam est ea aliqua in pariatur tempor exercitation elit amet. Occaecat 
                esse esse duis sint. Ad Lorem dolor aliqua dolore cupidatat duis veniam consequat
                 est nulla est irure eu qui. Nulla dolore officia </p>    
            </div>
            <div className='relative  md:flex justify-evenly itmes-center '>
                <div className='bg-gray-300 rounded-xl py-12 mx-20 px-10 text-center justify-evenly flex mb-10 text-xl text-indigo-700 items-center'><h4>GET APPOINTMENTS</h4></div>
                <div className='bg-gray-300 rounded-xl py-12 mx-20 px-10 text-center justify-evenly flex mb-10 text-xl text-indigo-700 items-center'><h4>FIND A DOCTORS</h4></div>
                <div className='bg-gray-300 rounded-xl py-12 mx-20 px-10 text-center justify-evenly flex mb-10 text-xl text-indigo-700 items-center'><h4>SEARCH HOSPITALS</h4></div>
            </div>
        </section>
    )
}

export default Home