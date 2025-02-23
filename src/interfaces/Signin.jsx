import { Appbar } from "../components/Appbar";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import "./Signin.css";

export const Signin = () => {
  return (
    <div className="signin-page">
      <div className="appbar">
        <Appbar />
      </div>
      <div className="form-container">
        <div className="form-box">
          <div className="decorative-circle"></div>
          <Heading label="Sign In" />
          <SubHeading label="Access your account seamlessly" />
          <div className="input-group">
            <InputBox placeholder="e.g., rb@gmail.com" label="Email" />
            <InputBox
              placeholder="e.g., 12345678"
              label="Password"
              type="password"
            />
          </div>
          <div className="button-wrapper">
            <Button label="Sign In" />
          </div>
          <BottomWarning
            label="Don't have an account?"
            buttonText="Sign Up"
            to="/signup"
          />
        </div>
      </div>
    </div>
  );
};