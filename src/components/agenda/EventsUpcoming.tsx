import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
} from 'react-native';

import EventCard from './EventCard';
import FetchData from '../../services/FetchData';
import { Events } from '../../modules/Events';
import BaseScreen from '../BaseScreen';

const EventsUpcoming: React.FC = () => {
  const { data, isLoading, error } = FetchData(
    'post',
    'restcall/agenda/schedule',
    {
      numOfFutureItems: 5,
      idOwner: 1,
    },
  );

  const renderContent = () => {
    if (isLoading) return <ActivityIndicator size="large" color="#312651" />;
    if (error) return <Text>Something went wrong</Text>;
    if (!data?.length) return <Text>No upcoming events.</Text>;

    return (
      <ScrollView contentContainerStyle={{ paddingVertical: 12 }}>
        {data.map((event: Events) => (
          <EventCard key={event?.idEvent} event={event} />
        ))}
      </ScrollView>
    );
  };

  return (
    <BaseScreen
      header={<Text>Optional Title</Text>}
      body={renderContent()}
      featureIcons={<Text>Room for Icons</Text>}
      footer={<Text>Optional Footer</Text>}
    />
  );
};

export default EventsUpcoming;
