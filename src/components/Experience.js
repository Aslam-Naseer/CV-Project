import { Component } from "react";
import InputBox from "./InputBox";

class Experience extends Component {
  render() {
    const { num } = this.props;
    return (
      <div className="experience">
        <InputBox
          name="Position"
          num={num}
          handleChange={this.props.handleChange}
        />
        <InputBox
          name="Company"
          num={num}
          handleChange={this.props.handleChange}
        />
        <InputBox
          name="City"
          num={num}
          handleChange={this.props.handleChange}
        />
        <InputBox
          name="From"
          num={num}
          handleChange={this.props.handleChange}
        />
        <InputBox name="To" num={num} handleChange={this.props.handleChange} />
        <button className="del-btn" onClick={this.props.delExp}>
          Delete
        </button>
      </div>
    );
  }
}

export default Experience;
