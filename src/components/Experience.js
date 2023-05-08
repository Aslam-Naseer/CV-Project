import { Component } from "react";
import InputBox from "./InputBox";

class Experience extends Component {
  render() {
    const { num } = this.props;
    return (
      <div className="experience">
        <InputBox id={"Position-" + num} />
        <InputBox id={"Company-" + num} />
        <InputBox id={"City-" + num} />
        <InputBox id={"From-" + num} />
        <InputBox id={"To-" + num} />
        <button className="delete-exp">Delete</button>
      </div>
    );
  }
}

export default Experience;
