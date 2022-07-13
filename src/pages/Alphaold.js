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

  render() { //logincontrol render
    //get the showingA state
    const flagA = this.state.showingA;
    let button;

    // If str 1 is showing, let the button be "showing str 2"
    if (flagA == true) {
      //button 变成 B按钮组件， 传一个onclick方法， 这个按钮触发handelstr2click方法（login control的方法）
      button = <ShowBButton onClick={this.handleStr2Click} />;
    } else {// If str 2 is showing, let the button be "showing str 1"
      button = <ShowAButton onClick={this.handleStr1Click} />;
    }

    return ( //longinControl的布局
      <div>
        <Greeting showingA={flagA} />
        {button}
      </div>
    );
  }
}

//showB组件
function ShowB(props) {
  return <h1>String 2 = "BBB"</h1>;
}

//showA组件
function ShowA(props) {
  return <h1>String 1 = "AAA"</h1>;
}

//First view without any click
//Greeting组件，被logincontrol调用
function Greeting(props) {
  const flag = props.showingA;
  if (flag==false) {
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