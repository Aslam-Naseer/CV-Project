import { Component } from "react";
import InputBox from "./InputBox";

class Personal extends Component {
  render() {
    return (
      <div className="personal-info">
        <p>Personal Information</p>
        <InputBox name="name" handleChange={this.props.handleChange} />
        <InputBox name="title" handleChange={this.props.handleChange} />
        <InputBox name="phone" handleChange={this.props.handleChange} />
        <InputBox name="mail" handleChange={this.props.handleChange} />
        <InputBox name="place" handleChange={this.props.handleChange} />
        <textarea id="descr"></textarea>
      </div>
    );
  }
}

export default Personal;
