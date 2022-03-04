import { Fragment } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import classes from './layout.module.css';



const Layout = (props: any) => {

    return (
        <Fragment>
            <Header />
            <div className={classes.layout}>
                <div className={classes.sidebarmain}>
                    <Sidebar />

                </div>
                <main>{props.children}</main>
            </div>
        </Fragment>
    );
};

export default Layout;