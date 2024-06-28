import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "@/components/Menu";

const Home = ({ name }: any) => {
  const description =
    "Education is the most powerful weapon which you can use to change the world.";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHome}>
        <Image
          source={require("@/assets/images/Education-Technology.png")}
          style={styles.headerImg}
        />
        <Text style={styles.mainHeader}>Welcome</Text>
        <Text
          style={[
            styles.mainHeader,
            { fontSize: 33, color: "rgb(47 167 180)" },
          ]}
        >
          {name}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "white",
    textAlign: "center",
  },
  mainHome: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImg: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    resizeMode: "stretch",
    marginTop: 50,
    borderRadius: 10,
  },
  mainHeader: {
    fontSize: 30,
    color: "black",
    textTransform: "uppercase",
  },
  paraStyle: {
    textAlign: "center",
    fontSize: 19,
    color: "rgb(141 165 211)",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
  menuStyle: {},
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
});

export default Home;
