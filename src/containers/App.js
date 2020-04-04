import React, {Component} from 'react';
import './App.css';
import hiragana from '../helpers/hiragana';
import Characters from '../components/Characters';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor() {
    super()
    this.state = {
      latin: '',
      hiragana: [],
    }
  }

  transliterate = (str) => {
    let subStr = '';
    let i = 0;
    let result = [];

    while (str[i]) {
      if (str[i] === ' ') {
        result.push([' ', ' ', i]);
        subStr = '';
        i += 1;
        continue;
      } else if (str[i] === 'n' && ['a', 'e', 'i', 'o', 'u'].includes(str[i + 1])) {
        result.push([hiragana[str[i] + str[i + 1]], str[i] + str[i + 1], i + 1]);
        i += 2;
        continue;
      } else if (!['a', 'e', 'i', 'o', 'u'].includes(str[i]) && !['a', 'e', 'i', 'o', 'u'].includes(str[i + 1])
      && str[i] === str[i + 1]) {
        result.push([hiragana['-'], str[i], i + 1]);
        i += 1;
        continue;
      }

      if (hiragana[subStr]) {
        result.push([hiragana[subStr], subStr, i]);
        subStr = '';
      }

      if (subStr.length < 3) {
        subStr += str[i];
        if (hiragana[subStr]) {
          result.push([hiragana[subStr], subStr, i]);
          subStr = '';
        }
      } else {
        subStr = str[i];
        if (hiragana[subStr]) {
          result.push([hiragana[subStr], subStr, i]);
          subStr = '';
        }
      }
      i += 1;
    }
    return result;
  }

  inputHandler = (e) => {
    this.setState({
      latin: e.target.value,
      hiragana: this.transliterate(e.target.value),
    });
  }

  clickHandler = (index, chars, end) => {
    const updatedHiragana = [...this.state.hiragana].filter((char, i) => i !== index);
    const updateStr = updatedHiragana.map(char => char[1]).join('');
    this.setState({
      latin: updateStr,
      hiragana: updatedHiragana,
    });
    console.log(updateStr, updatedHiragana);
  }

  render() {
    return (
      <ErrorBoundary>
      <div className="App">
        <main>
          <h1>Hiragana <span>transliterator</span></h1>
          <input className='cute-input' onChange={(e) => this.inputHandler(e)} type='text' value={this.state.latin}/>
          <Characters hiragana={this.state.hiragana} clickHandler={this.clickHandler} />
        </main>
      </div>
      </ErrorBoundary>
    );
  }
}

export default App;
