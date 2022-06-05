import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

class Find extends Component {
  id = 0
  state = {
    information: [
      {}
    ]
  }
  render() {
    document.body.style.backgroundColor = 'white';
    return (
      <div className="Find">
        <table>
          <thead>
            <tr>
              <th>1</th>
              <th>1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Find;
