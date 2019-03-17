import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import Store from './redux';
window.store = Store
import VendingMachine from './VendingMachine';
import Shipping from './Shipping';
import Checkout from './Checkout';


const rootElement = document.getElementById('root')

class VendingControl extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/" exact component={VendingMachine} />
					<Route path="/shipping/:item" component={Shipping} />
          <Route path="/checkout" component={Checkout} />
				</div>
			</Router>
		)

	}
}

ReactDOM.render(
  <Provider store={ Store }>
      <VendingControl />
  </Provider>,
  rootElement);
