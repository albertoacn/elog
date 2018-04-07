import React from "react";
import { FlatList, Text, View, ScrollView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { signedUID } from "../auth";
import { getResults } from "../server";


export default class Record extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {

        return signedUID().then((res) => {
            // TO TEST with AVD
            //fetch(`http://10.0.2.2:3000/result/${res}`).then((response) => response.json())
            fetch(`https://elog-dfo-admin-dashboard.herokuapp.com/result/${res}`).then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                        entries: responseJson.results,
                    }, function () {

                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }).catch(err => alert(err));
    }

    render() {
        const { navigate } = this.props.navigation;
        return <View style={{ paddingVertical: 20 }}>
            <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                <Button
                    backgroundColor="#03A9F4"
                    title="Back to Home"
                    onPress={() => navigate("Home")}
                />
                <FlatList
                    data={this.state.entries}
                    renderItem={({ item/*, index*/ }) =>
                        <Card /*title="entry" key={index}*/>
                            <Text style={{ marginBottom: 10 }}>
                                Licensed Fishing Area (LFA): {item.responses[0]}.
                    </Text>
                            <Text style={{ marginBottom: 10 }}>
                                Total number of days your traps were soaked: {item.responses[1]}.
                    </Text>
                            <Text style={{ marginBottom: 10 }}>
                                Total number of small lobsters caught: {item.responses[2]}.
                    </Text>
                            <Text style={{ marginBottom: 10 }}>
                                Total number of rock crab caugh: {item.responses[3]}.
                    </Text>
                            <Text style={{ marginBottom: 10 }}>
                                Total number of sculpin caughs: {item.responses[4]}.
                    </Text>
                            <Text style={{ marginBottom: 10 }}>
                                Total number of cunner caught: {item.responses[5]}.
                    </Text>
                            <Text style={{ marginBottom: 10 }}>
                                Coordinates: {item.responses[6]}.
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                                Date: {item.responses[7]}.
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                                Time (UTC): {item.responses[8]}.
                    </Text>
                        </Card>
                    }
                    keyExtractor={(item, index) => index}
                />
            </ScrollView>
        </View>;
    }
}


