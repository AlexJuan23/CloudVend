import React from 'react'
import ReactDOM from 'react-dom'
import {
     BrowserRouter as Router,
		withRouter,
    Route,
    Link
}from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import Store from './redux';
window.store = Store
import axios from 'axios';
axios.defaults.baseURL = window.baseUrl;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-Token'] = document.head.querySelector('meta[name="csrf-token"]').content;
window.axios = axios;

const rootElement = document.getElementById('root')
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
  };
}

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
class Shipping extends React.Component {

  constructor(props) {
    super(props);
    // Set item type.
    store.dispatch({
        type: 'SET_ITEM',
        data: props.match.params.item
    })
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.props)
    event.preventDefault();
  }

  render() {
    return (
      <div className='shipping-form'>
        <label>
          First Name:
          <input
            type="text"
            value={ this.props.first_name }
            onChange={ event => store.dispatch({
                type: 'SET_FIRST_NAME',
                data: event.target.value
            })
          }/>
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={ this.props.last_name }
            onChange={ event => store.dispatch({
                type: 'SET_LAST_NAME',
                data: event.target.value
            })
          }/>
        </label>
        <label>
        Email:
        <input
          type="text"
          value={ this.props.email }
          onChange={ event => store.dispatch({
              type: 'SET_EMAIL',
              data: event.target.value
          })
        }/>
        </label>
        <label>
          address:
          <input
            type="text"
            value={ this.props.address }
            onChange={ event => store.dispatch({
                type: 'SET_ADDRESS',
                data: event.target.value
            })
          }/>
        </label>
        <label>
          city:
          <input
            type="text"
            value={ this.props.city }
            onChange={ event => store.dispatch({
                type: 'SET_CITY',
                data: event.target.value
            })
          }/>
        </label>
        <label>
          state:
          <input
            type="text"
            value={ this.props.state }
            onChange={ event => store.dispatch({
                type: 'SET_STATE',
                data: event.target.value
            })
          }/>
        </label>
        <label>
          zipcode:
          <input
            type="text"
            value={ this.props.zipcode }
            onChange={ event => store.dispatch({
                type: 'SET_ZIPCODE',
                data: event.target.value
            })
          }/>
        </label>
        <Link to="/checkout">submit</Link>
      </div>
    );
  }
}
Shipping = connect(props)(Shipping)

class Checkout extends React.Component {

  constructor(props) {
    super(props);
    // Set price by item type.
    store.dispatch({
        type: 'SET_AMOUNT',
        data: 5.00
    })
    this.initBraintree();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initBraintree() {
    axios.get('/api/payment/client/token').then(response => {
    console.log(response.data.token)
      braintree.dropin.create({
        authorization: response.data.token,
        selector: '#bt-dropin',
        paypal: {
          flow: 'vault'
        }
      }, function (createErr, instance) {
        if (createErr) {
          console.log('Create Error', createErr);
          return;
        }
        const button = document.querySelector('#submit')
        button.addEventListener('click', function (event) {
          instance.requestPaymentMethod(function (err, payload) {
            if (err) {
              console.log('Request Payment Method Error', err);
              return;
            }

            // Add the nonce to the form and submit
            document.querySelector('#nonce').value = payload.nonce;
          //  form.submit();
          });
        });
      });

    });
  }

  handleSubmit(event) {
    console.log(this.props)
  }

  render() {
    return (
      <div className='checkout-form'>
        <p>Amount: {this.props.amount}</p>
          <input
            id = "amount"
            type="hidden"
            value={this.props.amount}
          />
          <input
            id = "nonce"
            type="hidden"
          />
        <div className="bt-drop-in-wrapper">
            <div id="bt-dropin"></div>
        </div>
        <button id='submit'>submit</button>
      </div>
    );
  }
}
Checkout = connect(props)(Checkout)

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
