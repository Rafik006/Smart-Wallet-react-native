import React from "react";

import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Scan from "../Screens/Scan";
import Svg, { Path } from "react-native-svg";
import { icons } from "../constants";
const Tab = createBottomTabNavigator();
const TabBarCustomButton = ({
  accessibilityLabel,
  accessibilityState,
  children,
  onPress,
}) => {
  var isSelected = accessibilityState.selected;
  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 0,
          }}
        >
          <View style={{ flex: 1, backgroundColor: "white" }}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill="white"
            />
          </Svg>
          <View style={{ flex: 1, backgroundColor: "white" }}></View>
        </View>
        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#24C16B",
            ...style.shadow,
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          backgroundColor: "white",
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: [
        {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "transparent",
          elevation: 0,
        },
      ],
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={icons.more}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? "white" : "#0C381F",
            }}
          />
        ),
        tabBarButton: (props) => <TabBarCustomButton {...props} />,
      }}
    />
    <Tab.Screen
      name="Scan"
      component={Scan}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={icons.scan}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? "white" : "#0C381F",
            }}
          />
        ),
        tabBarButton: (props) => <TabBarCustomButton {...props} />,
      }}
    />
    <Tab.Screen
      name="User"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={icons.user}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: focused ? "white" : "#0C381F",
            }}
          />
        ),
        tabBarButton: (props) => <TabBarCustomButton {...props} />,
      }}
    />
  </Tab.Navigator>
);
const style = StyleSheet.create({
  shadow: {
    shadowColor: "#24C16B",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default Tabs;
