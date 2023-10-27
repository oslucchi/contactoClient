import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 5,
    height: height - 5,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: '8%',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    directions: 'inherit',
    flexWrap: 'nowrap',
  },
  iconContainer: {
    width: 40,
    height: 40,
  },
  reportsContainer: {
    maxHeight: '45%',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#DCF8C6',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  reportItem: {
    width: '95%',
  },
});

export default styles;
