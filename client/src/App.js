import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Borrow from './components/Borrow';
import Client from './components/Client';
import MyBorrow from './components/MyBorrow';
import Customer from './components/Customer';

class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const config = {headers: {'Accept':'application/json'}}
    const response = await fetch('/api/customers', config);
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/client" element={<Client />} />
          <Route path="/myborrow" element={<MyBorrow />} />
          <Route path="/customers" element={
            <div>
              <table>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>이미지</th>
                    <th>이름</th>
                    <th>생년월일</th>
                    <th>성별</th>
                    <th>직업</th>
                  </tr>
                </thead>
                <tbody>
                { this.state.customers ? this.state.customers.map(c => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />
                  );
                }) : <Customer/>
              }
              </tbody>
            </table>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
