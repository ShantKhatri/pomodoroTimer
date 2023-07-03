import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

export default function HomeScreen({ route, navigation }) {
  const [color, setColor] = useState("");
  const [time, setTime] = useState(40);
  //   {
  //     route.params.color ? setColor(route.params?.color) : setColor("#F2B1B1");
  //   }
  return (
    <View style={{ ...styles.container, backgroundColor: route.params?.color }}>
      <View style={styles.options}>
        <TouchableOpacity onPress={() => navigation.navigate("Options")}>
          <Ionicons name="options" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.timerContainer}></View>
      <CountdownCircleTimer
        isPlaying
        duration={time}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[time, time / 2, 2, 0]}
        isSmoothColorTransition={true}
        trailColor="#d9d9d9"
        trailStrokeWidth={120}
        strokeWidth={120}
      >
        {/* {
          time != 0 ? (
            <AntDesign name="caretright" size={24} color="black" />
          ) : (
            <AntDesign name="caretright" size={24} color="black" />
          ) 
        } */}
        {({ remainingTime }) => (
          <Text style={styles.timerText}>{remainingTime}</Text>
        )}
      </CountdownCircleTimer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2B1B1",
    alignItems: "center",
  },
  timerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 200,
    paddingRight: 200,
  },
  options: {
    alignItems: "flex-end",
    // position: "absolute",
    backgroundColor: "red",
    marginTop: 50,
  },
  timerText: {
    fontSize: 100,
  },
});
