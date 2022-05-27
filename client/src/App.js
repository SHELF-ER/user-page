import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Borrow from './components/Borrow';
import Client from './components/Client';
import MyBorrow from './components/MyBorrow';
import Customertest from './components/Customertest';

class App extends Component {

  state = {
    customerstest: ""
  }

  componentDidMount() {
    
  }

  render() {
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
}

export default App;
