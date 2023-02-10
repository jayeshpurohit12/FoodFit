import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import CountDown from "react-native-countdown-component";

const TimeCountDown = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.limitedTimeText}>Limited Time Offer</Text>
      <CountDown
        until={360000}
        size={14}
        timeToShow={["H", "M", "S"]}
        timeLabels={{}}
      />
    </View>
  );
};

export default TimeCountDown;
