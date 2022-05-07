
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import NavigationBar from './components/NavigationBar';

import ShipmentDetails from './pages/ShipmentDetails';
import './App.css';

function App() {
  return (
    <div className="App">

      <NavigationBar />
      <Routes >
        <Route path='/' exact element={<Home />} />
        <Route path='/ShipmentDetails/:shipmentId' exact element={<ShipmentDetails />} />
        <Route path='/*' exact element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
