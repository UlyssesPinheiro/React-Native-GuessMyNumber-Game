import React from "react";
import { StyleSheet, Text } from "react-native";
import Color from "../../Helper/Color";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Color.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Color.white,
    padding: 12,
  },
});
