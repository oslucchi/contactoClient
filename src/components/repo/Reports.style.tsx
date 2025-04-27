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
  },
  iconContainer: {
    width: 40,
    height: 40,
  },
  iconContainerSmall: {
    width: 35,
    height: 35,
  },
  reportsContainer: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#DCF8C6',
    borderRadius: 8,
    overflow: 'hidden',   // optional for rounded edges
  },
  footer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  reportItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 12,
    paddingHorizontal: 8,
    width: '95%',
    
  },
});

export default styles;
