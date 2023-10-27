import React from 'react';
import EventCard from './EventCard';
import FetchData from '../../services/FetchData';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {Events} from '../../modules/Events';
import styles from './Agenda.style';

type Props = {};

const EventsUpcoming: React.FC<Props> = () => {
  console.log('EventsUpcoming');

  const {data, isLoading, error} = FetchData(
    'post',
    'restcall/agenda/schedule',
    {
      numOfFutureItems: 5,
      idOwner: 1,
    },
  );

  return (
    <View style={styles.scheduleContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#312651" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <ScrollView style={styles.upcomingCardsContainer}>
          {data?.map((event: Events) => (
            <EventCard key={event?.idEvent} event={event} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default EventsUpcoming;
