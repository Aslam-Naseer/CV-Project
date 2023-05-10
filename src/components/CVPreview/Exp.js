import { Component } from "react";
import ExpItem from "./ExpItem";

class Exp extends Component {
  render() {
    let c = 0;
    const expDivs = [];
    this.props.exps.forEach((expItem) => {
      expDivs.push(<ExpItem exp={this.props.exps[c]} />);
      c += 1;
    });

    return (
      <div className="exps-preview">
        <p className="preview-para">Experiences</p>
        {expDivs}
      </div>
    );
  }
}

export default Exp;
