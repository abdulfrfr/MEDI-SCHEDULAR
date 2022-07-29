import home from './home.jpg'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {MdOutlineLocalHospital} from 'react-icons/md'

function Home(){
    return(
        <section className='w-full h-screen'>
            <div className='bg-gray-900/90 w-full md:h-[700px] absolute'>
            <img src={home} alt="home" className='w-full md:h-full  mix-blend-overlay'/>
            </div>
                
            <div className='relative pt-10 pb-7 md:px-52 md:pt-52 md:pb-40 md:flex-col justify-center items-center text-center'>
                <h1 className='text-white text-2xl font-bold md:text-6xl md:font-extrabold md:py-7'>WITH GOOD HEALTH COMES GOOD STRENGHT</h1>
                <p className='text-gray-400 text-xs md:text-lg text-center mb-8 md:mb-0 '>Veniam est ea aliqua in pariatur tempor exercitation elit amet. Occaecat 
                esse esse duis sint. Ad Lorem dolor aliqua dolore cupidatat duis veniam consequat
                 est nulla est irure eu qui. Nulla dolore officia </p>    
            </div>
            <div className='relative  md:flex justify-evenly md:justify-center itmes-center mb-10'>
            <div>
                 <div className='bg-gray-200 md:mr-7 shadow-2xl rounded-xl py-12 mx-10 mb-10 md:mx-0 px-10 text-center justify-evenly flex-col  text-xl text-indigo-700 items-center'>
                    <div className='bg-indigo-700 p-3 rounded-md w-12 mt-[-70px]'><BsJournalBookmarkFill className=' text-slate-200 text-2xl'/></div>
                    <h1 className='pb-3 font-bold text-3xl mt-10'>24/7</h1>
                    <p className='text-sm md:text-xl text-slate-600'>GET APPOINTMENTS</p>
                </div>
            </div>
            <div> 
                <div className='bg-gray-200 md:mr-7 shadow-2xl rounded-xl py-12 mx-10 mb-10 md:mx-0 px-10 text-center justify-evenly flex-col  text-xl text-indigo-700 items-center'>
                    <div className='bg-indigo-700 p-3 rounded-md w-12 mt-[-70px]'><AiOutlinePhone className='text-slate-200 text-2xl'/></div>
                    <h1 className='pb-3 font-bold text-3xl mt-10'>24/7</h1>
                    <p className='text-sm md:text-xl text-slate-600'>TALK TO A DOCTOR</p>
                </div>
            </div>
            <div>
                <div className='bg-gray-200 md:mr-7 shadow-2xl rounded-xl py-12  mx-10 mb-10 md:mx-0 px-10 text-center justify-evenly flex-col  text-xl text-indigo-700 items-center'>
                    <div className='bg-indigo-700 p-3 rounded-md w-12 mt-[-70px]'><MdOutlineLocalHospital className='text-slate-200 text-2xl'/></div>
                    <h1 className='pb-3 font-bold text-3xl mt-10'>24/7</h1>
                    <p className='text-sm md:text-xl text-slate-600'>SEARCH HOSPITALS</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Home