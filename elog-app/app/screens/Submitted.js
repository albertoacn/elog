import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <Text style={{ fontWeight: 'bold' }}>
        Data succesfully submitted. Have a good day.
      </Text>
      <Text style={{ fontWeight: 'bold' }}>
      </Text>
      <Text style={{ fontWeight: 'bold' }}>
      </Text>
      <Button
        backgroundColor="#03A9F4"
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </Card>
  </View>
);