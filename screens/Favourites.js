/** @format */

import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Input } from "react-native-elements";
import { COLORS, icons, images, SIZES, FONTS } from "../constants";

const Favourites = ({ navigation, cocktailsList }) => {
  const [favourites, setFavourites] = React.useState([]);
  const [value, onChangeText] = React.useState("Cerca un ristorante");
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (value === "Cerca un ristorante") {
      setLoading(false);
      return;
    }
  });

  function renderSearchTab() {
    return (
      <View
        style={{
          flexDirection: "columns",
          height: 50,
          marginTop: 70,
          marginBottom: 20,
        }}
      >
        <Input
          onChangeText={text => {
            onChangeText(text);
          }}
          placeholder="Cerca tra i preferiti"
        />
      </View>
    );
  }

  function renderCocktailsList() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginBottom: SIZES.padding,
            height: SIZES.height * 0.15,
            width: SIZES.width * 0.9,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
          }}
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("InfoCocktail", {
              item: { item },
            });
          }}
        >
          <View style={{}}>
            <Image
              source={{ uri: item.strDrinkThumb }}
              style={{
                width: SIZES.width * 0.3,
                height: SIZES.height * 0.15,
                borderRadius: SIZES.radius,
              }}
            />
          </View>

          {/* COCTAILS INFO */}

          <View
            style={{
              maxWidth: 150,
              marginLeft: 20,
              flexDirection: "column",
              marginTop: 20,
            }}
          >
            {/* TITLE */}
            <Text
              style={{
                ...FONTS.h3,
                fontSize: 16,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              {item.strDrink}
            </Text>

            {/* CATEGORY */}
            <View
              style={{
                flexDirection: "column",
                marginTop: 30,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  source={icons.ordinarydrinkcategory}
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: SIZES.radius,
                    tintColor:
                      item.strCategory === "Cocktail" ? "green" : "yellow",
                    marginTop: 2.2,
                  }}
                />
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.body5,
                    marginLeft: 2,
                    color: item.strCategory === "Cocktail" ? "green" : "yellow",
                  }}
                >
                  {item.strCategory === "Other/Unknown"
                    ? "Ordinary Drink"
                    : item.strCategory}
                </Text>
              </View>

              {/* ALCOOL */}

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  source={icons.devilsmiley}
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: SIZES.radius,
                    tintColor:
                      item.strAlcoholic === "Non alcoholic"
                        ? COLORS.pink1
                        : COLORS.red3,
                    marginTop: 2,
                    marginLeft: 2,
                  }}
                />
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.body5,
                    marginLeft: 2,
                    color:
                      item.strAlcoholic === "Non alcoholic"
                        ? COLORS.pink1
                        : COLORS.red3,
                  }}
                >
                  {item.strCategory === "Other/Unknown"
                    ? "Ordinary Drink"
                    : item.strAlcoholic}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <FlatList
        data={favourites}
        vertical
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.idDrink}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <View>
      {isLoading ? (
        <View style={styles.container}>
          {renderSearchTab()}
          <Text>CARICAMENTO IN CORSO...</Text>
        </View>
      ) : (
        <View style={styles.container}>
          {renderSearchTab()}
          {renderCocktailsList()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.white,
  },
});

export default Favourites;
