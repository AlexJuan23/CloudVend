import React from 'react'
import ReactDOM from 'react-dom'
import {
     BrowserRouter as Router,
		withRouter,
    Route,
    Link
}from 'react-router-dom';

const rootElement = document.getElementById('root')

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
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          address:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          city:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          state:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          zipcode:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
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
 const element = <VendingControl />
 ReactDOM.render (
	 element,
	 rootElement
 )
