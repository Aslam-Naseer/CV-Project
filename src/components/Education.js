import { Component } from "react";
import InputBox from "./InputBox";

class Education extends Component {
  render() {
    const { num } = this.props;
    return (
      <div className="education">
        <InputBox
          name="University"
          num={num}
          handleChange={this.props.handleChange}
        />
        <InputBox
          name="City"
          num={num}
          handleChange={this.props.handleChange}
        />
        <InputBox
          name="Degree"
          num={num}
          handleChange={this.props.handleChange}
        />
        <InputBox
          name="Subject"
          num={num}
          handleChange={this.props.handleChange}
        />
        <InputBox
          name="From"
          num={num}
          handleChange={this.props.handleChange}
        />
        <InputBox name="To" num={num} handleChange={this.props.handleChange} />
        <button
          className="del-btn"
          onClick={this.props.delEdu}
          data-num={this.props.num}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Education;
