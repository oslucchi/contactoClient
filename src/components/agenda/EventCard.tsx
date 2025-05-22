import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import dayjs from 'dayjs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as icons from '../../../assets/icons/index';
import { Events } from '../../modules/Events';
import { AppStackParamList } from '../../navigation/types';
import styles from '../../styles/Application.styles';

type NavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'EventActionHandler'
>;

type Props = {
  event: Events;
};

const EventCard: React.FC<Props> = ({ event }) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (): void => {
    console.log('Navigating to EventActionHandler with event ID', event?.idEvent);
    navigation.navigate('EventActionHandler', { event });
  };

  // Format participants
  const invitees = event?.participants
    ?.map(p => p.familyName)
    .join(', ') || '';

  // Select icon
  const iconName = (() => {
    switch (event?.iconName) {
      case 'phoneCall':
        return icons.default.phoneCall;
      case 'videoCall':
        return icons.default.videoCall;
      case 'meetInPerson':
        return icons.default.meetInPerson;
      default:
        return icons.default.iconaBianca;
    }
  })();

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

          {invitees !== '' && (
            <Text numberOfLines={1} style={styles.participants}>
              {invitees}
            </Text>
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
