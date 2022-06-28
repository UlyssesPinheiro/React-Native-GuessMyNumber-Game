import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Color from "../../Helper/Color";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Color.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
});
