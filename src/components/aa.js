import React, { Component } from "react";

class A extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.a}
          </a>
        </h1>
        {this.props.b}
      </header>
    );
  }
}

export default A;
