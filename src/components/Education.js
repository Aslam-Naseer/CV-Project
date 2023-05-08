import { Component } from "react";
import InputBox from "./InputBox";

class Education extends Component {
  render() {
    const { num } = this.props;
    return (
      <div className="education">
        <InputBox id={"University-" + num} />
        <InputBox id={"City-" + num} />
        <InputBox id={"Dergree-" + num} />
        <InputBox id={"Subject-" + num} />
        <InputBox id={"From-" + num} />
        <InputBox id={"To-" + num} />
        <button className="del-btn">Delete</button>
      </div>
    );
  }
}

export default Education;
