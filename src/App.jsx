import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './Menu/Menu';
import Carousel from './Carousel/Carousel';
import Sobre from './Sobre/Sobre';
import Contato from './Contato/Contato';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Menu />} />
          <Route path='/project' exact element={<Carousel />} />
          <Route path='/sobre' exact element={<Sobre />} />
          <Route path='/contato' exact element={<Contato />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
