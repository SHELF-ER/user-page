import React from 'react';
import '../css/customertest.css';

class Customer extends React.Component {
  render() {
	  return (
		  <tr>
				<td>{this.props.id}</td>
				<td>{this.props.image}</td>
				<td>{this.props.name}</td>
				<td>{this.props.birthday}</td>
				<td>{this.props.gender}</td>
				<td>{this.props.job}</td>
		  </tr>
	  )
  }
}

export default Customer;