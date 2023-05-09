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
    this.delExperience = this.delExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.delEducation = this.delEducation.bind(this);
    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);

    this.showCv = this.showCv.bind(this);
  }

  addExperience() {
    this.setState({
      cv: {
        ...this.state.cv,
        experience: [...this.state.cv.experience, {}],
      },
    });
  }

  delExperience() {
    const arr = [...this.state.cv.experience];
    arr.pop();

    this.setState({
      cv: {
        ...this.state.cv,
        experience: arr,
      },
    });
  }

  addEducation() {
    this.setState({
      cv: {
        ...this.state.cv,
        education: [...this.state.cv.education, {}],
      },
    });
  }

  delEducation() {
    const arr = [...this.state.cv.education];
    arr.pop();

    this.setState({
      cv: {
        ...this.state.cv,
        education: arr,
      },
    });
  }

  handleChangePersonal(e) {
    const id = e.target.id;
    const text = e.target.value;

    this.setState({
      cv: {
        ...this.state.cv,
        personalInfo: {
          ...this.state.cv.personalInfo,
          [id]: text,
        },
      },
    });
  }

  handleChangeExperience(e) {
    const id = e.target.dataset.type;
    const num = e.target.dataset.num;
    const text = e.target.value;

    const arr = [...this.state.cv.experience];

    // console.log({ id, num, text, arr });
    arr[num][id] = text;
    this.setState({
      cv: {
        ...this.state.cv,
        experience: arr,
      },
    });
  }

  showCv() {
    console.log(this.state.cv);
  }

  render() {
    return (
      <div>
        <Header />
        <CvForm
          cv={this.state.cv}
          addExp={this.addExperience}
          delExp={this.delExperience}
          addEdu={this.addEducation}
          delEdu={this.delEducation}
          changePersonal={this.handleChangePersonal}
          changeExperience={this.handleChangeExperience}
        />
        <button onClick={this.showCv}>Show</button>
      </div>
    );
  }
}

export default App;
