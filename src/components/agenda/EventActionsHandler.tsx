import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/types';
import { Events } from '../../modules/Events';
import FetchData from '../../services/FetchData';
import { Reports } from '../../modules/Reports';

type EventActionHandlerRouteProp = RouteProp<AppStackParamList, 'EventActionHandler'>;
type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'EventActionHandler'>;

const EventActionHandler = () => {
  const route = useRoute<EventActionHandlerRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const event: Events = route.params.event;

  console.debug('event passed ', event);

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

  const handleEditEvent = () => {
    console.log('TODO: navigate to Edit Event screen');
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Actions for: {event.description}</Text>

      {isLoading ? (
        <ActivityIndicator size="large" color="#312651" />
      ) : error ? (
        <Text style={styles.errorText}>Something went wrong while loading reports</Text>
      ) : (
        <>
          <TouchableOpacity style={styles.menuButton} onPress={handleViewReports}>
            <Text style={styles.menuButtonText}>📄 View Reports</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuButton} onPress={handleEditEvent}>
            <Text style={styles.menuButtonText}>📝 Edit Event (Coming Soon)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => console.log('TODO: add more actions')}
          >
            <Text style={styles.menuButtonText}>➕ More Options</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DCF8C6',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  menuButton: {
    backgroundColor: '#312651',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  menuButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default EventActionHandler;
