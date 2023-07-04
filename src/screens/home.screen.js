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
  const mode = [25, 5, 15];
  console.log(mode);
  const [modeIndex, setModeIndex] = useState(0);

  return (
    <View style={{ ...styles.container, backgroundColor: route.params?.color }}>
      <View style={styles.options}>
        <TouchableOpacity
          style={{ paddingRight: 20 }}
          onPress={() => navigation.navigate("Options")}
        >
          <Ionicons name="options" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.timerContainer}></View>
      <CountdownCircleTimer
        isPlaying
        duration={time * 60}
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
      <View style={styles.modeConatiner}>
        <View style={styles.modeNavigator}>
          <TouchableOpacity
            onPress={() => {
              setModeIndex((modeIndex + 1) % 3);
              setTime(mode[modeIndex]);
            }}
          >
            <AntDesign name="stepbackward" size={30} color="black" />
          </TouchableOpacity>
        </View>
        {modeIndex == 2 ? (
          <Text style={{ fontSize: 20 }}>
            Long Break Mode {`\n\t\t\t`} Time:{mode[modeIndex]}
          </Text>
        ) : modeIndex == 1 ? (
          <Text style={{ fontSize: 20 }}>
            Short Break Mode {`\n\t\t\t`} Time:{mode[modeIndex]}
          </Text>
        ) : (
          <Text style={{ fontSize: 20 }}>
            Focus Mode {`\n\t\t\t`} Time:{mode[modeIndex]}
          </Text>
        )}
        <View style={styles.modeNavigator}>
          <TouchableOpacity
            onPress={() => {
              setModeIndex((modeIndex + 1) % 3);
              setTime(mode[modeIndex]);
            }}
          >
            <AntDesign name="stepforward" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
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
    position: "absolute",
    // backgroundColor: "red",
    marginTop: 50,
    width: "100%",
  },
  timerText: {
    fontSize: 100,
  },
  modeConatiner: {
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 100,
  },
  modeNavigator: {
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    height: 50,
    width: 50,
  },
});
