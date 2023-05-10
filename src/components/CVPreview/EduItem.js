import { Component } from "react";

class EduItem extends Component {
  render() {
    const { edu } = this.props;
    return (
      <div className="edu-item">
        <div>
          {edu.from}
          <span>{" - "}</span>
          {edu.to}
        </div>
        <div>
          <div>{edu.subject}</div>
          <div className="edu-place">
            {edu.university}
            <span>{", "}</span>
            {edu.city}
          </div>
        </div>
      </div>
    );
  }
}

export default EduItem;
