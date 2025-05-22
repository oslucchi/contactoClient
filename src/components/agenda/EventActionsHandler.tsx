import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Events } from '../../modules/Events';
import { AppStackParamList } from '../../navigation/types';
import FetchData from '../../services/FetchData';
import { Reports } from '../../modules/Reports';
import styles from '../../styles/Application.styles';

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

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerArea}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>
          Event: {event.description}
        </Text>
      </View>

      <View style={styles.bodyContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#312651" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={handleViewReports}
            >
              <Text style={styles.menuButtonText}>📄 View Reports</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => console.log('Edit Event')}
            >
              <Text style={styles.menuButtonText}>📝 Edit Event</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => console.log('Other options')}
            >
              <Text style={styles.menuButtonText}>➕ More Options</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <View style={styles.featureIconsArea} />
      <View style={styles.systemButtonsBand}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: '#312651', fontWeight: 'bold', fontSize: 16, textAlign: 'center', paddingTop: 18 }}>
            ← BACK
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EventActionHandler;
