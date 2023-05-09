import { Component } from "react";
import Experience from "./Experience";

class Experiences extends Component {
  render() {
    let c = 0;
    const expDivs = [];
    this.props.exps.forEach((expItem) => {
      c += 1;
      expDivs.push(<Experience num={c} delExp={this.props.delExp} />);
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
