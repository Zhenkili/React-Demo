import React from 'react';

function Alpha() {
  return (
    <div className='alpha'>
      <h1>Alpha Page
        <LoginControl />
      </h1>
      
    </div>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleStr1Click = this.handleStr1Click.bind(this);
    this.handleStr2Click = this.handleStr2Click.bind(this);
    //initial the first view as Str 1
    this.state = {showingA: true};
  }

  // when click "show str 1"
  handleStr1Click() {
    this.setState({showingA: true});
  }

  // when click "show str 2"
  handleStr2Click() {
    this.setState({showingA: false});
  }

  render() {
    //get the showingA state
    const showingA = this.state.showingA;
    let button;

    // If str 1 is showing, let the button be "showing str 2"
    if (showingA == true) {
      button = <ShowBButton onClick={this.handleStr2Click} />;
    } else {
      // If str 2 is showing, let the button be "showing str 1"
      button = <ShowAButton onClick={this.handleStr1Click} />;
    }

    return (
      <div>
        {/* Greeting Component */}
        <Greeting showingA={showingA} />
        {/* button Component */}
        {button}
      </div>
    );
  }
}

//lable for Str 2
function ShowB(props) {
  return <h1>String 2 = "BBB"</h1>;
}

//lable for Str 1
function ShowA(props) {
  return <h1>String 1 = "AAA"</h1>;
}

//First view without any click
function Greeting(props) {
  const showingA = props.showingA;
  if (showingA==false) {
    return <ShowB />;
  }
  return <ShowA />;
}

function ShowBButton(props) {
  return (
    <button onClick={props.onClick}>
      Show String 2
    </button>
  );
}

function ShowAButton(props) {
  return (
    <button onClick={props.onClick}>
      Show String 1
    </button>
  );
}

export default Alpha;