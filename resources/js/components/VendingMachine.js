import React from 'react'
import {Link} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import Shelf from './Shelf';
import NumberPad from './NumberPad'
import Store from './redux';
import Item from './Item';
window.store = Store

const props = store => {
  return {
			open_tray: store.FormStore.open_tray,
      letter: store.FormStore.letter,
      number: store.FormStore.number,
      show_can: store.FormStore.show_can,

  };
}


class VendingMachine extends React.Component {

  constructor(props) {
    super(props);
  }

	render () {

    let chosenItem;
    if(this.props.show_can) {
    chosenItem  =<div className='show-can' data-container={this.props.number}><div data-can={this.props.letter + this.props.number} className='can'></div></div>;
    }
		return (
			<div className="machine-container">
				<div className="machine">
					<div className="inner">
						<Shelf shelf='A' />
						<Shelf shelf='B' />
						<Shelf shelf='C' />
						<Shelf shelf='D' />
					</div>
					<div className="glass">
					</div>
					<div className="tray-inner">
					</div>
					<div className={"tray " + this.props.open_tray }>
					</div>
          {chosenItem}
					<NumberPad />
				</div>
			</div>
		)
	}
}
export default connect(props)(VendingMachine);
