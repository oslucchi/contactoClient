import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import APPLOGO from "../../assets/images";

type Props = {
  functionName: string;
};

const TitleBar: React.FC<Props> = (props) => {
  return (
    <View style={styles.title}>
      <View style={styles.menuiconContainer}>
        <Image
          source={require("../../assets/icons/menu.png")}
          style={{
            width: 26,
            height: 26,
            position: "relative",
            top: 12,
            alignSelf: "center",
            alignItems: "center",
          }}
        />
      </View>
      <View style={styles.moduleName}>
        <Text style={{ fontSize: 22 }}>{props.functionName}</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={APPLOGO}
          style={{
            width: 130,
            height: 45,
            marginRight: 5,
          }}
        />
        <Text style={styles.text}>all at your fingers</Text>
      </View>
    </View>
  );
};

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    width: width - 10,
    height: 50,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    verticalAlign: "middle",
  },
  menuiconContainer: {
    width: 50,
    height: 50,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  logoContainer: {
    width: 150,
    height: 50,
    paddingRight: 5,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  moduleName: {
    width: width - 180,
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    width: 130,
    fontSize: 8,
    textAlign: "center",
  },
});

export default TitleBar;
