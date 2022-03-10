
import classes from './SettingTicket.module.css';
import SettingTicketHeader from './SettingTicketHeader';
import TableSettingTicket from './TableSettingTicket';

const SettingTicket: React.FC = () => { 

    return (
        <div className={classes.settingTicket}>
            <SettingTicketHeader />
            <TableSettingTicket />
        </div>
    );
};

export default SettingTicket;