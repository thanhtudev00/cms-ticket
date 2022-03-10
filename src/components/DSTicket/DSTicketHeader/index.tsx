import { AiOutlineSearch } from 'react-icons/ai';

import classes from './DSTicketHeader.module.css';

const DSTicketHeader: React.FC = () => {

    return (
        <div className={classes.dsListTitle}>
            <h1>Đối soát vé</h1>
            <div className={classes.dsListAc}>
                <div className={classes.dsListInput}>
                    <input type="text" placeholder='Tìm bằng số vé' name="" id="" />
                    <AiOutlineSearch style={{ fontSize: '24px', color: '#1e0d03' }} />
                </div>
                <div className={classes.dsListBtn}>
                    <button>Chốt đối soát</button>
                </div>
            </div>
        </div>
    );
};

export default DSTicketHeader;