import { Component } from "react";

class FormButtons extends Component {
  render() {
    return (
      <div className="form-btns">
        <button onClick={this.props.showCv} className="show-btn">
          Show
        </button>
        <button onClick={this.props.loadEg} className="load-btn">
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
