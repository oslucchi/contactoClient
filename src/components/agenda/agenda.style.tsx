import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants/theme";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    flexDirection: "row",
    width: width - 50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "white",
  },
  imgLogo: {
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  textContainer: {
    width: "80%",
  },
  imgContainer: {
    width: "20%",
  },
  header: {
    alignItems: "center",
    marginTop: SIZES.small,
    fontSize: SIZES.small,
  },
  headerTitle: {
    marginTop: SIZES.small,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default styles;
