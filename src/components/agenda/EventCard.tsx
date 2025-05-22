import React from 'react';
import { Events } from '../../modules/Events';

import dayjs from 'dayjs';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import * as icons from '../../../assets/icons/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/types';
import styles from '../../styles/Application.styles';

type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'EventActionHandler'>;

type Props = {
  event: Events;
};

const EventCard: React.FC<Props> = ({ event }) => {
  const navigation = useNavigation<NavigationProp>();

  console.log('EventCard');

  let invitees = '';
  let separator = '';

  event?.participants?.forEach(participant => {
    invitees += separator + participant.familyName;
    separator = ', ';
  });

  let iconName = icons.default.iconaBianca;
  switch (event?.iconName) {
    case 'phoneCall':
      iconName = icons.default.phoneCall;
      break;
    case 'videoCall':
      iconName = icons.default.videoCall;
      break;
    case 'meetInPerson':
      iconName = icons.default.meetInPerson;
      break;
  }

  const handlePress = (): void => {
    console.log('Calling EventActionHandler passing event with id ', event?.idEvent);
    navigation.navigate('EventActionHandler', { event });
  };

  return (
    <TouchableOpacity 
      style={styles.cardContainer} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={[styles.cardContent, styles.shadowProp]}>
        <View style={styles.textBlock}>
          <Text numberOfLines={1} style={styles.dateAndTopic}>
            {dayjs(event?.date).format('MM/DD')} - {event?.description}
          </Text>
          <Text numberOfLines={1} style={styles.timeAndCompany}>
            {dayjs(event?.date).format('HH:mm')} -{' '}
            {dayjs(event?.date).add(event?.duration, 'minute').format('HH:mm')}  
            {event?.company}
          </Text>
          {event.participants ? (
            <Text numberOfLines={1} style={styles.participants}>
              {invitees}
            </Text>
          ) : (
            <Text numberOfLines={1} />
          )}
        </View>
        <View style={styles.imgContainer}>
          <Image source={iconName} style={styles.icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
