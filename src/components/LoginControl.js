import React, { Component } from 'react'

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      //initial the first view as Str 1
      this.state = {showingA: true};
    }
  
    // change showing A
    handleClick() {
      const showingA = this.state.showingA
      this.setState({showingA: !showingA});
    }
  
    //logincontrol rendering
    render() {
      //get the showingA state
      const flagA = this.state.showingA;
      let button;
      let num
      let str
      if (flagA) {
        num = '1';
        str = 'AAA';
      }else {
        num = '2';
        str = 'BBB';
      }
  
      // If str 1 is showing, let the button be "showing str 2"
      button = <button onClick={this.handleClick}> String {num}</button>;
      
      //how the logincontrol looks like
      return (
        <div>
          <h1>String {num} = {str}</h1>
          {button}
        </div>
      );
    }
  }  

export default LoginControl