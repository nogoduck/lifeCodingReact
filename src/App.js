import React, { Component } from 'react';
import './App.css';
import A from './components/aa'; 
import B from './components/bb'; 
import C from './components/cc'; 


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome',
      subject:{a:'WEB', b:'World Wid Web!'},
      welcome:{a:'WELCOME', b:'my Favorite bike is yeti bike'},
      contents:[
        {id:1, a:'PIP', b:'PIP is python install tool'},
        {id:1, a:'Yeti', b:'Yeti is my favorite mtb'},
        {id:1, a:'Fox', b:'Fox is fox'}
      ]

    }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.a;
      _desc = this.state.welcome.b
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].a;
      _desc = this.state.contents[0].b;
    }
    return (
      <div className="App">
        {/* <A a={this.state.subject.a} b={this.state.subject.b}/> */}
        <header>
          <h1><a href="/" onClick={function(){
            alert('hi');
          }}>{this.state.subject.a}</a></h1>
          {this.state.subject.b}
      </header>

        <B dt={this.state.contents}/>
        <C a={_title} b={_desc}/>
      </div>
    );
  }
}

export default App;
