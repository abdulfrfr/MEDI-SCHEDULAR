import {Link} from 'react-router-dom'
import Logo from './Logo'

function Login(){

    

    return(
        <section className= ' bg-gray-200 h-screen'>
        <div className='ml-16'>
          <Logo />
        </div> 
        <div className=' w-full h-[90vh] flex justify-center items-center '>
        <div className='bg-white w-[25vw] h-[60vh] rounded-xl px-7'>
        <div className='mb-5'><Logo/></div>
        <hr className='w-[200px] mt-5'/>
        <h3 className='mt-5 font-bold text-xl'>Admin Login</h3>
        <div>
            <input type='text' placeholder='Email' className='outline-none border-2 border-gray-200 rounded-lg w-full mt-5 px-2 py-2 text-sm'/>
            <input type='password' placeholder='Password' className='outline-none border-2 border-gray-200 rounded-lg w-full mt-5 px-2 py-2 text-sm'/>

        </div>

        <Link to='/infos'><button  className='w-full bg-red-500 text-white py-2 mt-5'>Login</button></Link>
        
        
        <button className='text-red-500 mt-5 text-[12px]'>Forgotten Password?</button>
            
        </div>

        </div> 
        </section>
    )
}

export default Login