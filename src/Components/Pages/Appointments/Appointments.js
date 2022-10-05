import {useState, useEffect} from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {BsChevronDown} from 'react-icons/bs'




function Appointments(){
const [days, setDays] = useState([])
const [paddingDays, setPaddingDays] = useState([])
const [currentDay, setCurrentDay] = useState(false)
const [numericDate, setNumericDate] = useState('')
const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const dayEvents = [{date: '10/12/2022', text: 'theres an event today'}, {date: '10/6/2022', text: 'another event'}]
const findEvent = (matchingDate)=> dayEvents.find((date, index)=> date.date === matchingDate)


const dt = new Date()
dt.setMonth(currentMonth)

const day = dt.getDate()
const month = dt.getMonth()
const year = dt.getFullYear()

//get the current month's string

const navMonth = new Date(year, month).toLocaleDateString('en-uk', {month: 'long'})

//to get the total amount of days in the current month
const totalDaysInMonth = new Date(year, month + 1, 0).getDate()

//to get the first week day in the current month
const firstDayOfMonthString = new Date(year, month, 1).toLocaleDateString('en-uk',{
    weekday: 'long',
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
})

const firstDayIndex = weekdays.indexOf(firstDayOfMonthString.split(', ')[0])

console.log(firstDayOfMonthString, firstDayIndex);


useEffect(()=>{
    //loop through to get the number of days in previous month that reflects on the week the current month starts in
const padding = []
const mainDays = []

for (let i = 1; i <= firstDayIndex; i++){
    padding.push(i)
}
for (let i = 1; i <= totalDaysInMonth; i++){
    const present = `${month + 1}/${i}/${year}`
    mainDays.push({
        value: i,
        event: findEvent(present)
    })
    
    console.log(findEvent(present));
}
    setPaddingDays(padding)
    setDays(mainDays)
}, [currentMonth])



console.log(days);


function nextMonth(){
    setCurrentMonth((prevValue)=> prevValue + 1)
}
function prevMonth(){
    setCurrentMonth((prevValue)=> prevValue - 1)
}

function whenDateIsClicked(val){
setNumericDate(`${month + 1}/${val}/${year}`)


}


    return(
        <section>
        <div className="pt-4 pl-4 pr-16 ">
        <div className="flex justify-between items-center text-sm">
            <div className='flex justify-start items-center w-[15vw]'>
                <div className='mr-2 w-[10vw]'>{navMonth} {year}</div>
                <div className='flex justify-center items-center'>
                    <div onClick={prevMonth} className='text-gray-500 bg-gray-300 p-1 rounded-md mr-1'><IoIosArrowBack/></div>
                    <div onClick={nextMonth} className='text-gray-500 bg-gray-300 p-1 rounded-md ml-1'><IoIosArrowForward/></div>
                </div>
            </div>
            <div className={month !== new Date().getMonth()? 'hidden' :"text-white bg-red-500 px-2 py-1 rounded-lg"}>Today</div>
            <div className="flex justify-start items-center">
                <div>Filter by</div>
                <div className="ml-2 border-[1px] border-gray-400 px-5 py-1 rounded-md flex justify-between items-center">
                    <div className='mr-1'>Month</div>
                    <div><BsChevronDown className='font-bold'/></div>
                </div>
            </div>
        </div>
        <div className='mt-2 bg-white h-[78vh] w-[74vw] p-2'>
            <div className='grid grid-cols-7 justify-between items-center text-sm w-[72vw] m-auto '>
                {weekdays.map((day, index)=>(
                    <div className='h-[5vh] flex justify-center items-center mb-2'>{day}</div>
                ))}
            </div>
            <div className='grid grid-cols-7 justify-between items-center text-sm w-[72vw] m-auto '>
                {paddingDays.map((day, index)=>(
                    <div className='h-[14vh]'></div>
                ))}
                {days.map((day, index)=>(
                    <div onClick={()=>{whenDateIsClicked(day.value)}} className={day.value === new Date().getDate() && month === new Date().getMonth()  ? 'h-[14vh] box-border bg-blue-200 p-2 flex flex-col justify-between items-start border-blue-400 border-[1px]':'h-[14vh] box-border hover:bg-blue-200 p-2 flex flex-col justify-between items-start border-gray-400 border-[1px]'}>
                        <div>{day.value}</div>
                        <div className={day.event && 'bg-blue-300 p-2 text-start rounded-lg'}>{day.event && day.event.text}</div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </section>
    )
}

export default Appointments