import { FaRegEdit } from 'react-icons/fa';

const TableSettingTicket: React.FC = () => {
    return (
        <div className="mt-3">
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
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>AHGSFH</td>
                        <td>Gói gia đình</td>
                        <td>10/12/2022</td>
                        <td>14/12/2022</td>
                        <td>90.000VNĐ</td>
                        <td>360.000VNĐ</td>
                        <td>Đang áp dụng</td>
                        <td>
                            <FaRegEdit style={{ color: '#FF993C' }} />
                            <span>Cập nhập</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>AHGSFH</td>
                        <td>Gói gia đình</td>
                        <td>10/12/2022</td>
                        <td>14/12/2022</td>
                        <td>90.000VNĐ</td>
                        <td>360.000VNĐ</td>
                        <td>Đang áp dụng</td>
                        <td>
                            <FaRegEdit style={{ color: '#FF993C' }} />
                            <span>Cập nhập</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>AHGSFH</td>
                        <td>Gói gia đình</td>
                        <td>10/12/2022</td>
                        <td>14/12/2022</td>
                        <td>90.000VNĐ</td>
                        <td>360.000VNĐ</td>
                        <td>Đang áp dụng</td>
                        <td>
                            <FaRegEdit style={{ color: '#FF993C' }} />
                            <span>Cập nhập</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableSettingTicket;