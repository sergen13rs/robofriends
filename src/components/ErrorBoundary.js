import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, issue) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Some error was happened</h1>;
    }
    return this.props.children;
  };
}

export default ErrorBoundary;
