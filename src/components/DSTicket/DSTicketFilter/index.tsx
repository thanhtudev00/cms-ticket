
import classes from './DSTicketFilter.module.css';

const DSTicketFilter: React.FC = () => {

    return (
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
    );
};

export default DSTicketFilter;