import React from "react";
import { ScrollView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignOut } from "../auth";
import Builder from "../builder";
import Submitter from "../submitter";
import { put } from "../server";

export default class Submit extends React.Component {

  state = {
    lfa: '',
    numDaysSoaked: '',
    numLobsters: '',
    numCrabs: '',
    numSculpins: '',
    numCunners: '',
    coordinates: ''
  }

  build(inputData) {
    const builder = new Builder();
    const submitter = new Submitter();
    const { navigate } = this.props.navigation;
    const body = builder.build(inputData);

    //Hard coded values pending to be received from the UI
    const elogKey = "TTTSED628GPZ68883K2B7L2J";
    const clientID = 39521;
    const region = 1014;
    //END hard coded values

    const date = new Date();
    const submitDate = date.getUTCFullYear() + "" + date.getUTCMonth() + "" + date.getUTCDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
    const fileName = `${region}-${clientID}-${submitDate}.XML`;
    if (submitter.submit(elogKey, fileName, body)) {
      put(inputData, body);
      navigate("Submitted");
    } else {
      // navigate("Error");
      alert("Error: Please try again later");
    }
  }

  render() {
    return <ScrollView style={{ paddingVertical: 20 }}>
      <Card>
        <FormLabel>Licensed Fishing Area (LFA)</FormLabel>
        <FormInput placeholder="" onChangeText={(lfa) => this.setState({ lfa })} value={this.state.lfa} />
        <FormLabel>Total number of days your traps were soaked</FormLabel>
        <FormInput placeholder="" onChangeText={(numDaysSoaked) => this.setState({ numDaysSoaked })} value={this.state.numDaysSoaked} />
        <FormLabel>Total number of small lobsters caught</FormLabel>
        <FormInput placeholder="" onChangeText={(numLobsters) => this.setState({ numLobsters })} value={this.state.numLobsters} />
        <FormLabel>Total number of rock crab caught</FormLabel>
        <FormInput placeholder="" onChangeText={(numCrabs) => this.setState({ numCrabs })} value={this.state.numCrabs} />
        <FormLabel>Total number of sculpin caught</FormLabel>
        <FormInput placeholder="" onChangeText={(numSculpins) => this.setState({ numSculpins })} value={this.state.numSculpins} />
        <FormLabel>Total number of cunner caught</FormLabel>
        <FormInput placeholder="" onChangeText={(numCunners) => this.setState({ numCunners })} value={this.state.numCunners} />
        <FormLabel>Coordinates</FormLabel>
        <FormInput placeholder="" onChangeText={(coordinates) => this.setState({ coordinates })} value={this.state.coordinates} />
        <Button
          backgroundColor="#03A9F4"
          title="SUBMIT"
          onPress={() => this.build(this.state)}
        />
      </Card>
    </ScrollView>;
  }
}