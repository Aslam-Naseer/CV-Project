import { Component } from "react";
import Experience from "./Experience";

class Experiences extends Component {
  render() {
    return (
      <div className="experiences">
        <p>Experiences</p>
        <Experience num="1" />
        <button className="add-btn">Add</button>
      </div>
    );
  }
}

export default Experiences;
