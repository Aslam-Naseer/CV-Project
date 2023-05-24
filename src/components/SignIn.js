import { Component } from "react";
import "../signin.css";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
    this.signOutUser = this.signOutUser.bind(this);
    this.isUserSigned = this.isUserSigned.bind(this);
  }

  isUserSigned = () => !!getAuth().currentUser;

  signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  };

  signOutUser = () => {
    signOut(getAuth());
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
        {this.isUserSigned() ? getAuth().currentUser.displayName : ""}{" "}
        {this.isUserSigned() ? this.signOutBtn : this.signInBtn}
      </div>
    );
  }
}

export default SignIn;
