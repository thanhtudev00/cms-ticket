
import classes from './QLListModal.module.css';

const QLListModal = (props: any) => {

    return (
        <div className={classes.listModalBox}>
            <h1>Lọc vé</h1>
            <div className={classes.listModalDate}>
                <div>
                    <span>Từ ngày</span>
                    <input type="date" />
                </div>
                <div>
                    <span>Đến ngày</span>
                    <input type="date" name="" id="" />
                </div>
            </div>
            <div className={classes.listModalItemBox}>
                <p>Tình trạng sử dụng</p>
                <div>
                    <div>
                        <input type="radio" name="" id="" />
                        <span>Tất cả</span>
                    </div>
                    <div>
                        <input type="radio" name="" id="" />
                        <span>Đã sử dụng</span>
                    </div>
                    <div>
                        <input type="radio" name="" id="" />
                        <span>Chưa sử dụng</span>
                    </div>
                    <div>
                        <input type="radio" name="" id="" />
                        <span>Hết hạn</span>
                    </div>
                </div>
            </div>
            <div className={classes.listModalItemBox}>
                <p>Cổng check-in</p>
                <div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span>Tất cả</span>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span>Cổng 1</span>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span>Cổng 2</span>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span>Cổng 3</span>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span>Cổng 4</span>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span>Cổng 5</span>
                    </div>
                </div>
            </div>
            <div className={classes.filterBtn}>
                <button onClick={props.onHiden}>Lọc</button>
            </div>
        </div>
    );
};

export default QLListModal;