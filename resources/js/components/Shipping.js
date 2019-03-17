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
  };
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
export default connect(props)(Shipping);
