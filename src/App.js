import React from "react";
import "./App.css";
import { RootRoutes } from "./Routes/index";
import Header from "./Dashboard/Header";

class App extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV == "production") {
      console.log = function () {};
      console.warn = function () {};
      console.error = function () {};
    }
    console.log("COMPONENT -- AA");
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <RootRoutes />
      </React.Fragment>
    );
  }
}

export default App;
