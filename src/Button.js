import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default ({ lable, onPress = () => {}, align, disabled = false }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.buttonContainer}
      onPress={() => onPress()}
    >
      <Text style={{ textAlign: align, opacity: disabled ? 0.2 : 1 }}>
        {lable}
      </Text>
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
