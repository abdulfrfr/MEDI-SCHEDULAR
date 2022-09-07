import {TbLayoutDashboard} from 'react-icons/tb';
import {BiEnvelope, BiUser, BiTimeFive} from 'react-icons/bi';
import {FaUsers} from 'react-icons/fa';
import {FiSettings} from 'react-icons/fi';
import {MdOutlineDirectionsWalk} from 'react-icons/md';


const NavItems = [
    {
        key: 1,
        icon: TbLayoutDashboard, 
        text:'Dashboard'
    },
    
    {
        key: 2,
        icon: BiEnvelope, 
        text:'Messages'
    },
    {
        key: 3,
        icon: FaUsers, 
        text:'User Management'
    },
    {
        key: 4,
        icon: MdOutlineDirectionsWalk, 
        text:'Services'
    },
    {
        key: 5,
        icon: BiUser, 
        text:'Doctors'
    },
    {
        key: 6,
        icon: BiTimeFive, 
        text:'Appointments'
    },
    {
        key: 7,
        icon: FiSettings, 
        text:'Settings'
    },
    
]

export default NavItems