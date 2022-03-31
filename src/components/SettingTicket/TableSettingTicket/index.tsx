import { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import firebase, { test2 } from "../../../api/Firebase";
import { ComboTicket } from '../../../store/contant/TicketType';
import UpdateTicketModal from '../../Modal/UpdateTicketModal';

const TableSettingTicket = (props: any) => {
    const [cbTicket, setCbTicket] = useState<ComboTicket[] | null>(null);
    const [isUpdateModal, setIsUpdateModal] = useState(false);

    const showUpdate = () => {
        setIsUpdateModal(true);
    };

    const hideUpdate = () => {
        setIsUpdateModal(false);
    };

    useEffect(() => {
        const getCbTickets = async () => {
            await test2.get().then(
                (snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
                    const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
                    const comboList = data as ComboTicket[];
                    setCbTicket(comboList);
                }
            );
        };
        getCbTickets();
    }, []);

    if (cbTicket) {
        console.log(cbTicket.map(item => item));
    }

    return (
        <div className="mt-3">
            {isUpdateModal && <UpdateTicketModal onCacel={hideUpdate} />}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã gói</th>
                        <th scope="col">Tên gói vé</th>
                        <th scope="col">Ngày áp dụng</th>
                        <th scope="col">Ngày hết hạn</th>
                        <th scope="col">Giá vé (VNĐ/vé)</th>
                        <th scope="col">Giá Combo(VNĐ/Combo)</th>
                        <th scope="col">Tình trạng</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {
                    cbTicket?.map((item, index) => (
                        <tbody key={index}>
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{item.codeCB}</td>
                                <td>{item.nameCB}</td>
                                <td>{item.inDateCB}</td>
                                <td>{item.outDateCB}</td>
                                <td>{item.priceTicket}</td>
                                <td>{item.priceCB}</td>
                                <td>{item.statusCB}</td>
                                <td onClick={showUpdate} style={{ color: '#FF993C' }}>
                                    <FaRegEdit  style={{ color: '#FF993C' }} />
                                    <span>Cập nhập</span>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    );
};

export default TableSettingTicket;