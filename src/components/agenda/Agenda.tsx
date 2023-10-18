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
import APPLOGO from "../../../assets/images/index";
import styles from "./agenda.style";
import Upcoming from "./Upcoming";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

const Agenda = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        await Font.loadAsync({
          "Montserrat-Italic": require("../../../assets/fonts/Montserrat-Italic.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
      console.log("Agenda");
    }
  }, [appIsReady]);

  if (!appIsReady) {
    console.log("app is not ready");
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.appContainer}>
      <Upcoming />
    </View>
  );
  //   <SafeAreaView  style={styles.safeArea}>
  //   </SafeAreaView>
};

export default Agenda;
