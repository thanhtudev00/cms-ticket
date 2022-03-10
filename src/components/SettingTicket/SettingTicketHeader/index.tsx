
import classes from './SettingTicketHeader.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const SettingTicketHeader: React.FC = () => {

    return (
        <div className={classes.settingHeader}>
            <h1>Danh sách gói vé</h1>
            <div className={classes.settingItem}>
                <div className={classes['settingItem__input']}>
                    <input type="text" placeholder='Tìm bằng số vé' />
                    <AiOutlineSearch style={{fontSize: '24px'}} />
                </div>
                <div className={classes['settingItem__btn']}>
                    <button>Xuất file(.csv)</button>
                    <button>Thêm gói vé</button>
                </div>
            </div>
        </div>
    );
};

export default SettingTicketHeader;