
import firebase, { test } from "../../../api/Firebase";
import {
    collection,
    getDocs,
    doc,
} from 'firebase/firestore';
import { Ticket } from "../../../store/contant/TicketType";
import { useEffect, useState } from "react";

const TableListTicket = (props: any) => {

    const [ticketQL, setTicketQL] = useState<Ticket[] | null>(null);

    useEffect(() => {
        const getTicketQL = async () => {
            await test.get().then(
                (snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
                    const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
                    const ticketsQL = data as Ticket[];
                    setTicketQL(ticketsQL);
                }
            );
        };
        getTicketQL();
    }, []);
    if (ticketQL) {
        console.log(ticketQL.map(item => item));
    }

    return (
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
            {
                ticketQL?.map((item, index) => (
                    <tbody key={index}>
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{item.code}</td>
                            <td>{item.ticketNumber}</td>
                            <td style={{color: 'red'}}>{item.status}</td>
                            <td>{item.inDate}</td>
                            <td>{item.outDate}</td>
                            <td>{item.port}</td>
                        </tr>
                    </tbody>
                ))
            }

        </table>
    );
};

export default TableListTicket;