import { Component } from "react";
import InputBox from "./InputBox";

class Personal extends Component {
  render() {
    return (
      <div className="personal-info">
        <p>Personal Information</p>
        <InputBox id="name" />
        <InputBox id="title" />
        <InputBox id="phone" />
        <InputBox id="mail" />
        <InputBox id="place" />
        <textarea id="descr"></textarea>
      </div>
    );
  }
}

export default Personal;
