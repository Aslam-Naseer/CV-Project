import { Component } from "react";
import CvForm from "./components/CvForm";
import Header from "./components/header";
import "./style.css";
import emptyState from "./emptyState";

class App extends Component {
  constructor() {
    super();

    this.state = { cv: emptyState };
    this.addExperience = this.addExperience.bind(this);
  }

  // changeInfo(id, text) {
  //   this.setState({
  //     ...this.state,
  //     personalInfo: {
  //       ...this.state.personalInfo,
  //       [id]: text,
  //     },
  //   });
  // }

  addExperience() {
    this.setState(
      {
        cv: {
          ...this.state.cv,
          experience: [...this.state.cv.experience, {}],
        },
      },
      console.log(this.state.cv.experience)
    );
  }

  render() {
    return (
      <div>
        <Header />
        <CvForm addExp={this.addExperience} cv={this.state.cv} />
      </div>
    );
  }
}

export default App;
