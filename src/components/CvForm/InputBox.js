import { Component } from "react";

class InputBox extends Component {
  render() {
    const { name, num = "" } = this.props;
    // console.log(this.props.values);
    return (
      <input
        id={name + num}
        placeholder={name}
        onChange={this.props.handleChange}
        data-type={this.props.name}
        data-num={this.props.num}
        value={this.props.values[name]}
      />
    );
  }
}

export default InputBox;
