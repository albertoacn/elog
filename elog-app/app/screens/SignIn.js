import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";


export default class SignIn extends React.Component {
  state = {
    uid: '',
    password: ''
  }

  render() {
    const { navigate } = this.props.navigation;
    return <View style={{ paddingVertical: 20 }}>
      <Card>
        <FormLabel>Unique Identifier Code</FormLabel>
        <FormInput placeholder="UID..." onChangeText={(uid) => this.setState({ uid })} value={this.state.uid} />
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry placeholder="Password..." onChangeText={(password) => this.setState({ password })} value={this.state.password} />

        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="SIGN IN"
          onPress={() => {
            onSignIn(this.state.uid).then(() => navigate("Home"));
          }}
        />
      </Card>
    </View>;
  }
}