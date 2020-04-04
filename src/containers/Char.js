import React, {Component} from 'react';
import Character from '../components/Character';

class Char extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leaving: false,
    }
  }

  clickHandler = () => {
    const {end, index, reading, onClick} = this.props;
    this.setState({leaving: true});
    setTimeout(() => {
      onClick(index, reading, end);
    }, 310);
  }

  render() {
    const {id, char, reading} = this.props;

    return (
      <Character id={id} char={char} reading={reading} clickHandler={this.clickHandler} leaving={this.state.leaving}/>
    )
  }
}

export default Char;