import { Component } from "react";

class InputBox extends Component {
  render() {
    const { name, num = "" } = this.props;
    return <input id={name + num} placeholder={name} />;
  }
}

export default InputBox;
