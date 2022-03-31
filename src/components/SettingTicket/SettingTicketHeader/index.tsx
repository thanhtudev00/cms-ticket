
import classes from './SettingTicketHeader.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import AddTicketModal from '../../Modal/AddTicketModal';

const SettingTicketHeader = (props: any) => {

    const [addTicket, setAddTicket] = useState(false);

    const showAddTicketHandler = () => {
        setAddTicket(true);
    };

    const hideAddTicketHandler = () => {
        setAddTicket(false);
    };

    return (
        <div className={classes.settingHeader}>
            {addTicket && <AddTicketModal onCacel={hideAddTicketHandler} />}
            <h1>Danh sách gói vé</h1>
            <div className={classes.settingItem}>
                <div className={classes['settingItem__input']}>
                    <input type="text" placeholder='Tìm bằng số vé' />
                    <AiOutlineSearch style={{ fontSize: '24px' }} />
                </div>
                <div className={classes['settingItem__btn']}>
                    <button>Xuất file(.csv)</button>
                    <button onClick={showAddTicketHandler}>Thêm gói vé</button>
                </div>
            </div>
        </div>
    );
};

export default SettingTicketHeader;