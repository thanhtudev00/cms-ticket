import classes from './QLListTicketHeader.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import React from 'react';

const QLListHeader = (props:any) => {

    return (
        <div className={classes.listTitle}>
            <h1>Danh sách vé</h1>
            <div className={classes.listAc}>
                <div className={classes.listInput}>
                    <input type="text" placeholder='Tìm bằng số vé' />
                    <AiOutlineSearch style={{ fontSize: '24px', color: '#1e0d03' }} />
                </div>
                <div className={classes.listFilter}>
                    <button onClick={props.onShow}>
                        <BiFilterAlt style={{ fontSize: '20px', marginRight: '5px' }} />
                        Lọc vé
                    </button>
                    <button>
                        Xuất file(.csv)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QLListHeader;