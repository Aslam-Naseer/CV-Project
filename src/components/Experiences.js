import { Component } from "react";
import Experience from "./Experience";

class Experiences extends Component {
  render() {
    return (
      <div className="experiences">
        <p>Experiences</p>
        <Experience num="1" />
        <button className="add-exp">Add</button>
      </div>
    );
  }
}

export default Experiences;
