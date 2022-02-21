import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import Color from "../../theme/Color";

const { width: WIDTH } = Dimensions.get("window");

export default function UserInput(props) {
  const [hasFocus, sethasFocus] = useState(false);
  const onFocus = () => {
    sethasFocus(true);
  };

  const onBlur = () => {
    sethasFocus(false);
  };
  return (
    <View style={[styles.textInputContainer, props.containerStyle]}>
      <TextInput
        style={{
          width: WIDTH - 55,
          height: props.multiline ? null : 45,
          borderColor: props.borderColor ? props.borderColor : Color.blue,
          borderWidth: 2,
          borderRadius: 10,
          color: props.color ? Color.black : Color.white,
          padding: 10,
          paddingLeft: props.paddingLeft
            ? props.paddingLeft
            : props.multiline
            ? null
            : 45,
        }}
        multiline={props.multiline ? true : false}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={props.autoCorrect}
        autoCapitalize={props.autoCapitalize}
        returnKeyType={props.returnKeyType}
        placeholderTextColor={props.placeholderTextColor}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
        editable={props.editable}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <View
        style={[
          hasFocus ? styles.focusedTextInput : styles.borderText,
          props.style,
          props.error ? styles.errorTextInput : null,
        ]}
      />
      {props.errorMessage ? (
        <Text style={styles.error}>{props.errorMessage}</Text>
      ) : null}
    </View>
  );
}

UserInput.propTypes = {};
UserInput.defaultProps = {};

const styles = StyleSheet.create({
  textInput: {},
  focusedTextInput: {
    borderColor: Color.green,
  },
  errorTextInput: {
    fontSize: 14,
    color: Color.pinkred,
    borderBottomColor: Color.pinkred,
    borderBottomWidth: 1,
  },

  error: {
    marginTop: 5,
    fontSize: 14,
    color: Color.pinkred,
    left: 15,
  },
});
