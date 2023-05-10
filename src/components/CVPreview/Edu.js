import { Component } from "react";
import EduItem from "./EduItem";

class Edu extends Component {
  render() {
    let c = 0;
    const eduDivs = [];
    this.props.edus.forEach((item) => {
      eduDivs.push(<EduItem edu={this.props.edus[c]} key={"edu" + c} />);
      c += 1;
    });

    return (
      <div className="edu-preview">
        <p className="preview-para">Education</p>
        {eduDivs}
      </div>
    );
  }
}

export default Edu;
