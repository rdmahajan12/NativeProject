import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Home from "@/app/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "../screens/Contact";
import Course from "../screens/Course";
import UserData from "../screens/UserData";
import About from "../screens/About";
import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

const index = () => {
  const Stack = createNativeStackNavigator();
  const [fontLoading] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
  });

  if (!fontLoading) {
    return null;
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} name={"Ritesh Mahajan"} />}
        </Stack.Screen>
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "JosefinSans_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "JosefinSans_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="User"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "JosefinSans_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "JosefinSans_600SemiBold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default index;
