import {FiFilter} from 'react-icons/fi'
import {BsBoxArrowInDown} from 'react-icons/bs'

function Doctors(){
    return(
        <section>
        <div className="px-3 pt-3">
            <div className=" flex justify-between items-center w-[78vw]">
                <div className="text-sm flex justify-between items-center w-[35vw]">
                    <div className="bg-red-200 rounded-sm text-red-500 px-5 py-2 text-sm">All Doctors</div>
                    <div>Approved Doctors</div>
                    <div>Active Doctors</div>
                    <div>Inactive Doctors</div>
                </div>
                <div>
                    <div className="border-[1px] border-red-500 rounded-lg text-red-500 px-16 py-2 text-sm">Add Doctor</div>
                </div>
            </div>

            <div className="flex justify-between items-center w-[15vw] mt-3">
                <div className="text-sm bg-white px-2 py-2 w-[7vw] rounded-md flex justify-around items-center"> 
                <div><FiFilter/></div>
                <div>Filter</div>
                </div>
                <div className="text-sm bg-white px-2 py-2 w-[7vw] rounded-md flex justify-around items-center">
                <div><BsBoxArrowInDown/>
                </div><div>Export</div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Doctors