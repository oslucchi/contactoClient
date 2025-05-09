import React from 'react';
import EventCard from './EventCard';
import FetchData from '../../services/FetchData';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import { Events } from '../../modules/Events';
import styles from '../../styles/Application.styles';

const EventsUpcoming: React.FC = () => {
  console.log('EventsUpcoming');

  const { data, isLoading, error } = FetchData(
    'post',
    'restcall/agenda/schedule',
    {
      numOfFutureItems: 5,
      idOwner: 1,
    },
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerArea}>
        <Text> Optional Title</Text>
      </View>

      <View style={styles.bodyContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#312651" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <ScrollView
            contentContainerStyle={{ paddingVertical: 12, paddingBottom: 20 }}
          >
            {data?.map((event: Events) => (
              <EventCard key={event?.idEvent} event={event} />
            ))}
          </ScrollView>
        )}
      </View>

      <View style={styles.featureIconsArea}>
        {<Text> Room for Icons </Text>}
      </View>

      <View style={styles.systemButtonsBand}>
        {<Text> Optional Footre </Text>}
      </View>
    </View>
  );
};

export default EventsUpcoming;