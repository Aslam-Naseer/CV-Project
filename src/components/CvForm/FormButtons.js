import { Component } from "react";

class FormButtons extends Component {
  render() {
    return (
      <div className="form-btns">
        <button onClick={this.props.showCv}>Show</button>
        <button onClick={this.props.loadEg}>Load</button>
        <button onClick={this.props.resetForm}>Reset</button>
      </div>
    );
  }
}

export default FormButtons;
