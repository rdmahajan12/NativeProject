import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name && !email && !phone && !msg) {
      Alert.alert("Plz fill the inputs");
    } else {
      Alert.alert(`Welcome ${name}`);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>Contact with Teams</Text>
      <Text style={styles.contactText}>
        You can reach with Teams via rdm9284@gmail.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Name</Text>
        <TextInput
          style={styles.inputValue}
          placeholder="Enter Your Name"
          value={name}
          onChangeText={(value) => setName(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.inputValue}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Phone</Text>
        <TextInput
          style={styles.inputValue}
          placeholder="Enter Your Mobile"
          value={phone}
          onChangeText={(value) => setPhone(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>How Can I Help You!</Text>
        <TextInput
          style={[styles.inputValue, styles.multiText]}
          placeholder="Tell us about yourself"
          value={msg}
          onChangeText={(value) => setMsg(value)}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "blue" : undefined}
        />
        <Text style={styles.wrapperText}>Agree with T&C</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: agree ? "blue" : "orange" },
        ]}
        onPress={submit}
        disabled={!agree}
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  mainHeading: {
    fontSize: 20,
    color: "blue",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
  },
  contactText: {
    fontSize: 20,
    color: "",
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputText: {
    fontWeight: "bold",
    color: "orange",
    paddingBottom: 5,
    lineHeight: 25,
  },
  inputValue: {
    borderWidth: 1,
    borderColor: "",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  multiText: {
    paddingVertical: 4,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  wrapperText: {
    marginLeft: 10,
    color: "",
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "green",
  },
});

export default Contact;
