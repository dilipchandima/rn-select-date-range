import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default ({ lable, onPress = () => {}, align, disabled = false }) => {
  const textStyle = { textAlign: align, opacity: disabled ? 0.2 : 1 };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.buttonContainer}
      onPress={() => onPress()}
    >
      <Text style={textStyle}>{lable}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 30,
    flex: 0.7,
    justifyContent: "center",
  },
});
