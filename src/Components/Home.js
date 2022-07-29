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
                 est nulla est irure eu qui. Nulla dolore officia magna eu ullamco culpa. Culpa fugiat
                  tempor reprehenderit reprehenderit duis cupidatat Lorem consectetur enim nisi exercitation.</p>    
            </div>
            <div className='relative flex-col items-center justify-between md:flex-row '>
                <div className='bg-gray-300 rounded-md py-12 mx-20 px-10 md:pl-10 md:w-80 md:pr-0 md:justify-evenly flex justify-between mb-10 w-52 text-lg text-indigo-700 items-center'>Appointments <BsArrowRight/></div>
                <div className='bg-gray-300 rounded-md py-12 mx-20 px-10 md:pl-10 md:w-80 md:pr-0 md:justify-evenly flex justify-between mb-10 w-52 text-lg text-indigo-700 items-center'>Doctors <BsArrowRight/></div>
                <div className='bg-gray-300 rounded-md py-12 mx-20 px-10 md:pl-10 md:w-80 md:pr-0 md:justify-evenly flex justify-between mb-10 w-52 text-lg text-indigo-700 items-center'>Hospitals <BsArrowRight/></div>
            </div>
        </section>
    )
}

export default Home