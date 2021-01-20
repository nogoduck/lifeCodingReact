import React, { Component } from 'react';

class C extends Component {
  render(){
    return (
      <article>
        {this.props.a}
        <p>{this.props.b}</p>
      </article>
    );
  }
}

export default C;