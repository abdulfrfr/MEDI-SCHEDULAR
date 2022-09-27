import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

function NextPages({changeDisplayFirst, changeDisplaySecond, show, getID, getMove, move, indx}){
    return(
        <section>
            <div className='flex justify-center items-center h-[10vh]'>
            <div className='flex justify-center items- p-4'>
                <div onClick={changeDisplayFirst} className='border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'><IoIosArrowBack/></div>
                
                <div onClick={()=> getID(move[indx.one].id)} className={move[indx.one].id === getMove ?'cursor-pointer border-[1px] border-red-500 bg-red-500 text-white rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2' : 'cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'}>{move[indx.one].num}</div>
                <div onClick={()=> getID(move[indx.two].id)} className={move[indx.two].id === getMove ?'cursor-pointer border-[1px] border-red-500 bg-red-500 text-white rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2' : 'cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'}>{move[indx.two].num}</div>
                
                <div className={show ? 'hidden' : 'cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'}>
                    <div className='flex justify-center items-center'>
                        <div className='mr-[2px] w-1 h-1 rounded-[50%] bg-gray-400'></div>
                        <div className='mr-[2px] w-1 h-1 rounded-[50%] bg-gray-400'></div>
                        <div className='mr-[2px] w-1 h-1 rounded-[50%] bg-gray-400'></div>
                    </div>
                </div>
            
                    <div onClick={()=> getID(move[indx.six].id)}  className={move[indx.six].id === getMove ?'cursor-pointer border-[1px] border-red-500 bg-red-500 text-white rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2' : 'cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'}>{move[indx.six].num}</div>
                    <div onClick={()=> getID(move[indx.seven].id)}  className={move[indx.seven].id === getMove ?'cursor-pointer border-[1px] border-red-500 bg-red-500 text-white rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2' : 'cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'}>{move[indx.seven].num}</div>
                
                <div onClick={changeDisplaySecond} className='cursor-pointer border-[1px] border-gray-300 rounded-[50%] p-2 w-9 h-9 flex justify-center items-center mr-2'><IoIosArrowForward /></div>
            </div>
            </div>
        </section>
    )
}

export default NextPages