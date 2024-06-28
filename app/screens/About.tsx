import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerStyle}>Ritesh Mahajan</Text>
      <Text style={styles.textStyle}>Software Engineer</Text>

      <View>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          }}
          style={styles.imgStyle}
        />
      </View>

      <View style={styles.aboutStyle}>
        <Text style={styles.aboutText}>About Me</Text>
        <Text style={[styles.textStyle, { color: "white" }]}>
          Software engineering is the branch of computer science that deals with
          the design, development, testing, and maintenance of software
          applications.
        </Text>
      </View>

      <Text style={styles.headerStyle}>Reference Links</Text>
      <View style={styles.menuStyle}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/ritesh-mahajan-a74a33200/"
            )
          }
        >
          <Image
            source={{
              uri: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000",
            }}
            style={styles.iconStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/rdmahajan12")}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
            }}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
  menuStyle: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  aboutText: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    alignSelf: "center",
    color: "rgb(181 100 71)",
  },
  aboutStyle: {
    backgroundColor: "rgb(59 59 100)",
    paddingHorizontal: 30,
    marginVertical: 30,
    borderRadius: 10,
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textStyle: {
    fontSize: 18,
    paddingBottom: 30,
    color: "rgb(47 137 100)",
  },
  headerStyle: {
    fontSize: 18,
    color: "rgb(59 59 100)",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
});

export default About;
