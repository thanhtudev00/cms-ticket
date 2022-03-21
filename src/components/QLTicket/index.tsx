
import React, { useState } from 'react';
import QLListModal from '../Modal/QLListTicketModal';
import TableListTicket from './TableListTicket';
import QLListHeader from './QLListTicketHeader';

import classes from './QLListTicket.module.css';

const QLTicket: React.FC = (props: any) => {

    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    };

    const hideModalHandler = () => {
        setShowModal(false);
    };

    return (
        <div className={classes.QLListTicket} >
            {showModal ? <QLListModal onHide={hideModalHandler} /> : ''}
            <QLListHeader onShow={showModalHandler} />
            <TableListTicket />
        </div>
    );
};

export default QLTicket;