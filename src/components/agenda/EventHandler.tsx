import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BaseButton } from "react-native-gesture-handler";
import FetchData from "../services/FetchData";
import { Reports } from "../modules/Reports";
import dayjs from "dayjs";
import ReportItem from "./ReportItem";

const EventHandler = () => {
  const navigation = useNavigation();
  console.log("EventHandler");

  const { data, isLoading, error } = FetchData(
    "post",
    "restcall/agenda/getReports",
    {
      idCompany: 1,
    }
  );

  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#312651" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <View>
          <Text style={{ fontSize: 24, justifyContent: "flex-start" }}>
            Report
          </Text>
          <ScrollView style={styles.repo}>
            {data?.map((report: Reports) => (
              <ReportItem key={report?.idReport} report={report} />
            ))}
          </ScrollView>
          <View
            style={[
              styles.footer,
              {
                width: 200,
                height: 50,
                alignItems: "center",
                alignSelf: "center",
              },
            ]}
          >
            <Button
              title="BACK"
              color="#312651"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: width - 6,
    height: height,
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "column",
    backgroundColor: "white",
  },
  repo: {
    flex: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingtop: 20,
    backgroundColor: "#DCF8C6",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default EventHandler;
