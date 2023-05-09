import { Component } from "react";
import Experience from "./Experience";

class Experiences extends Component {
  render() {
    let c = 0;
    const expDivs = [];
    this.props.exps.forEach((expItem) => {
      expDivs.push(
        <Experience
          num={c}
          delExp={this.props.delExp}
          handleChange={this.props.handleChange}
          values={this.props.exps[c]}
        />
      );
      c += 1;
    });

    return (
      <div className="experiences">
        <p>Experiences</p>
        {expDivs}
        <button className="add-btn" onClick={this.props.addExp}>
          Add
        </button>
      </div>
    );
  }
}

export default Experiences;