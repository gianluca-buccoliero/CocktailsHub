/** @format */

import * as React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, COLORS, SIZES, FONTS } from "../constants";
import Cocktails from "./Cocktails";
import { useNavigation } from "@react-navigation/native";

const InfoCocktail = ({ route }) => {
  const item = route?.params?.item.item;
  const navigation = useNavigation();
  // console.warn(item.strDrinkThumb);
  const [favourite, setFavourite] = React.useState(null);

  function addToFavourites(item) {
    if (!favourite) {
      setFavourite(item);
    } else setFavourite(null);
  }

  function getIngredients() {
    const array = Object.entries(item);
    const newArray = array.splice(17, 15);
    const newArrayFiltered = newArray.filter(e => e[1] != null && e[1] !== "");
    const ingredients = newArrayFiltered.map(e => e[1]);
    return { ingredients: ingredients, num: ingredients.length };
  }

  function getMeasure(i) {
    const array = Object.entries(item);
    const newArray = array.splice(32, i);
    const measures = newArray.map(e => e[1]);

    return measures;
  }

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          width: SIZES.width,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Cocktails", { favourite: { favourite } })
          }
        >
          <Image
            source={icons.back}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.primary,
              marginLeft: 20,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addToFavourites(item)}>
          <Image
            source={icons.like}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.secondary,
              marginRight: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderBody() {
    return (
      <View style={styles.card_template}>
        <Image
          style={styles.card_image}
          source={{
            uri: item.strDrinkThumb,
          }}
        />
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ ...FONTS.h1 }}>{item.strDrink}</Text>
          {/* INGREDIENTI  */}
          <View
            style={{
              marginTop: 10,
              flexDirection: "column",
            }}
          >
            {getIngredients().ingredients.map((e, i) => (
              <Text
                key={e + i}
                style={{
                  ...FONTS.h4,
                  color: COLORS.secondary,
                  marginRight: 10,
                }}
              >
                • {e} ► {getMeasure(getIngredients().num)[i]}
              </Text>
            ))}
          </View>
          {/* PREPARAZIONE  */}

          <Text style={{ ...FONTS.body3, marginTop: 10 }}>
            {item.strInstructionsIT}
          </Text>
        </View>
      </View>
    );
  }

  if (!item) return <View></View>;
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderBody()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.height + 100,
    width: SIZES.width,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },
  card_template: {
    marginTop: 40,
    width: 300,
    height: 300,
  },
  card_image: {
    width: 300,
    height: 300,
    borderRadius: SIZES.radius,
  },
});

export default InfoCocktail;
