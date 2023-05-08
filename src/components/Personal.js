import { Component } from "react";
import InputBox from "./InputBox";

class Personal extends Component {
  render() {
    return (
      <div className="personal-info">
        <p>Personal Information</p>
        <InputBox name="name" />
        <InputBox name="title" />
        <InputBox name="phone" />
        <InputBox name="mail" />
        <InputBox name="place" />
        <textarea id="descr"></textarea>
      </div>
    );
  }
}

export default Personal;
