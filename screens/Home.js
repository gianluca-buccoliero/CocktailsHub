/** @format */

import React from "react";
import { render } from "react-dom";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Cocktails from "./Cocktails";
import { icons, SIZES, COLORS, FONTS } from "../constants";
import Tabs from "../navigation/tabs";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  const renderHeader = () => {
    return (
      <View
        style={{
          width: SIZES.width,
          height: SIZES.height * 0.2,
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: SIZES.height * 0.15,
            width: SIZES.width * 0.45,
            borderBottomLeftRadius: SIZES.radius,
            borderBottomRightRadius: SIZES.radius,
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
              textAlign: "center",
              color: COLORS.secondary,
            }}
          >
            COCKTAILS
          </Text>
          <Text
            style={{
              ...FONTS.h1,
              textAlign: "center",
              color: COLORS.white,
            }}
          >
            HUB
          </Text>
        </View>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View
        style={{
          height: SIZES.height * 0.7,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          source={icons.cocktail}
          style={{
            marginTop: 150,
            marginRight: 35,
            width: 300,
            height: 300,
          }}
        />
        {/* <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            width: SIZES.width * 0.5,
            height: 50,
            marginTop: 100,
            borderRadius: SIZES.radius * 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Cocktails")}
        >
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.white,
            }}
          >
            COCKTAILS LIST
          </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            width: SIZES.width * 0.5,
            height: 50,
            marginTop: 20,
            borderRadius: SIZES.radius * 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.secondary,
            }}
          >
            ALCOHOL TEST
          </Text>
        </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderBody()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.white,
  },
});
