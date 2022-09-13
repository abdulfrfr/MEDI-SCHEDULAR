import {TbLayoutDashboard} from 'react-icons/tb';
import {BiEnvelope, BiUser, BiTimeFive} from 'react-icons/bi';
import {FaUsers} from 'react-icons/fa';
import {FiSettings} from 'react-icons/fi';
import {MdOutlineDirectionsWalk} from 'react-icons/md';
import Dashboard from '../Pages/Dashboard/Dashboard'
import Messages from '../Pages/Messages/Messages'
import UserManagement from '../Pages/UserManagement'
import Services from '../Pages/Services'
import Doctors from '../Pages/Doctors'
import Appointments from '../Pages/Appointments'
import Settings from '../Pages/Settings'


const NavItems = [
    {
        key: 1,
        icon: TbLayoutDashboard, 
        text:'Dashboard',
        page: Dashboard
    },
    
    {
        key: 2,
        icon: BiEnvelope, 
        text:'Inbox',
        page: Messages
    },
    {
        key: 3,
        icon: FaUsers, 
        text:'User Management',
        page: UserManagement
    },
    {
        key: 4,
        icon: MdOutlineDirectionsWalk, 
        text:'Services',
        page: Services
    },
    {
        key: 5,
        icon: BiUser, 
        text:'Doctors',
        page: Doctors
    },
    {
        key: 6,
        icon: BiTimeFive, 
        text:'Appointments',
        page: Appointments
    },
    {
        key: 7,
        icon: FiSettings, 
        text:'Settings',
        page: Settings
    },
    
]

export default NavItems