/** @format */

import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { icons, COLORS } from "../constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Cocktails from "../screens/Cocktails";
import Favourites from "../screens/Favourites";
import { favouritesExport } from "../screens/Cocktails";

const Tab = createBottomTabNavigator();

const Tabs = ({ cocktailsList }) => {
  const [favourites, setFavourites] = React.useState([]);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: COLORS.primary,
          elevation: 0,
        },
      }}
      initialRouteName={"Home"}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.red2 : COLORS.red3,
              }}
            />
          ),
        }}
      >
        {props => <Home {...props} cocktailsList={cocktailsList} />}
      </Tab.Screen>
      <Tab.Screen
        name="Cocktails"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.cocktail}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.red2 : COLORS.red3,
              }}
            />
          ),
        }}
      >
        {props => <Cocktails {...props} cocktailsList={cocktailsList} />}
      </Tab.Screen>
      {/* <Tab.Screen
        name="Favourites"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.like}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.red2 : COLORS.red3,
              }}
            />
          ),
        }}
      >
        {props => <Favourites {...props} />}
      </Tab.Screen>
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
                tintColor: focused ? COLORS.red2 : COLORS.red3,
              }}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
