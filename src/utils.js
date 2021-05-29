import React from "react";
import Loader from "react-loader-spinner";

export const LoadingSpinner = () => {
  return <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />;
};

export const baseURL = "https://imdb-demo-backend.herokuapp.com/";

//convert date
export const convertDate = (inputFormat) => {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
};

export const year = (date) => {
  const dt = new Date(date);
  const year = dt.getFullYear();
  return year;
};
