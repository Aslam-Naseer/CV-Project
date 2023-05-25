import { Component } from "react";

class FormButtons extends Component {
  render() {
    return (
      <div className="form-btns">
        <button onClick={this.props.saveCv} className="show-btn">
          Save
        </button>
        <button onClick={this.props.loadCv} className="load-btn">
          Load
        </button>
        <button onClick={this.props.resetForm} className="reset-btn">
          Reset
        </button>
      </div>
    );
  }
}

export default FormButtons;
