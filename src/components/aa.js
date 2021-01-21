import React, { Component } from 'react';

class A extends Component {
  render(){
    return (
      <header>
        <h1><a href="/">{this.props.a}</a></h1>
        {this.props.b}
      </header>
    );
  }
}

export default A;