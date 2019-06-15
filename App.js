

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Academic'},
            {key: 'Favourite programming'},
            {key: 'Photo'},
            {key: 'skills'},
            {key: 'interests'},
            {key: 'hobbies'},
            {key: 'fears'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
 
