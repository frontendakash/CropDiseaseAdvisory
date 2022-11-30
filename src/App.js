import Product from './component/Product';
import Header from "./component/Header";
import Footer from './component/Footer';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewProdect from './component/ViewProdect';
function App() {
  return (
    <BrowserRouter>

      {/* Header component */}
      <div className='Herder-component'>
        <Header />
      </div>

      {/* Header component end*/}
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path="/ViewData/:id" element={<ViewProdect />} />
        <Route path='/card' element={<Product />} />
        <Route component={Error}></Route>
      </Routes>
      {/* Footer-Component */}
      <div className='footer-container'>
        <Footer />
      </div>
      {/* Footer Component end */}

    </BrowserRouter>
  );
}

export default App;
