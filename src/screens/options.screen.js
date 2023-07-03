import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Duration from "../components/duration.componenet";
import { StyleSheet } from "react-native";
import ColorTheme from "../components/colorThemes.component";

export default function OptionsScreen({ route, navigation }) {
  const [color, setColor] = useState("#F2B1B1");
  //   console.log(route.params);
  //   const obj = { name: "Sahil", age: 20 };
  //   const outerObj = { ...obj, city: "Delhi" };
  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: color }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Main", { color })}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.durationContainer}>
        <Text>DURETION</Text>
        <Duration style={styles.timerContainer} />
      </View>
      <View style={styles.durationContainer}>
        <Text>COLOR THEME</Text>
        <ColorTheme
          onColorChange={(color) => {
            console.log("Color Changed");
            console.log(color);
            setColor(color);
          }}
        />
      </View>
    </SafeAreaView>
  );
  //   console.log(color);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    padding: 10,
    // backgroundColor: "#F2B1B1",
    paddingTop: StatusBar.currentHeight,
  },
  durationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
});
