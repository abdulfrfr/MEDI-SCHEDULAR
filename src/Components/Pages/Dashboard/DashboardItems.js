import {HiUsers} from 'react-icons/hi'
import {BiTimeFive} from 'react-icons/bi'
import {TiUserAddOutline} from 'react-icons/ti'
import {BsCheckSquare} from 'react-icons/bs'


const DashboardItems = [
    {
        key: 1,
        icon: BiTimeFive,
        text: 'Total number of Applications made',
        number: '20,000+',
        num: '+55%',
        style:'text-red-500 font-bold text-xs',
        styles:'text-red-500 text-xl mb-3'
        
    },
    {
        key: 2,
        icon: HiUsers,
        text: 'Total number of Active patients',
        number: '7,000+',
        num: '+93%',
        style:'text-blue-500 font-bold text-xs',
        styles:'text-blue-500 text-xl mb-3'
    },
    {
        key: 3,
        icon: TiUserAddOutline,
        text: 'Total number of users',
        number: '45,000+',
        num: '+69%',
        style:'text-green-500 font-bold text-xs',
        styles:'text-green-500 text-xl mb-3'
    },
    {
        key: 4,
        icon: BsCheckSquare,
        text: 'Total number of Services rendered',
        number: '75,000+',
        num: '+55%',
        style:'text-orange-500 font-bold text-xs',
        styles:'text-orange-500 text-xl mb-3'
    },
]

export default DashboardItems