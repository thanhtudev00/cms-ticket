
import firebase, { test } from "../../../api/Firebase";
// import {
//     collection,
//     getDocs,
//     doc,
// } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { Ticket } from "../../../store/contant/TicketType";

const TableDSTicket = (props: any) => {

    const [ticketList, setTicketList] = useState<Ticket[] | null>(null);
    // const ticketListCollectionRef = collection(db, "tickets");


    useEffect(() => {
        const getTickets = async () => {
            await test.get().then(
                (snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
                    const data = snapshot.docs.map((doc) => ({ ...doc.data() }))
                    const ticketList = data as Ticket[]
                    setTicketList(ticketList)
                }
            );


        };
        getTickets();
    }, []);
    if (ticketList) {

        console.log(ticketList.map(item => item))
    }

    return (
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
            {
                ticketList?.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <th scope="row">1</th>
                            <td>{item.ticketNumber}</td>
                            <td>{item.inDate }</td>
                            <td>{item.type }</td>
                            <td>{ item.port}</td>
                            <td style={{ color: 'red' }}>Chưa đối soát</td>
                        </tr>

                    </tbody>
                ))


            }


        </table>
    );
};

export default TableDSTicket;