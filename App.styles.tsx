import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { SIZES } from "./src/constants/theme";

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 40,
  },
  appContainer: {
    height: height,
    paddingTop: SIZES.medium,
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "Montserrat-Italic",
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    textAlign: "center",
  },
  imgLogo: {
    width: 150,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    zIndex: 1,
  },
});

export default styles;
