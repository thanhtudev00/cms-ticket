import { Route, Routes } from "react-router-dom";
import Chart from "../components/ChartMain";
import DSTicket from "../components/DSTicket";
import QLTicket from "../components/QLTicket";
import SettingTicket from "../components/SettingTicket";
import Layout from "../Layout";


const Irouter = () => {

    return (
        <Layout >
            <Routes >
                <Route path="/" element={<Chart />} />
                <Route path="/quanlyve" element={<QLTicket />} />
                <Route path="/doisoatve" element={<DSTicket />} />
                <Route path="/caidat" element={<SettingTicket />} />
            </Routes>
        </Layout>
    );
};

export default Irouter;