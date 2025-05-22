import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DCF8C6', // app-wide green
  },
  headerArea: {
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#DCF8C6',
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top',
    color: '#111111',
    backgroundColor: '#DCF8C6',
  },
  
  featureIconsArea: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DCF8C6',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  systemButtonsBand: {
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  cardContainer: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCF8C6',
    borderRadius: 8,
    padding: 12,
  },
  
  textBlock: {
    width: '80%',
  },
  
  imgContainer: {
    width: '20%',
    alignItems: 'center',
  },
  
  dateAndTopic: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  
  timeAndCompany: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  
  participants: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
  
  shadowProp: {
    elevation: 4,
    shadowColor: '#444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
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


export default styles;
