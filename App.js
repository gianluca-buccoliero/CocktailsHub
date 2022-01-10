/** @format */

import * as React from "react";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { icons, COLORS, SIZES, FONTS } from "./constants";
import Home from "./screens/Home";
import Tabs from "./navigation/tabs";
import Cocktails from "./screens/Cocktails";
import InfoCocktail from "./screens/InfoCocktail";

const Stack = createStackNavigator();

export default function App() {
  const [isFontReady, setFontReady] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Gin")
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    async function loadFont() {
      return await Font.loadAsync({
        "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      });
    }
    // after the loading set the font status to true
    loadFont().then(() => {
      setFontReady(true);
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && !isFontReady ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={"Tabs"}
          >
            <Stack.Screen name="Tabs">
              {props => <Tabs page={"Home"} cocktailsList={data} />}
            </Stack.Screen>
            <Stack.Screen name="InfoCocktail" component={InfoCocktail} />
          </Stack.Navigator>
        </NavigationContainer>
        // <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.secondary,
  },
});
