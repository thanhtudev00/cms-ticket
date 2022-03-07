import { Fragment } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import classes from './layout.module.css';



const Layout = ({ children }: any) => {

    return (
        <Fragment>
            <Header />
            <div className="container-fluid">
                <div className="row content">
                    <div className=" p-0" style={{width: '17%'}}>
                        <Sidebar />
                    </div>
                    {/* <div className="p-3" style={{width: '83%', backgroundColor: '#ffffff', borderRadius: '20px'}}> */}
                    <div className="p-0" style={{width: '83%',}}>
                        {children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Layout;