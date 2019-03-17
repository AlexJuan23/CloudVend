import React from 'react'
import {Link} from 'react-router-dom';

class VendingMachine extends React.Component {
	render () {
		return (
			<div className='container'>
			<div className='vendingmachine'>
				<p className="title"><a>Vend-O-Matic</a></p>
        <Link className='item' to="/shipping/snack">Snack</Link>
        <Link className='item' to="/shipping/mystery">mystery</Link>
			</div>
		</div>
		)
	}
}
export default VendingMachine;
