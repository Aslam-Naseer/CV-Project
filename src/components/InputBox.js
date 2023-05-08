import { Component } from "react";

class InputBox extends Component {
  render() {
    return <input id={this.props.id} placeholder={this.props.id} />;
  }
}

export default InputBox;
