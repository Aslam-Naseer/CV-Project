import { Component } from "react";
import { ReactComponent as PhoneIcon } from "../../svg/phone-solid.svg";
import { ReactComponent as AddressIcon } from "../../svg/location-dot-solid.svg";
import { ReactComponent as EmailIcon } from "../../svg/envelope-solid.svg";

class Info extends Component {
  render() {
    const { pi } = this.props;
    return (
      <div className="info-preview">
        <div>
          <div className="info-name">{pi.name}</div>
          <div className="info-title">{pi.title}</div>
        </div>
        <div className="info-more">
          <div>
            <PhoneIcon className="icon" />
            {pi.phone}
          </div>
          <div>
            <EmailIcon className="icon" />
            {pi.mail}
          </div>
          <div>
            <AddressIcon className="icon" />
            {pi.place}
          </div>
        </div>
        <div className="about-div">{pi.about}</div>
      </div>
    );
  }
}

export default Info;
