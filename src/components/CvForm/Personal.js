import { Component } from "react";
import InputBox from "./InputBox";

class Personal extends Component {
  render() {
    return (
      <div className="personal-info">
        <p>Personal Information</p>
        <InputBox name="name" {...this.props} />
        <InputBox name="title" {...this.props} />
        <InputBox name="phone" {...this.props} />
        <InputBox name="mail" {...this.props} />
        <InputBox name="place" {...this.props} />
        <textarea
          id="about"
          onChange={this.props.handleChange}
          value={this.props.values.about}
        ></textarea>
      </div>
    );
  }
}

export default Personal;
