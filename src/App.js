import { Component } from "react";
import CvForm from "./components/CvForm/CvForm";
import Header from "./components/header";
import "./style.css";
import statesEg from "./emptyState";
import CvPreview from "./components/CVPreview/CvPreview";

import firestore from "./firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

class App extends Component {
  constructor() {
    super();

    this.state = { cv: statesEg.exampleState };
    this.addExperience = this.addExperience.bind(this);
    this.delExperience = this.delExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.delEducation = this.delEducation.bind(this);
    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);

    this.saveCv = this.saveCv.bind(this);
    this.loadCv = this.loadCv.bind(this);
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

  saveCv() {
    firestore.upload(this.state.cv);
  }

  async loadCv() {
    const cv = await firestore.download();
    this.setState({ cv });
  }

  resetForm() {
    this.setState({ cv: statesEg.emptyState });
  }

  componentDidMount() {
    onAuthStateChanged(getAuth(), this.loadCv);
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
          saveCv={this.saveCv}
          loadCv={this.loadCv}
          resetForm={this.resetForm}
        />
        <CvPreview cv={this.state.cv} />
      </div>
    );
  }
}

export default App;
