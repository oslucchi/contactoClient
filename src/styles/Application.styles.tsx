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

  reportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    gap: 8,
  },

  reportTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  reportHeaderControls: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
    gap: 8,
  },

  reportControlButtonText: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  reportItemContainer: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  reportDate: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 4,
  },

  reportSummary: {
    fontSize: 12,
    color: '#666',
  },

  reportFullText: {
    fontSize: 14,
    color: '#111',
  },
  
  reportDetailsHeader: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  reportDetailsHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  },

  reportDetailsBody: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  reportDetailsDate: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 12,
  },

  reportDetailsContent: {
    fontSize: 16,
    color: '#111',
  },

  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },

  footerButtonText: {
    color: '#312651',
    fontWeight: 'bold',
    fontSize: 16,
  },

  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
});


export default styles;
