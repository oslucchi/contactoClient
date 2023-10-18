import React from "react";
import UpcomingCard from "./UpcomingCard";
import FetchData from "../../services/FetchData";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { Events } from "../modules/Events";

const Upcoming: React.FC = () => {
  console.log("Upcoming");
  const { data, isLoading, error } = FetchData(
    "post",
    "restcall/agenda/schedule",
    {
      numOfFutureItems: 5,
      idOwner: 1,
    }
  );

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#312651" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <ScrollView style={{ paddingTop: 20 }}>
          {data?.map((event: Events) => (
            <UpcomingCard key={event?.idEvent} event={event} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Upcoming;
