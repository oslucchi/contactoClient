import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    // borderWidth: 1,
    borderColor: 'red'
  },
  header: {
    height: '10%',
    minHeight: 40,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    directions: 'inherit',
    flexWrap: 'nowrap',
    // borderWidth: 1,
    borderColor: 'blu'
  },
  footer: {
    height: '15%',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#DCF8C6',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    directions: 'inherit',
    flexWrap: 'nowrap',
    // borderWidth: 1,
    borderColor: 'orange'
  },
  iconContainer: {
    width: 60,
    height: 60,
  },
  iconContainerSmall: {
    width: 35,
    height: 35,
  },
  reportsContainer: {
    height: '75%',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#DCF8C6',
    // borderWidth: 1,
    borderColor: 'black'
  },
  reportItem: {
    width: '100%',
    borderColor: 'cyan',
    // borderWidth: 1
  },
});

export default styles;
