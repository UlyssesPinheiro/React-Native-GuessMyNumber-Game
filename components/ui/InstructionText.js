import React from "react";
import { StyleSheet, Text } from "react-native";
import Color from "../../Helper/Color";

export default function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Color.secondary500,
    fontSize: 24,
  },
});
