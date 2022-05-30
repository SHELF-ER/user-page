import React from 'react';
import customertest from '../css/customertest.module.css';

class Customertest extends React.Component {
  render() {
	  return (
		  <div className="Customertest">
				<table>
					<tr>
						<CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
						<CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
					</tr>
				</table>
		  </div>
	  )
  }
}

class CustomerProfile extends React.Component {
  render() {
	  return (
		  <>
				<td>{this.props.id}</td>
				<td><img src={this.props.image} alt="이미지"/></td>
				<td>{this.props.name}</td>
		  </>
	  )
  }
}

class CustomerInfo extends React.Component {
  render() {
	  return (
		  <>
				<td>{this.props.birthday}</td>
				<td>{this.props.gender}</td>
				<td>{this.props.job}</td>
		  </>
	  )
  }
}

export default Customertest;