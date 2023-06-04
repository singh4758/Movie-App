import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export const Find = () => {

  return (
    <View style={styles.container}>
      <Text style={{ color: '#ccc', textAlign: 'center' }}>Under Progress</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#181132",
    width: "100%",
    height: "100%",
    alignContent:'center',
    justifyContent: 'center'
  },
});
