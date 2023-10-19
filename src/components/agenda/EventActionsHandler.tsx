import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import FetchData from "../../services/FetchData";
import ReportSection from "../repo/ReportSection";
import { Events } from "../../modules/Events";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ParamList } from "../../../App";

const EventActionHandler = () => {
  console.log("EventActionHandler");
  const navigation = useNavigation();

  const route = useRoute<RouteProp<ParamList, "EventActionHandler">>();
  const event: Events = route.params.event;

  console.debug("event passed ", event);

  const { data, isLoading, error } = FetchData(
    "post",
    "restcall/agenda/getReports",
    {
      idCompany: event.idCompany,
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
          <ReportSection event={event} />
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
    flexDirection: "column",
    backgroundColor: "white",
  },
  repo: {
    width: width - 20,
    height: 150,
    position: "relative",
    top: 50,
    left: 10,

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

export default EventActionHandler;
