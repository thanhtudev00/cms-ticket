import classes from './sidebar.module.css';
// import {Link} from 'react-router-dom';
import { BiHomeAlt } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineUnorderedList, AiOutlineSetting,  } from "react-icons/ai";
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
            title: 'Danh sách vé',
            path: './danhsachve',
            icon: <AiOutlineUnorderedList/>
        },
        {
            title: 'Cài đặt',
            path: '/caidat',
            icon: <AiOutlineSetting />,
        },
        {
            title: 'Gói dịch vụ',
            path: './goidichvu',
            icon: ''
        },
    ];

    return (
        <div className={classes.navbar}>
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
        </div>
    );
};

export default Sidebar;