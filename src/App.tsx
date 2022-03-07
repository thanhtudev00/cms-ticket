import { Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Chart from './Layout/Chart';
import DSTicket from './Layout/DSTicket';
import QLListModal from './Layout/Modal/QLListModal';
import QLTicket from './Layout/QLTicket';
import Card from './UI/Card';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Chart />}/>
        <Route path='/quanlyve' element={<QLTicket />} />
        <Route path='/doisoatve' element={<DSTicket />} />
      </Routes>
    </Layout>

  );
}

export default App;
