import classes from './header.module.css';
import { AiOutlineSearch, AiOutlineMail, AiOutlineBell } from "react-icons/ai";
import user from './user.svg';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logoBox}>
                <div className={classes.logoImg}>
                    <Link to='/'>
                        <img src="./logo520.png" alt="" />
                    </Link>
                </div>
                <div className={classes.inputBox}>
                    <input type="text" placeholder='Search' />
                    <AiOutlineSearch />
                </div>
            </div>
            <div className={classes.notice}>
                <AiOutlineMail />
                <AiOutlineBell />
                <img src={user} alt="" />
            </div>
        </header>
    );
};

export default Header;