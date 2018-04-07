import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";


export default class Home extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel></FormLabel>
      <FormLabel></FormLabel>
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="New submission"
        onPress={() => { navigate("Submit");}}
      />
      <FormLabel></FormLabel>
      <FormLabel></FormLabel>
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="Previous submissions"
        onPress={() => { navigate("Record");}}
      />
    </Card>
  </View>;
  }
}