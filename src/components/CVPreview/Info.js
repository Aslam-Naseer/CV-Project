import { Component } from "react";

class Info extends Component {
  render() {
    const { pi } = this.props;
    return (
      <div className="info-preview">
        <div>
          <div>{pi.name}</div>
          <div>{pi.title}</div>
        </div>
        <div>
          <div>{pi.phone}</div>
          <div>{pi.mail}</div>
          <div>{pi.place}</div>
        </div>
        <div className="about-div">{pi.about}</div>
      </div>
    );
  }
}

export default Info;
