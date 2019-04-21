import React from 'react'
import {connect, Provider} from 'react-redux';
import Store from './redux';
window.store = Store


const props = store => {
  return {
      disabled: store.FormStore.disabled,
      letter: store.FormStore.letter,
      number: store.FormStore.number,
  };
};

class NumberPad extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value, e) {


    if(['A', 'B', 'C', 'D'].includes(value)) {
      store.dispatch({
          type: 'SET_DISABLED',
          data: 2
      });
      store.dispatch({
          type: 'SET_LETTER',
          data: value
      });
    }
    else {
      store.dispatch({
          type: 'SET_DISABLED',
          data: 3
      });
      store.dispatch({
          type: 'SET_NUMBER',
          data: value
      });
    }
  }

	render () {
  let  letters  = ['A', 'B', 'C', 'D'];
  letters  =  letters.map((value, index) => {
  return (<span
            key={index}
            onClick={(e) => this.handleClick(value, e)}
            className={this.props.disabled < 2 ? "" : "disabled"}
          >
            {value}
          </span>)
  });
  let  numbers  = ['1', '2', '3', '4'];
  numbers  =  numbers.map((value, index) => {
  return (<span
            key={index}
            onClick={(e) => this.handleClick(value, e)}
            className={this.props.disabled != 2 ? "disabled" : ""}
          >
            {value}
          </span>)
});
    return (
      <div className="numpad">
        <div className="current-input">{this.props.letter}{this.props.number}</div>
        <div className="letterbox">
          <div className="letterbox-inner">
          {letters}
          </div>
        </div>
        <div className="numberbox">
          <div className="numberbox-inner">
          {numbers}
        </div>
      </div>
    </div>
    )
  }
}

export default connect(props)(NumberPad);
