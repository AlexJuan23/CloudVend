import React from 'react'
import {connect, Provider} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Store from './redux';
window.store = Store

const props = store => {
  return {
      disabled: store.FormStore.disabled,
      letter: store.FormStore.letter,
      number: store.FormStore.number,
			open_tray: store.FormStore.open_tray,
      show_can: store.FormStore.show_can,
  };
};


class Item extends React.Component {

	constructor(props) {
    super(props);
		this.inStock = this.inStock.bind(this);
    this.outOfStock = this.outOfStock.bind(this);
    this.state = {emptied: Math.random() >= 0.5};

  }

  outOfStock(row) {
    if (this.props.config.shelf + row == this.props.letter+this.props.number) {
      store.dispatch({
          type: 'SET_LETTER',
          data: ""
      });
      store.dispatch({
          type: 'SET_NUMBER',
          data: ""
      });
      store.dispatch({
          type: 'SET_DISABLED',
          data: 1
      });
    }
    return 'empty';
  }

	inStock(row) {
		if (this.props.config.shelf + row == this.props.letter+this.props.number) {
			setTimeout(function() {
				store.dispatch({
						type: 'SET_OPEN_TRAY',
						data: 'open'
				});
			}, 6000);
      setTimeout(function() {
        store.dispatch({
            type: 'SET_SHOW_CAN',
            data: true
        });
      }, 7000);
      let self = this;
      setTimeout(function() {
        self.props.history.push('/shipping/mystery');
      }, 10000);
			return "can drop-can-a";
	  }
		return "can";

	}

	render () {
    return (
        <div className="container" data-container={this.props.config.row}>
          <div
						data-can={this.props.config.shelf + this.props.config.row}
						className={ this.state.emptied ? this.inStock(this.props.config.row) : this.outOfStock(this.props.config.row)}
					>
          {this.state.emptied ? "" : "Empty"}
					</div>
          <div className="can-label">{this.state.emptied ? (this.props.config.shelf + this.props.config.row) : "out"}</div>
        </div>
    )
  }
}

export default connect(props)(withRouter(Item));
