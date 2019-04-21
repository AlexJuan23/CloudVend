import React from 'react'
import {connect, Provider} from 'react-redux';
import Store from './redux';
import Item from './Item';

window.store = Store

const props = store => {
  return {
      disabled: store.FormStore.disabled,
      letter: store.FormStore.letter,
      number: store.FormStore.number,
			open_tray: store.FormStore.open_tray,
  };
};


class Shelf extends React.Component {

	constructor(props) {
    super(props);
  }


	render () {

    return (
      <div className="shelf" data-shelf={this.props.shelf}>
        <Item config={{shelf : this.props.shelf, row : '1'}} />
        <Item config={{shelf : this.props.shelf, row : '2'}} />
        <Item config={{shelf : this.props.shelf, row : '3'}} />
        <Item config={{shelf : this.props.shelf, row : '4'}} />
      </div>
    )
  }
}

export default connect(props)(Shelf);
