import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import { FormikErrors, withFormik, FormikProps } from "formik";
import { userValidationSchema } from "@abb/common";

interface FormValues {
  email: string;
  password: string;
}

interface RegisterViewProps {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

export class RegisterView extends Component<
  FormikProps<FormValues> & RegisterViewProps
> {
  render() {
    const {
      values,
      handleBlur,
      handleChange,
      handleSubmit,
      touched,
      errors
    } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        style={{ width: "300px", margin: "15rem auto", textAlign: "center" }}
      >
        <Form.Item
          help={touched.email && errors.email ? errors.email : ""}
          validateStatus={touched.email && errors.email ? "error" : undefined}
        >
          <Input
            name="email"
            type="email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          help={touched.password && errors.password ? errors.password : ""}
          validateStatus={
            touched.password && errors.password ? "error" : undefined
          }
        >
          <Input
            name="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item>
          <div>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </div>
          <div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </div>
          <div>
            <p>
              Or <a href="">Login now!</a>
            </p>
          </div>
        </Form.Item>
      </form>
    );
  }
}

export default withFormik<RegisterViewProps, FormValues>({
  validationSchema: userValidationSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values);

    if (errors) {
      setErrors(errors);
    }
  }
})(RegisterView);
