import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Courses from "@/components/api/Course";

const Course = () => {
  const courseData = ({ item }: any) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image style={styles.imgStyle} source={item.image} />
          </View>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseData}
    />
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    fontSize: 22,
    color: "black",
    textTransform: "uppercase",
    paddingVertical: 10,
    textAlign: "center",
  },
  imgStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
  },
  courseContainer: {
    padding: 20,
    backgroundColor: "rgb(217 227 225)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontFamily: "JosefinSans_600SemiBold",
    textTransform: "uppercase",
  },
  buttonStyle: {
    backgroundColor: "rgb(110 112 114)",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  description: {
    textAlign: "left",
    fontFamily: "JosefinSans_500Medium",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "rgb(117 112 115)",
  },
  // price: {
  //   backgroundColor: "",
  //   color: "",
  //   paddingVertical: 10,
  //   paddingHorizontal: 15,
  //   display: "flex",
  //   justifyContent: "center",
  //   borderBottomLeftRadius: 1,
  //   borderTopLeftRadius: 1,
  //   fontSize: 20,
  //   textAlign: "center",
  //   fontFamily: "",
  // },
});

export default Course;
