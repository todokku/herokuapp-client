import React from "react";
import { connect } from "react-redux";
import { loginAttempt } from "../auth.action";
import LoginBase from "./login.base";
import { Row, Col } from "reactstrap";

import {
  FormContainer,
  TextBoxElement,
  ButtonElement
} from "../../../common/forms";

const LoginComponent = props => {
  const loginBase = LoginBase({ ...props });
  const { formSchema, elementSchema } = loginBase;
  return (
    <Row>
      <Col md="12">
        <div>
          <h2 className="title">Loging</h2>
          <FormContainer {...formSchema}>
            <TextBoxElement {...elementSchema.mobile} />
            <TextBoxElement {...elementSchema.password} />
            <ButtonElement {...elementSchema.btnSubmit} />
          </FormContainer>
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispathToProps = {
  loginAttempt
};

export default connect(mapStateToProps, mapDispathToProps)(LoginComponent);
