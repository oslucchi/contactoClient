import React from "react";
import { View, Text } from "react-native";
import styles from "./reports.style";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ParamList } from "../../../App";
import { Events } from "../../modules/Events";

const ReportAddItem = () => {
  console.log("ReportAddItem");
  const route = useRoute<RouteProp<ParamList, "ReportAddItem">>();
  const idEvent: number = route.params.idEvent;
  const idUser: number = route.params.idUser;

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ justifyContent: "flex-start" }}>
        <Text>AddReport</Text>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <Text onPress={() => navigation.goBack()}>BACK</Text>
      </View>
    </View>
  );
};

export default ReportAddItem;
