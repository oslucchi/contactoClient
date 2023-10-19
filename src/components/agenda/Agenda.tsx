import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "./agenda.style";
import EventsUpcoming from "./EventsUpcoming";
import * as SplashScreen from "expo-splash-screen";

const Agenda = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await Font.loadAsync({
          "Montserrat-Italic": require("../../../assets/fonts/Montserrat-Italic.ttf"),
        });
        console.log("The application is now ready");
      } catch (e) {
        console.error("error while loading fonts", e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      console.log("Agenda");
    }
  }, [appIsReady]);

  return (
    <View onLayout={onLayoutRootView}>
      {!appIsReady ? (
        <ActivityIndicator size="large" color="#312651" />
      ) : (
        <View style={styles.appContainer}>
          <EventsUpcoming />
        </View>
      )}
    </View>
  );
};

export default Agenda;
