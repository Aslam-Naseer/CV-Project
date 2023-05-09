import { Component } from "react";

class InputBox extends Component {
  render() {
    const { name, num = "" } = this.props;
    return (
      <input
        id={name + num}
        placeholder={name}
        onChange={this.props.handleChange}
        data-type={this.props.name}
        data-num={this.props.num}
      />
    );
  }
}

export default InputBox;
