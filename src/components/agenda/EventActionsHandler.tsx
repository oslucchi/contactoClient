import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Events } from '../../modules/Events';
import { Reports } from '../../modules/Reports';
import { AppStackParamList } from '../../navigation/types';
import FetchData from '../../services/FetchData';
import styles from '../../styles/Application.styles';
import BaseScreen from '../BaseScreen';

type EventActionHandlerRouteProp = RouteProp<AppStackParamList, 'EventActionHandler'>;
type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'EventActionHandler'>;

const EventActionHandler: React.FC = () => {
  const route = useRoute<EventActionHandlerRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const event: Events = route.params.event;

  const { data: fetchedData, isLoading, error } = FetchData(
    'post',
    'restcall/agenda/getReports',
    {
      idCompany: event.idCompany,
    },
  );

  const handleViewReports = () => {
    if (fetchedData) {
      navigation.navigate('ReportSection', {
        event,
        data: fetchedData as Reports[],
      });
    }
  };

  const bodyContent = isLoading ? (
    <ActivityIndicator size="large" color="#312651" />
  ) : error ? (
    <Text style={styles.participants}>Something went wrong</Text>
  ) : (
    <>
      <TouchableOpacity style={styles.menuButton} onPress={handleViewReports}>
        <Text style={styles.menuButtonText}>📄 View Reports</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => console.log('Edit Event')}>
        <Text style={styles.menuButtonText}>📝 Edit Event</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => console.log('Other options')}>
        <Text style={styles.menuButtonText}>➕ More Options</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <BaseScreen
      header={<Text style={styles.dateAndTopic}>Event: {event.description}</Text>}
      body={bodyContent}
      featureIcons={null}
      footer={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.menuButtonText}>← BACK</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default EventActionHandler;
