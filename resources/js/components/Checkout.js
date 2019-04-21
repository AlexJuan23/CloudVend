import React from 'react'
import {Link , withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import Store from './redux';
window.store = Store
import axios from 'axios';
axios.defaults.baseURL = window.baseUrl;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-Token'] = document.head.querySelector('meta[name="csrf-token"]').content;
window.axios = axios;


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
    let self = this;
    axios.get('/api/payment/client/token').then(response => {
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

            // Add the nonce to redux.
            store.dispatch({
                type: 'SET_NONCE',
                data: payload.nonce
            })
            self.handleSubmit()
          });
        });
      });

    });
  }

  handleSubmit() {
    axios.post('/api/payment/transaction', this.props).then(response => {
      store.dispatch({
          type: 'SET_TRANSACTION',
          data: response.data.transactionId
      })
      this.props.history.push('/Success')
    });
  }

  render() {
    return (
      <div className='checkout-form'>
        <p>Amount: {this.props.amount}</p>
        <div className="bt-drop-in-wrapper">
            <div id="bt-dropin"></div>
        </div>
        <button id='submit'>submit</button>
      </div>
    );
  }
}
withRouter(Checkout);
export default connect(props)(Checkout);
