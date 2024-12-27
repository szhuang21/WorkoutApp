import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.inputLabel}>{title}</Text>
      <View style={styles.input}>
        <TextInput
          style={[styles.textInput]}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
  },
  inputLabel: {
    fontSize: 14,
    color: "white",
    fontWeight: 400,
    marginTop: 8,
  },
  input: {
    flexDirection: "row",
    borderColor: "#4E455B",
    borderWidth: 2,
    width: "full",
    height: 42,
    paddingHorizontal: 2,
    backgroundColor: "#41394C",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  "input:focus": {
    width: "full",
  },
  textInput: {
    backgroundColor: "transparent",
    flex: 1,
    width: "full",
    height: "100%",
    color: "white",
    fontWeight: 400,
    fontSize: 16,
    borderWidth: 0,
    borderColor: "transparent",
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    marginTop: 7,
  },
});

export default FormField;
