import {StyleSheet} from 'react-native';
import {SIZES, FONT} from '../../constants/theme';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  scheduleContainer: {
    flex: 1,
    padding: 16,
  },  
  upcomingCardsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  cardContainer: {
    width: '100%', // very important to occupy full width
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  // cardContainer: {
  //   width: width - 20,
  //   paddingLeft: 30,
  //   flex: 1,
  //   flexDirection: 'column',
  //   backgroundColor: 'white',
  // },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    // no need for width or flex here unless you want more control
  },
  
  // dataContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   width: '90%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   zIndex: 1,
  //   textAlign: 'center',
  //   borderRadius: 10,
  //   backgroundColor: 'white',
  //   paddingLeft: '2%',
  // },

  textContainer: {
    width: '80%',
  },

  imgContainer: {
    width: '20%',
  },

  imgLogo: {
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  dateAndTopic: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeAndCompany: {
    alignItems: 'center',
    marginTop: SIZES.small,
    fontSize: SIZES.small,
  },
  participants: {
    fontSize: SIZES.xSmall,
  },
  shadowProp: {
    elevation: 10, // Android
    shadowColor: '#444444', // IOS
    shadowOffset: {height: 1, width: 0}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 10,
  },

  safeArea: {
    flex: 1,
    paddingTop: 40,
  },

  appContainer: {
    flex: 1,
    paddingTop: SIZES.medium,
    alignItems: 'stretch',   // <-- THIS is critical
    flexDirection: 'column',
    fontFamily: 'Montserrat-Italic',
    backgroundColor: '#FFFFFF',
  },
  
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    textAlign: 'center',
  },
  appLogo: {
    width: 150,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    zIndex: 1,
  },
});

export default styles;
