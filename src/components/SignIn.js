import { Component } from "react";
import "../signin.css";

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { isSigned: false };

    this.signIn = this.signIn.bind(this);
    this.signOutUser = this.signOutUser.bind(this);
  }

  componentDidMount() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.setState({ isSigned: true });
      }
    });
  }
  signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
    this.setState({ isSigned: !!getAuth().currentUser });
  };

  signOutUser = () => {
    signOut(getAuth());
    this.setState({ isSigned: !!getAuth().currentUser });
  };

  signInBtn = (
    <button className="signin" onClick={this.signIn}>
      SignIn
    </button>
  );

  signOutBtn = (
    <button className="signin" onClick={this.signOutUser}>
      Sign Out
    </button>
  );

  render() {
    return (
      <div className="current-user">
        {this.state.isSigned ? getAuth().currentUser.displayName : ""}{" "}
        {this.state.isSigned ? this.signOutBtn : this.signInBtn}
      </div>
    );
  }
}

export default SignIn;
