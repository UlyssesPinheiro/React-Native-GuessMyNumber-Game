import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import successImg from "../assets/images/success.png";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Color from "../Helper/Color";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.outerContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={successImg} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highLightText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highLightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: deviceWidth < 380 ? 200 : 300,
    height: deviceWidth < 380 ? 200 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Color.primary800,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },

  highLightText: {
    fontFamily: "open-sans-bold",
    color: Color.primary500,
  },
});
