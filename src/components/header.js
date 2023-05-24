import React, { Component } from "react";
import SignIn from "./SignIn";

class Header extends Component {
  render() {
    return (
      <div className="header">
        CV PROJECT
        <SignIn />
      </div>
    );
  }
}

export default Header;
