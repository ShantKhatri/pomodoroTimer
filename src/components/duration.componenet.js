import React, { useState } from "react";
import { StyleSheet, Text, Modal, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Duration() {
  const [pomodoro, setPomodoro] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        overFullScreen={true}
        style={styles.modalContainer}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.timeTextContainer}>
          <TouchableOpacity onPress={() => setPomodoro(pomodoro - 1)}>
            <AntDesign name="leftcircle" size={50} color="black" />
          </TouchableOpacity>
          <Text style={styles.timeText}>{pomodoro}</Text>
          <TouchableOpacity onPress={() => setPomodoro(pomodoro + 1)}>
            <AntDesign name="rightcircle" size={50} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.checkIconContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <AntDesign name="checkcircle" size={50} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.textConatiner}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.textNumber}>{pomodoro}</Text>
          <Text>POMODORO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textConatiner}>
        <Text style={styles.textNumber}>5</Text>
        <Text>BREAK</Text>
      </View>
      <View style={styles.textConatiner}>
        <Text style={styles.textNumber}>15</Text>
        <Text>LONG BREAK</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // padding: 10,
    backgroundColor: "red",
    margin: 0,
  },
  textConatiner: {
    // padding: 5,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 90,
    width: 90,
  },
  textNumber: {
    fontSize: 50,
  },
  timeTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  checkIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  timeText: {
    fontSize: 50,
  },
});
