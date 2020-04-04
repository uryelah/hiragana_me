import React, {Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      errorMessage: '',
    }
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error});
  }

  render() {
    if (this.hasError) {
      return <div>{this.state.errorMessage}</div>
    } else {
      return <div>{this.props.children}</div>
    }
  }
}

export default ErrorBoundary;