import React from 'react';

function Home (){
    return (
        <section>
        <section id='main' className='bg-cover bg-[url("https://images.pexels.com/photos/2867895/pexels-photo-2867895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]
        md:h-full'>
        <div className='py-10 md:py-32 px-5 md:px-10 text-center md:text-left flex justify-center items-center md:justify-evenly md:items-center'>
            <h1 className='text-gray-300 font-bold text-2xl md:text-7xl w-full md:w-2/4'>WHAT MAKES US BETTER, MAKES YOU BETTER.</h1>
            <div className='hidden md:flex flex-col'>
                <div className='sides w-96 py-7 px-5 mb-5' style={{background:'rgba( 255, 255, 255, 0.55 )', boxShadow:'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', backdropFilter:'blur( 4px )', webkitBackdropFilter:'blur( 4px )', borderRadius: '10px', border:'1px solid rgba( 255, 255, 255, 0.18 )' }}>Home</div>
                <div className='sides w-96 py-7 px-5 mb-5' style={{background:'rgba( 255, 255, 255, 0.55 )', boxShadow:'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', backdropFilter:'blur( 4px )', webkitBackdropFilter:'blur( 4px )', borderRadius: '10px', border:'1px solid rgba( 255, 255, 255, 0.18 )' }}>About</div>
                <div className='sides w-96 py-7 px-5 mb-5' style={{background:'rgba( 255, 255, 255, 0.55 )', boxShadow:'0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', backdropFilter:'blur( 4px )', webkitBackdropFilter:'blur( 4px )', borderRadius: '10px', border:'1px solid rgba( 255, 255, 255, 0.18 )' }}>Contact</div>
            </div>
        </div>
        </section>
        <section className='block md:hidden flex justify-evenly items-center py-2 px-2'>
        <div className='bg-white text-center py-4 px-3 text-xs'>CONTACT</div>
        <div className='bg-white text-center py-4 px-3 text-xs'>BOOK APPOINTMENT</div>
        <div className='bg-white text-center py-4 px-3 text-xs'>FIND DOCTORS</div>
        </section>
        </section>
    )
}

export default Home;