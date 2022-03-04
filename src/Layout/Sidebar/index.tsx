import classes from './sidebar.module.css';
// import {Link} from 'react-router-dom';
import { BiHomeAlt } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineUnorderedList, AiOutlineSetting } from "react-icons/ai";
import { FaTicketAlt, FaFileInvoiceDollar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const data = [
        {
            title: 'Trang chủ',
            path: '/',
            icon: <BiHomeAlt />,
        },
        {
            title: 'Quản lý vé',
            path: '/quanlyve',
            icon: <FaTicketAlt />,
        },
        {
            title: 'Đối soát vé',
            path: '/doisoatve',
            icon: <FaFileInvoiceDollar />,
        },
        {
            title: 'Danh sách sự kiện',
            path: '/dssukien',
            icon: <AiOutlineUnorderedList />,
        },
        {
            title: 'Quản lý thiết bị',
            path: '/quanlythietbi',
            icon: <FiMonitor />,
        },
        {
            title: 'Cài đặt',
            path: '/caidat',
            icon: <AiOutlineSetting />,
        },
    ];

    return (
        <nav className={classes.nav}>
            <ul>
                {data.map((item) => (
                    <li key={item.title}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;