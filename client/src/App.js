import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Borrow from './components/Borrow';
import Client from './components/Client';
import MyBorrow from './components/MyBorrow';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/client" element={<Client />} />
        <Route path="/myborrow" element={<MyBorrow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
