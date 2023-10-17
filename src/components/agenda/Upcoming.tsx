import React from "react";
import UpcomingCard from "./UpcomingCard";
import FetchData from "../../services/FetchData";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const Upcoming: React.FC = () => {
  const { data, isLoading, error } = FetchData(
    "post",
    "restcall/agenda/schedule",
    {
      numOfFutureItems: 5,
      idOwner: 1,
    }
  );

  const handleEvent = (idEvent: number) => {
    console.log("handleEvent called back on event " + idEvent);
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#312651" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <ScrollView style={{ paddingTop: 20 }}>
          {data?.map((event) => (
            <UpcomingCard
              event={event}
              key={event?.idEvent}
              handlePress={handleEvent}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Upcoming;
