import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { colorData } from "../data/colorData";
import { FontAwesome } from "@expo/vector-icons";

export default function ColorTheme(props) {
  const [color, setColor] = useState("red");
  const [colorSelected, setColorSelected] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        setColor(item.color);
        props.onColorChange(item.color);
        setColorSelected(true);
      }}
    >
      <View style={[styles.colorBox, { backgroundColor: item.color }]}>
        {colorSelected && color === item.color && (
          <FontAwesome name="check-circle" size={24} color="black" />
        )}
      </View>
    </TouchableOpacity>
  );
  //   console.log(color);

  return (
    <View style={styles.container}>
      <View style={styles.colorContainer}>
        <FlatList
          data={colorData}
          renderItem={renderItem}
          numColumns={4}
          keyExtractor={(item, index) => index}
        />
        {props.color}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    backgroundColor: "green",
    marginTop: 20,
  },
  colorBox: {
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
