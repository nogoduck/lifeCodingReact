import React, { Component } from 'react';

class B extends Component {
  render(){
    var data = this.props.dt;
    var li = [];
    for(var i = 0; i < data.length; i++){
      li.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].a}</a></li>);
    }
    // var i = 0;
    // while(i < data.length){
    //   li.push(<li><a href={"/content/"+data[i].id}>{data[i].a}</a></li>);
    //   i = i + 1;
    // }
    return (
      <nav>
        <ul>
          <li><a href="1.html">Spa</a></li>
          <li><a href="2.html">HTML</a></li>
          <li><a href="3.html">Python</a></li>
        </ul>
      </nav>
    );
  }  
}

export default B;