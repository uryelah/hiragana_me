import React, {Component} from 'react';

class Char extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leaving: false,
    }
  }

  render() {
    const {end, index, id, char, reading, onClick} = this.props;
    const clickHandler = () => {
      this.setState({leaving: true});
      setTimeout(() => {
        onClick(index, reading, end);
      }, 310);
    }
    return (
      <span id={id} onClick={clickHandler} className={this.state.leaving ? 'char char-out' : 'char'}>
        {char}
        <span className='reading'>{reading}</span>
      </span>
    )
  }
}

export default Char;