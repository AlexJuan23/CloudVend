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
	render () {
		const snackButton =  withRouter(({ history }) => (
			<button onClick={() => { history.push('/') }}>
				Snack
			</button>
		)
	)
		return (
			<div className='shipping-container'>
			<div className='vendingmachine'>
				<p><a>Ship-O-Matic</a></p>
					{snackButton}
					<button>
						mystery
					</button>
			</div>
		</div>
		)
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
