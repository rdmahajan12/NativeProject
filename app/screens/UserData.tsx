import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

const UserData = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const usersData = async () => {
    try {
      const res = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );

      const data = await res.json();
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const showData = ({ item }: any) => {
    return (
      <View>
        {isLoading ? (
          <View>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={styles.card}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.imgStyle}
                resizeMode="cover"
                source={{ uri: item.image }}
              />
            </View>
            <View>
              <View style={styles.bioContainer}>
                <Text style={styles.bioData}>Bio-Data</Text>
                <Text style={styles.idNumber}>
                  {item ? `#0${item.id}` : `#${item.id}`}
                </Text>
              </View>
              <View style={styles.mainContainer}>
                <Text style={styles.myName}>Name: {item.name}</Text>
                <Text style={styles.myName}>Email: {item.email}</Text>
                <Text style={styles.myName}>Mobile: {item.mobile}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  useEffect(() => {
    usersData();
  }, []);

  return (
    <View>
      <Text style={styles.header}>Student Data</Text>
      <FlatList
        keyExtractor={(item) => item}
        data={user}
        renderItem={showData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeader: {
    color: "#333",
    fontSize: 24,
    fontFamily: "JosefinSans_700Bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imgContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  bioContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  idNumber: {
    fontSize: 18,
    color: "green",
    fontFamily: "JosefinSans_500Medium",
  },
  bioData: {
    fontSize: 18,
    color: "grey",
    fontFamily: "JosefinSans_500Medium",
  },
  myName: {
    fontSize: 18,
    fontFamily: "JosefinSans_400Regular",
    marginBottom: 5,
  },
  header: {
    marginVertical: 10,
    fontSize: 30,
    textAlign: "center",
  },
});

export default UserData;
