

import classes from './DSTicket.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';

const DSTicket = () => {

    return (
        <div className={classes.dsBox}>
            <div className={classes.dsList}>
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
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Số vé</th>
                            <th scope="col">Ngày sử dụng</th>
                            <th scope="col">Tên loại vé</th>
                            <th scope="col">Cổng check-in</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>123456789</td>
                            <td>14/12/2022</td>
                            <td>Vé cổng</td>
                            <td>Cổng 1</td>
                            <td>Chưa đối soát</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>123456789</td>
                            <td>14/12/2022</td>
                            <td>Vé cổng</td>
                            <td>Cổng 1</td>
                            <td>Chưa đối soát</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>123456789</td>
                            <td>14/12/2022</td>
                            <td>Vé cổng</td>
                            <td>Cổng 1</td>
                            <td>Chưa đối soát</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.dsListFilter}>
                <h1>Lọc vé</h1>
                <div className={classes.dsFilterStt}>
                    <div>
                        <p>Tình trạng đối soát</p>
                    </div>
                    <div className={classes.dsFilterSttRadio}>
                        <div>
                            <input type="radio" name="" id="radio" />
                            <span>Tất cả</span>
                        </div>
                        <div>
                            <input type="radio" name="" id="radio" />
                            <span>Đã đối soát</span>
                        </div>
                        <div>
                            <input type="radio" name="" id="radio" />
                            <span>Chưa đối soát</span>
                        </div>
                    </div>
                </div>
                <div className={classes.boxMain}>
                    <div>
                        <p>Loại vé</p>
                    </div>
                    <div>
                        <span>Vé cổng</span>
                    </div>
                </div>
                <div className={classes.boxMain}>
                    <div>
                        <p>Từ ngày</p>
                    </div>
                    <div>
                        <div>
                            <input type="date" />
                        </div>
                    </div>
                </div>
                <div className={classes.boxMain}>
                    <div>
                        <p>Đến ngày</p>
                    </div>
                    <div>
                        <div>
                            <input type="date" />
                        </div>
                    </div>
                </div>
                <div className={classes.boxMainBtn}>
                    <button>Lọc</button>
                </div>
            </div>
        </div>
    );
};

export default DSTicket;