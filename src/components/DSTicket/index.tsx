

import classes from './DSTicket.module.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import TableDSTicket from './TableDSTicket';
import DSTicketHeader from './DSTicketHeader';
import DSTicketFilter from './DSTicketFilter';

const DSTicket = () => {

    return (
        <div className={classes.dsBox}>
            <div className={classes.dsList}>
                <DSTicketHeader />
                <TableDSTicket />
            </div>
            <DSTicketFilter />
        </div>
    );
};

export default DSTicket;