
import classes from './QLTicket.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { useState } from 'react';
import QLListModal from '../Modal/QLListModal';
import { Card } from 'antd';

const QLTicket = () => { 

    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => { 
        setShowModal(true);
    };

    const hindeModalHandler = () => { 
        setShowModal(false);
    };

    return (
        <div className='p-3' style={{ backgroundColor: '#ffff', borderRadius: '20px' }}>
            {showModal ? <Card /> : '' }
            {showModal ? <QLListModal onHiden={hindeModalHandler} /> : '' }
            <div className={classes.listTitle}>
                <h1>Danh sách vé</h1>
                <div className={classes.listAc}>
                    <div className={classes.listInput}>
                        <input type="text" placeholder='Tìm bằng số vé' />
                        <AiOutlineSearch style={{fontSize: '24px', color: '#1e0d03'}} />
                    </div>
                    <div className={classes.listFilter}>
                        <button onClick={showModalHandler}>
                            <BiFilterAlt style={{fontSize: '20px', marginRight: '5px'}} />
                            Lọc vé
                        </button>
                        <button>
                            Xuất file(.csv)
                        </button>
                    </div>
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Booking code</th>
                        <th scope="col">Số vé</th>
                        <th scope="col">Tình trạng sử dụng</th>
                        <th scope="col">Ngày sử dụng</th>
                        <th scope="col">Ngày xuất vé</th>
                        <th scope="col">Cổng check-in</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>AHGSFH</td>
                        <td>123456789</td>
                        <td>Đã sử dụng</td>
                        <td>14/12/2022</td>
                        <td>10/12/2022</td>
                        <td>Cổng 1</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>AHGSFH</td>
                        <td>123456789</td>
                        <td>Đã sử dụng</td>
                        <td>14/12/2022</td>
                        <td>10/12/2022</td>
                        <td>Cổng 1</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>AHGSFH</td>
                        <td>123456789</td>
                        <td>Đã sử dụng</td>
                        <td>14/12/2022</td>
                        <td>10/12/2022</td>
                        <td>Cổng 1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default QLTicket;