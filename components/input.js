import React from "react";
import { TextInput, View } from "react-native";
import styles from "../styles/styles";

export function Input({ placeholder, secureTextVariable }) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder={placeholder}
        secureTextEntry={secureTextVariable}
      />
    </View>
  );
}
