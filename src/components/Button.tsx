// React
import React from "react";

// React Native
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";

type ButtonProps = TouchableOpacityProps;

export function Button({ ...rest }: TouchableOpacityProps) {
  return (
    <>
      <TouchableOpacity style={styles.button} {...rest}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e4b7e5",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});