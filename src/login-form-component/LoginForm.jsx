import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Icon, Input, Button, Message, Layout,
} from 'antd';
import '../PageWrapper.scss';
import './LoginForm.scss';
import { CommentHeader } from '../PageHeader';

const { Content } = Layout;
const { Password } = Input;

const RULES = {
  usernameRequired: { required: true, message: 'Please input your username!' },
  passwordRequired: { required: true, message: 'Please input your Password!' },
  confirmPasswordRequired: { required: true, message: 'Please confirm your Password!' },
  haveSpecialChar: { pattern: /([!@#$%^&*(),.?":{}|<>]){1}/ },
  haveNumber: { pattern: /([0-9]){1}/ },
  haveLowerCase: { pattern: /([a-z]){1}/ },
  haveUpperCase: { pattern: /([A-Z]){1}/ },
  minLength8: { min: 8 },
  // eslint-disable-next-line max-len
  passCriteriaMessage: 'Passwords must be at least 8 characters long and contain a minimum of: 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character (i.e. ! # & ?).',
};

export class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err) => {
      if (!err) {
        Message.success('Success!');
      }
    });
  };


  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validatePassword = (rule, value, callback) => {
    const currentPass = value || '';
    const isCriteriaMet = RULES.minLength8.min <= currentPass.length
      && RULES.haveNumber.pattern.test(currentPass)
      && RULES.haveSpecialChar.pattern.test(currentPass)
      && RULES.haveUpperCase.pattern.test(currentPass)
      && RULES.haveLowerCase.pattern.test(currentPass);
    if (!isCriteriaMet) {
      callback(RULES.passCriteriaMessage);
    } else { callback(); }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="login-form">
        <Layout className="page-layout">
          <CommentHeader currentPage="login" />
          <Content className="content-layout">
            <div className="div-layout login-wrapper">
              <h1>Register</h1>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [RULES.usernameRequired],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                    />,
                  )}
                </Form.Item>
                <Form.Item hasFeedback>
                  {getFieldDecorator('password', {
                    rules: [RULES.passwordRequired, { validator: this.validatePassword }],
                  })(
                    <Password
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item hasFeedback>
                  {getFieldDecorator('confirmPassword', {
                    rules: [RULES.confirmPasswordRequired, { validator: this.compareToFirstPassword }],
                  })(
                    <Password
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Confirm Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item className="align-right">
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.shape({
    validateFields: PropTypes.func.isRequired,
    getFieldValue: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
    getFieldError: PropTypes.func.isRequired,
    isFieldTouched: PropTypes.func.isRequired,
  }).isRequired,
};

export default Form.create()(LoginForm);
