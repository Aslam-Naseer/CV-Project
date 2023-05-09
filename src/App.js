import { Component } from "react";
import CvForm from "./components/CvForm/CvForm";
import Header from "./components/CvForm/header";
import "./style.css";
import statesEg from "./emptyState";

class App extends Component {
  constructor() {
    super();

    this.state = { cv: statesEg.emptyState };
    this.addExperience = this.addExperience.bind(this);
    this.delExperience = this.delExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.delEducation = this.delEducation.bind(this);
    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);

    this.showCv = this.showCv.bind(this);
    this.loadEg = this.loadEg.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  addExperience() {
    this.setState({
      cv: {
        ...this.state.cv,
        experience: [...this.state.cv.experience, {}],
      },
    });
  }

  delExperience(e) {
    const n = e.target.dataset.num;
    const arr = [...this.state.cv.experience];
    arr.splice(n, 1);

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

  delEducation(e) {
    const n = e.target.dataset.num;
    const arr = [...this.state.cv.education];
    arr.splice(n, 1);

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

    arr[num][id] = text;
    this.setState({
      cv: {
        ...this.state.cv,
        experience: arr,
      },
    });
  }

  handleChangeEducation(e) {
    const id = e.target.dataset.type;
    const num = e.target.dataset.num;
    const text = e.target.value;

    const arr = [...this.state.cv.education];

    arr[num][id] = text;
    this.setState({
      cv: {
        ...this.state.cv,
        education: arr,
      },
    });
  }

  showCv() {
    console.log(this.state.cv);
  }

  loadEg() {
    this.setState({ cv: statesEg.exampleState });
  }

  resetForm() {
    this.setState({ cv: statesEg.emptyState });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <CvForm
          cv={this.state.cv}
          addExp={this.addExperience}
          delExp={this.delExperience}
          addEdu={this.addEducation}
          delEdu={this.delEducation}
          changePersonal={this.handleChangePersonal}
          changeExperience={this.handleChangeExperience}
          changeEducation={this.handleChangeEducation}
        />
        <button onClick={this.showCv}>Show</button>
        <button onClick={this.loadEg}>Load</button>
        <button onClick={this.resetForm}>Reset</button>
      </div>
    );
  }
}

export default App;
