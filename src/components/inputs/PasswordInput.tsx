import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-rapi-ui";

interface PasswordInputProps {
  value: string
  onChange: (text: string) => void
  placeholder: string
}

const PasswordInput = (props: PasswordInputProps) => {
  
  return (
    <TextInput
      value={props.value}
      onChangeText={props.onChange}
      placeholder={props.placeholder}
      secureTextEntry
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

export default PasswordInput;