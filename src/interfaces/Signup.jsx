import { Appbar } from "../components/Appbar";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import "./Signup.css";

export const Signup = () => {
  return (
    <div className="signup-page">
      <div className="appbar">
        <Appbar />
      </div>
      <div className="form-container">
        <div className="form-box">
          <div className="decorative-circle"></div>
          <Heading label="Sign Up" />
          <SubHeading label="Enter your information to create an account" />
          <InputBox placeholder="e.g., Rahul" label="First Name" />
          <InputBox placeholder="e.g., Bhoi" label="Last Name" />
          <InputBox placeholder="e.g., rb@gmail.com" label="Email" />
          <InputBox
            placeholder="e.g., 12345678"
            label="Password"
            type="password"
          />
          <div className="button-wrapper">
            <Button label="Sign Up" />
          </div>
          <BottomWarning
            label="Already have an account?"
            buttonText="Sign In"
            to="/signin"
          />
        </div>
      </div>
    </div>
  );
};