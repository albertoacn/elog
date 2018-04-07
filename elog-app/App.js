import React from "react";
import { StackNavigator } from 'react-navigation';
import SignIn from "./app/screens/SignIn";
import Home from "./app/screens/Home";
import Submit from "./app/screens/Submit";
import Submitted from "./app/screens/Submitted";
import Record from "./app/screens/Record";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Layout />;
  }
}

const Layout = StackNavigator({
  SignIn: { screen: SignIn },
  Home: { screen: Home },
  Submit: { screen: Submit },
  Record: { screen: Record },
  Submitted: { screen: Submitted }
});

