import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPressIn={handlePress}
      activeOpacity={0.7}
      style={[styles.button, containerStyles, isLoading && styles.loading]}
      disabled={isLoading}
      hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    borderRadius: 18,
    minHeight: 62,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    paddingHorizontal: 4,
  },
  text: { fontWeight: 600 },
  loading: {
    opacity: 0.5,
  },
});
export default CustomButton;
