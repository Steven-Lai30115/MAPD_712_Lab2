import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

function InputField() {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        value={text}
        clearTextOnFocus="true"
        defaultValue={text}
        onChangeText={(newText) => setText(newText)}
        placeholder="Type something here"
        style={styles.edit}
      ></TextInput>
      <Text>{text}</Text>
      <Button
        style={styles.clearBtn}
        title="Clear Button"
        onPress={() => setText("")}
      ></Button>
    </View>
  );
}

export default function App() {
  const [isEnabled, switchClicked] = useState(false);
  const switchBackground = () => {
    return isEnabled ? "black" : "white";
  };
  const toggleSwitch = () => {
    switchClicked((previousState) => !previousState);
    switchBackground();
  };

  return (
    <View style={[styles.container, { backgroundColor: switchBackground() }]}>
      <InputField></InputField>
      <Switch onValueChange={toggleSwitch} value={isEnabled}></Switch>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  textView: {
    fontSize: 20,
    borderWidth: 3,
    borderColor: "red",
    color: "red",
  },

  edit: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "black",
    color: "blue",
  },
  clearBtn: {
    borderWidth: 1,
    borderColor: "purple",
    alignItems: "center",
  },
});
