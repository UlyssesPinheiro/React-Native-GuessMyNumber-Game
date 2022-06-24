import React from "react";
import { StyleSheet, Text } from "react-native";
import Color from "../../Helper/Color";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Color.secondary500,
    fontSize: 24,
  },
});
