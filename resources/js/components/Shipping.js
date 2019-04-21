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
      <div className='shipping-container'>
        <div className='shipping-form'>
        <div class='title'>
          <h1>Shipping Form<span className="required">*</span></h1>
        </div>
        <div class="form-wrapper">
          <input
            type="text"
            placeholder="First Name"
            value={ this.props.first_name }
            onChange={ event => store.dispatch({
                type: 'SET_FIRST_NAME',
                data: event.target.value
            })
          }/>
          <input
            type="text"
            placeholder="Last Name"
            value={ this.props.last_name }
            onChange={ event => store.dispatch({
                type: 'SET_LAST_NAME',
                data: event.target.value
            })
          }/>
          <input
            type="email"
            placeholder="Email"
            value={ this.props.email }
            onChange={ event => store.dispatch({
                type: 'SET_EMAIL',
                data: event.target.value
            })
          }/>
          <input
            type="text"
            placeholder="Address"
            value={ this.props.address }
            onChange={ event => store.dispatch({
                type: 'SET_ADDRESS',
                data: event.target.value
            })
          }/>
          <input
            type="text"
            placeholder="City"
            value={ this.props.city }
            onChange={ event => store.dispatch({
                type: 'SET_CITY',
                data: event.target.value
            })
          }/>
          <input
            type="text"
            placeholder="state"
            value={ this.props.state }
            onChange={ event => store.dispatch({
                type: 'SET_STATE',
                data: event.target.value
            })
          }/>
          <input
            type="text"
            placeholder="Zipcode"
            value={ this.props.zipcode }
            onChange={ event => store.dispatch({
                type: 'SET_ZIPCODE',
                data: event.target.value
            })
          }/>
          <Link className="submit" to="/checkout">submit</Link>
          <p className ="required required-text">* All fields are required. Thank You.</p>
        </div>

        </div>
      </div>
    );
  }
}
export default connect(props)(Shipping);
