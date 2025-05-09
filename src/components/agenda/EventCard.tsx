import React from 'react';
import { Events } from '../../modules/Events';

import dayjs from 'dayjs';
import styles from './Agenda.style';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import * as icons from '../../../assets/icons/index';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/types';

type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'EventActionHandler'>;

type Props = {
  event: Events;
};

const EventCard: React.FC<Props> = ({ event }) => {
  const navigation = useNavigation<NavigationProp>();

  let invitees: string = '';
  let separator: string = '';

  event?.participants?.forEach(participant => {
    invitees += separator + participant.familyName;
    separator = ', ';
  });

  const phoneCall = require('../../../assets/icons/phoneCall.png');
  const videoCall = require('../../../assets/icons/videoCall.png');
  const meetInPerson = require('../../../assets/icons/meetInPerson.png');
  const whiteIcon = require('../../../assets/icons/iconaBianca.png');

  let iconName: any = whiteIcon;

  switch (event?.iconName) {
    case 'phoneCall':
      iconName = phoneCall;
      break;
    case 'videoCall':
      iconName = videoCall;
      break;
    case 'meetInPerson':
      iconName = meetInPerson;
      break;
  }

  const handlePress = (): void => {
    console.log('Calling EventActionHandler passing event with id ', event?.idEvent);
    navigation.navigate('EventActionHandler', { event });
  };

  return (
    <TouchableOpacity
      style={[styles.cardContainer, { flex: 1 }]}
      onPress={handlePress}
    >
      <View style={[styles.dataContainer, styles.shadowProp, { flex: 1 }]}>
        <View style={styles.textContainer}>
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
          <Image source={iconName} style={styles.imgLogo} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
