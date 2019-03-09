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

const rootElement = document.getElementById('root')
const props = store => {
  return {
      first_name: store.FormStore.first_name,
      last_name: store.FormStore.last_name,
      email: store.FormStore.email,
      address: store.FormStore.address,
      address: store.FormStore.city,
      address: store.FormStore.state,
      address: store.FormStore.zipcode,

  };
}

class VendingMachine extends React.Component {
	render () {
		return (
			<div className='container'>
			<div className='vendingmachine'>
				<p><a>Vend-O-Matic</a></p>
					<button>
						Snack
					</button>
					<button >
						mystery
					</button>
			</div>
		</div>
		)
	}
}
class Shipping extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
Shipping = connect(props)(Shipping)

class VendingControl extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">vendingmachine</Link>
							</li>
							<li>
								<Link to="/shipping/">shipping</Link>
							</li>
						</ul>
					</nav>
					<Route path="/" exact component={VendingMachine} />
					<Route path="/shipping/" component={Shipping} />
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
