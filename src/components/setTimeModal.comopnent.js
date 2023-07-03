import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Duration from "../components/duration.componenet";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TimeModal({
  setModalVisible,
  modalVisible,
  timerProp,
}) {
  const [timer, setTimer] = useState(timerProp);
  return (
    <View style={styles.modalContainer}>
      <View style={styles.timeTextContainer}>
        <TouchableOpacity onPress={() => setTimer(timer - 1)}>
          <AntDesign name="leftcircleo" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.timeText}>{timer}</Text>
        <TouchableOpacity onPress={() => setTimer(timer + 1)}>
          <AntDesign name="rightcircleo" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.checkIconContainer}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <AntDesign name="checkcircleo" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
});
