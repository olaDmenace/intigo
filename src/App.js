import Homepage from './Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Marketplace from './pages/Marketplace';
import DimensionMarketPlace from './components/DimensionMarketPlace/DimensionMarketPlace'
import ProductPage from './pages/ProductPage';


/**
 * 
 * This is a ReactJS project built with Daisy UI 
 * DaisyUI is a library of Tailwind CSS framework.
 * Colors have been customised in the tailwing.config.js file
 * Below is a link of routes as they are used for navigation!
 * 
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Homepage />} />
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/dimensionMarketarketPlace' element={<DimensionMarketPlace />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
