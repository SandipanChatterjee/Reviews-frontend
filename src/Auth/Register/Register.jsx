import { Field, Form, Formik } from "formik";
import React, { Component, Fragment } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import axios from "../../eaxios";
import Error from "../../Error/Error";
import ErrorModal from "../Error";
import { auth, logout } from "../../store/actions/auth";
import "./Register.css";
import { LoadingSpinner } from "../../utils";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
const initialValues = {
  email: "",
  password: "",
  cpassword: "",
  countryId: null,
  stateId: null,
  cityId: null,
  countryList: [],
  stateList: [],
  cityList: [],
  countryName: "",
  stateName: "",
  cityName: "",
};
const schema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  password: Yup.string()
    .min(6, "Password must be 6 characters or less")
    .required("Please enter password"),
  cpassword: Yup.string()
    .min(6, "Confirm password must be 6 characters or less")
    .required("Please enter Confirm password"),
});
const validateConfirmPassword = (values) => {
  let error;
  if (values.password !== values.cpassword) {
    error = "Password and Confirm password do not match";
  }
  return error;
};
const countryValidate = (values) => {
  let error;

  if (values.countryId === null || values.countryId === "") {
    error = "Please select country";
  }
  return error;
};
const stateValidate = (values) => {
  let error;

  if (values.stateId === null || values.stateId === "") {
    error = "Please select state";
  }
  return error;
};
/*const cityValidate = (values) => {
  let error;

  if (values.cityId === null || values.cityId === "") {
    error = "Please select city";
  }
  return error;
};*/
export class Register extends Component {
  errorMsg = null;
  state = {
    errorMessage: null,
    showErrorModal: false,
  };
  static getDerivedStateFromProps(props, state) {
    if (props.error !== state.errorMessage) {
      return {
        errorMessage: props.error,
        showErrorModal: true,
      };
    }
    return null;
  }
  closeModal = () => {
    this.setState({ showErrorModal: false, errorMessage: null }, () =>
      this.props.onLogout()
    );
  };
  handleSubmit = (values) => {
    const param = {
      email: values.email,
      password: values.password,
      confirmPassword: values.cpassword,
      country: values.countryName,
      state: values.stateName,
      city: values.cityName,
    };
    this.props.register(param, "register");
  };
  getCityList = async (id, setFieldValue) => {
    try {
      const cities = await axios.get(`api/v1/location/countries/state/${id}`);
      setFieldValue("cityList", cities.data.data);
    } catch (e) {
      this.errorMsg = e.message;
    }
  };
  getStates = async (id, setFieldValue) => {
    try {
      const states = await axios.get(`api/v1/location/countries/${id}`);
      setFieldValue("stateList", states.data.data);
    } catch (e) {
      this.errorMsg = e.message;
    }
  };
  getCountries = async () => {
    try {
      const countries = await axios.get(`api/v1/location/countries`);
      return countries.data.data;
    } catch (e) {
      this.errorMsg = e.message;
    }
  };
  async componentDidMount() {
    initialValues["countryList"] = await this.getCountries();
  }
  render() {
    const { errorMessage, showErrorModal } = this.state;
    const {
      loading,
      showRegisterModal,
      registerModalHandler,
      token,
    } = this.props;

    if (this.errorMsg !== null) {
      console.log("PRINT1");
      return <Error message={this.errorMsg} />;
    }
    if (errorMessage !== null) {
      console.log("PRINT2");
      return (
        <ErrorModal
          message={errorMessage}
          showModal={showErrorModal}
          closeModal={this.closeModal}
        />
      );
    }
    if (initialValues === {}) {
      console.log("PRINT3");
      return null;
    }
    if (loading) {
      console.log("PRINT4");
      return <LoadingSpinner />;
    }
    if (token) {
      console.log("PRINT5", token);
      return <Redirect to="/" />;
    }
    const customStyles = {
      content: {
        top: "10%",
        left: "25%",
        right: "auto",
        bottom: "auto",
        width: "50%",
        height: "40rem",
        borderRadius: "1rem",
      },
    };
    return (
      <div>
        <Modal
          isOpen={showRegisterModal}
          onRequestClose={registerModalHandler}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            style={customStyles}
            onSubmit={this.handleSubmit}
          >
            {({ values, handleChange, setFieldValue, errors, touched }) => (
              <Form>
                <div className="auth-heading">
                  <span>Register</span>
                </div>
                <div className="field-container">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="field"
                  />
                  {touched.email && errors.email ? (
                    <span className="error">{errors.email}</span>
                  ) : null}
                </div>
                <div className="field-container">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="field"
                  />
                  {touched.password && errors.password ? (
                    <span className="error">{errors.password}</span>
                  ) : null}
                </div>
                <div className="field-container">
                  <Field
                    name="cpassword"
                    type="password"
                    validate={() => validateConfirmPassword(values)}
                    placeholder="Confirm Password"
                    className="field"
                  />{" "}
                  {touched.cpassword && errors.cpassword ? (
                    <span className="error">{errors.cpassword}</span>
                  ) : null}
                </div>
                <div className="field-container">
                  <Field
                    name="countryId"
                    as="select"
                    className="field"
                    validate={() => countryValidate(values)}
                    onChange={(e) => {
                      handleChange(e);
                      setFieldValue(
                        "countryName",
                        e.target.options[e.target.selectedIndex].text
                      );
                      this.getStates(e.target.value, setFieldValue);
                    }}
                  >
                    <option value="">Select Country</option>
                    {values.countryList.length > 0
                      ? values.countryList.map((item, index) => {
                          return (
                            <option
                              value={item.id}
                              key={index}
                              className="field"
                            >
                              {item.name}
                            </option>
                          );
                        })
                      : null}
                  </Field>
                  {touched.countryId && errors.countryId ? (
                    <Fragment>
                      {/* {console.log("prnsdjkbksbdfdsfbk", errors)} */}
                      <p className="error">{errors.countryId}</p>
                    </Fragment>
                  ) : null}
                </div>
                <div className="field-container">
                  <Field
                    name="stateId"
                    as="select"
                    className="field"
                    validate={() => stateValidate(values)}
                    onChange={(e) => {
                      setFieldValue(
                        "stateName",
                        e.target.options[e.target.selectedIndex].text
                      );
                      this.getCityList(e.target.value, setFieldValue);
                      setFieldValue("stateId", e.target.value);
                    }}
                  >
                    <option value="">Select State</option>
                    {values.stateList.length > 0
                      ? values.stateList.map((item) => {
                          return (
                            <option value={item.id} className="field">
                              {item.name}
                            </option>
                          );
                        })
                      : null}
                  </Field>
                  {touched.stateId && errors.stateId && (
                    <span className="error">{errors.stateId}</span>
                  )}
                </div>
                <div className="field-container">
                  <Field
                    name="cityId"
                    as="select"
                    // validate={() => cityValidate(values)}
                    className="field"
                    onChange={(e) =>
                      setFieldValue(
                        "cityName",
                        e.target.options[e.target.selectedIndex].text
                      )
                    }
                  >
                    <option value="">Select City</option>
                    {values.cityList.length > 0
                      ? values.cityList.map((city) => {
                          return (
                            <option value={city.id} className="field">
                              {city.name}
                            </option>
                          );
                        })
                      : null}
                  </Field>
                  {touched.cityId && errors.cityId && (
                    <span className="error">{errors.cityId}</span>
                  )}
                </div>{" "}
                <div className="field-container submit-container">
                  <button className="submit" onClick={registerModalHandler}>
                    Cancel
                  </button>{" "}
                  <button type="submit" className="submit">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal>
      </div>
    );
  }
}
Register.defaultProps = {
  showRegisterModal: false,
  registerModalHandler: () => {},
};

const mapStateToProps = (state) => {
  return {
    loading: state.Auth.loading === true,
    error: state.Auth.error,
    token: state.Auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (data, type) => dispatch(auth(data, type)),
    onLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
