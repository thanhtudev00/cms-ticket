import { Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Chart from './Layout/Chart';
import QLList from './Layout/QLList';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Chart />}/>
        <Route path='/quanlyve' element={<QLList />} />
        {/* <Route path='' */}
      </Routes>
    </Layout>

  );
}

export default App;
