import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Headertest from './components/Headertest'
import Daytest from './components/Daytest'
import Daylisttest from './components/Daylisttest'
import EmptyPagetest from './components/EmptyPagetest';

function App() {
  return (
    <BrowserRouter>
      <Headertest />
        <Routes>
          <Route path="/" element={<Daylisttest />} />
          <Route path="/day/:day" element={<Daytest />} />
          <Route element={<EmptyPagetest />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
