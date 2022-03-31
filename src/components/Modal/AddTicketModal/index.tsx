import Modal from "../../../UI/Modal";
import classes from './AddTicketModal.module.css';


const AddTicketModal = (props: any) => {

    return (
        <Modal>
            <div className={classes.addBox}>
                <h1>Thêm gói vé</h1>
                <div className={classes.nameTicket}>
                    <label htmlFor="nameTicket">Tên gói vé <span style={{ color: '#FD5959' }}>*</span></label>
                    <input type="text" placeholder="Nhap ten goi ve" />
                </div>
                <div className={classes.dateCB}>
                    <div>
                        <label htmlFor="">Ngày áp dụng</label>
                        <div>
                            <input style={{ marginRight: '15px' }} type="date" />
                            <input type="time" />
                        </div>
                    </div>
                    <div style={{ marginLeft: '40px' }}>
                        <label htmlFor="">Ngày hết hạn</label>
                        <div>
                            <input style={{ marginRight: '15px' }} type="date" />
                            <input type="time" />
                        </div>
                    </div>
                </div>
                <div className={classes.useTicket}>
                    <p>Gía vé áp dụng</p>
                    <div>
                        <input type="checkbox" style={{ width: '30px' }} />
                        <label htmlFor=""> Vé lẻ(vnd/vé) với giá </label>
                        <input type="number" placeholder="gia ve" />
                        <label htmlFor=""> / vé </label>
                    </div>
                    <div>
                        <input type="checkbox" style={{ width: '30px' }} />
                        <label htmlFor=""> Combo vé giá </label>
                        <input type="number" placeholder="gia ve" />
                        <label htmlFor=""> / </label>
                        <input type="text" placeholder="gia ve" />
                        <label htmlFor=""> vé </label>
                    </div>
                </div>
                <div className={classes.status}>
                    <p>Tình trạng</p>
                    <select name="" id="">
                        <option value="1">Đang áp dụng</option>
                        <option value="1">Chưa áp dụng</option>
                        <option value="1">Hết hạn</option>
                    </select>
                </div>
                <span className={classes.note}><span style={{ color: '#FD5959' }}>*</span> là thông tin bắt buộc</span>
                <div className={classes.btn}>
                    <button style={{ marginRight: '20px', color: '#FF993C' }} onClick={props.onCacel}  >Hủy</button>
                    <button style={{ backgroundColor: '#FF993C', color: 'white' }} >Lưu</button>
                </div>
            </div>
        </Modal>
    );
};

export default AddTicketModal;