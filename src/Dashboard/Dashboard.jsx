import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "../eaxios";
import { logout } from "../store/actions/auth";
import { LoadingSpinner } from "../utils";
import "./Dashboard.css";
class Dashboard extends Component {
  _isMounted = false;
  state = {
    reviews: [],
    showRegisterModal: false,
    showLoginModal: false,
    showForgotPasswordModal: false,
    token: null,
  };

  forgotPasswordModalHandler = () => {
    this.setState({
      showForgotPasswordModal: false,
    });
  };
  handleSubmit = (review) => {
    console.log("reviews###", review);
    this.props.history.push(`/home/movie/?ref=${review._id}`);
  };
  getReviews = async () => {
    const reviews = await axios.get(`/api/v1/reviews`);
    return reviews.data.data;
  };
  componentDidUpdate() {
    console.log("YES..DID UPDATE CALLED");
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  async componentDidMount() {
    this._isMounted = true;

    const reviews = await this.getReviews();
    if (this._isMounted) {
      this.setState({
        reviews: reviews,
      });
    }
    console.log("Dashboard##called###");
  }
  render() {
    const { reviews } = this.state;

    return (
      <Fragment>
        <div className="container">
          {reviews.length > 0 ? (
            reviews.map((el, index) => {
              const str = "https://imdb-demo-backend.herokuapp.com/";
              return (
                <Fragment key={index}>
                  <div className="items" onClick={() => this.handleSubmit(el)}>
                    <img
                      src={str + el.movieImg}
                      alt="movieImg"
                      className="movieImg"
                    />
                    <span className="ratingContainer">
                      <p>{el.movieTitle}</p>
                    </span>
                  </div>
                </Fragment>
              );
            })
          ) : (
            <span
              style={{
                position: "absolute",
                left: "48%",
                top: "45%",
              }}
            >
              <LoadingSpinner />
            </span>
          )}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.Auth.loading === true,
    error: state.Auth.error,
    token: state.Auth.token,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, MapDispatchToProps)(Dashboard);
