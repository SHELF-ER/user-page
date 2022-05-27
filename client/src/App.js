import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Borrow from './components/Borrow';
import Client from './components/Client';
import MyBorrow from './components/MyBorrow';
import Customertest from './components/Customertest';

const customerstest = [{
  'id': '아이디',
  'image': '#',
  'name': '이름',
  'birthday': '생년월일',
  'gender': '성별',
  'job': '직업'
},
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '엄기기',
  'birthday': '010124',
  'gender': '여자',
  'job': '대학생'
}, 
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '엄니니',
  'birthday': '020224',
  'gender': '여자',
  'job': '대학생'
}, 
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '엄디디',
  'birthday': '030324',
  'gender': '여자',
  'job': '대학생'
}]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/client" element={<Client />} />
        <Route path="/myborrow" element={<MyBorrow />} />
        <Route path="/customertest" element={
          customerstest.map(c => {
            return (
              <Customertest
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
