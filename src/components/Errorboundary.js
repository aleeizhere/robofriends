import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haserror: false,
    };
  }

  /*
  this lifecycle hook checks whether the component had any errors or not in our case those errors are going
  to be of it's child. If there's any problem their, this hook will become active and will change the state
  of our component.
  */
  componentDidCatch(error, info) {
    this.setState({ haserror: true });
  }

  render() {
    if (this.state.haserror) {
      return <h1>Oops! This part of Website has broken. Try to reload!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
/*
Error boundary ka aik component banaya hai jissko hum card list pe apply krenge, 
cardlist ka component ErrorBoundary ka child hoga, aur issmain aisi logic likhenge ke agar child main 
koi error ajaye toh Iss component ki state main haserror ko true krdo aur agar woh true hai toh jiss component
(cardlist) pe yeh apply hua hai usski jagah h1 ko render krdo.

*/
