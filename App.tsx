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
import styles from "./App.styles";
import APPLOGO from "./assets/images/index";
import * as SplashScreen from "expo-splash-screen";
import Entypo from "@expo/vector-icons/Entypo";
import Upcoming from "./src/components/agenda/Upcoming";

export default function App() {
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
          "Montserrat-Italic": require("./assets/fonts/Montserrat-Italic.ttf"),
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
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.safeArea}>
      <View style={styles.appContainer}>
        <View>
          <Image source={APPLOGO} style={styles.imgLogo} />
          <Text style={{ fontSize: 8, textAlign: "center" }}>
            Memo and agenda at your fingers
          </Text>
        </View>
        <Upcoming />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
