import { Component } from "react";

class ExpItem extends Component {
  render() {
    const { exp } = this.props;
    return (
      <div className="exp-item">
        <div>
          {exp.from}
          <span>{" - "}</span>
          {exp.to}
        </div>
        <div>
          <div>{exp.position}</div>
          <div>
            {exp.company}
            <span>{", "}</span>
            {exp.city}
          </div>
        </div>
      </div>
    );
  }
}

export default ExpItem;
