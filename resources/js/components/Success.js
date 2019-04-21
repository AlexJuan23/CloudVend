import React from 'react'
import {Link} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import Store from './redux';
window.store = Store

const props = store => {
  return {
      first_name: store.FormStore.first_name,
      last_name: store.FormStore.last_name,
      email: store.FormStore.email,
      address: store.FormStore.address,
      city: store.FormStore.city,
      state: store.FormStore.state,
      zipcode: store.FormStore.zipcode,
      item: store.FormStore.item,
      amount: store.FormStore.amount,
      nonce: store.FormStore.nonce,
			transaction: store.FormStore.transaction,

  };
}

class Success extends React.Component {
	render () {
		return (
			<div className='container'>
			<div className='success'>
				<p className="title">transaction successfully submitted</p>
				<p>transaction id: {this.props.transaction}</p>
			</div>
		</div>
		)
	}
}
export default connect(props)(Success);
