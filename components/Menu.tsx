import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Course")}
      >
        {/* <Text style={styles.textStyle}>Course</Text> */}
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/?size=100&id=111275&format=png&color=000000",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}
      >
        {/* <Text style={styles.textStyle}>About</Text> */}
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/?size=100&id=110481&format=png&color=000000",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("User")}
      >
        {/* <Text style={styles.textStyle}>User</Text> */}
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/?size=100&id=13042&format=png&color=000000",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        {/* <Text style={styles.textStyle}>Contact</Text> */}
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/?size=100&id=13731&format=png&color=000000",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {},
  menuContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  textStyle: {
    textTransform: "uppercase",
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;
