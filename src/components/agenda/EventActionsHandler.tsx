import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import FetchData from '../../services/FetchData';
import ReportSection from '../repo/ReportSection';
import {Events} from '../../modules/Events';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ParamList} from '../../../App';


const EventActionHandler = () => {
  console.log('EventActionHandler');
  const navigation = useNavigation();

  const route = useRoute<RouteProp<ParamList, 'EventActionHandler'>>();
  const event: Events = route.params.event;

  console.debug('event passed ', event);

  const {isLoading, error} = FetchData('post', 'restcall/agenda/getReports', {
    idCompany: event.idCompany,
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#312651" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <>
          <View style={{ flex: 1, maxHeight: '92%' }}>
            <ReportSection event={event} />
          </View>
          <View style={styles.footer}>
            <Button
              title="BACK"
              color="#312651"
              onPress={() => navigation.goBack()}
            />
          </View>
        </>
      )}
    </View>
  );
};

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  repo: {
    width: width - 20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 20,
    backgroundColor: '#DCF8C6',
  },
  footer: {
    // NO flex: 1 here!
    justifyContent: 'flex-end',
  },  
});

export default EventActionHandler;
