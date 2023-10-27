import React from 'react';
import { View } from 'react-native';
import styles from './Agenda.style';
import EventsUpcoming from './EventsUpcoming';

const Agenda = () => {
  return (
    <View style={styles.appContainer}>
      <EventsUpcoming />
    </View>
  );
};

export default Agenda;
