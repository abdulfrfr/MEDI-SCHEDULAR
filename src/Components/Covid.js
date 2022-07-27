import React from 'react';


function Covid(){
    return(
        <section>
        <section className='hidden md:block py-32 bg-auto md:bg-cover md:px-20 bg-[url("https://www.nm.org/-/media/Northwestern/Images/homepage-stories/Research_warmgray_release.png?la=en&hash=375F2348F331F02B87DD025A394FE31D10BADCFE")]'>
        <div>
            <h1 className='text-white text-4xl font-extrabold mb-4'>COVID-19 Resource Center</h1>
            <p className='w-2/4 mb-3 text-white'>Now more than ever, better medicine matters. Get the latest information on how COVID-19 may affect you, including 
            vaccination, testing, symptoms, treatment, safety and current visitor policies.</p>
            <button className='text-white bg-blue-700 py-3 px-3 '>COVID-19 RESOURCES CENTER</button>
        </div>
        </section>
        <section className='md:hidden'>
            <img className='bg-cover h-full' src='https://www.nm.org/-/media/Northwestern/Images/homepage-stories/Research_warmgray_release.png?la=en&hash=375F2348F331F02B87DD025A394FE31D10BADCFE' alt='covid-19'/>
            <div className='text-center py-10 px-3'>
            <h1 className='text-black text-xl font-bold mb-4'>COVID-19 Resource Center</h1>
            <p className='text-center mb-3 text-black'>Now more than ever, better medicine matters. Get the latest information on how COVID-19 may affect you, including 
            vaccination, testing, symptoms, treatment, safety and current visitor policies.</p>
            <button className='text-white bg-blue-700 py-2 px-2 text-sm '>COVID-19 RESOURCES CENTER</button>
        </div>
        </section>
        </section>
    )
}

export default Covid;