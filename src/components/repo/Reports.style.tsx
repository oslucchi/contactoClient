import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for the top band
  },
  header: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#DCF8C6', // Green background for the body
    padding: 16,
  },
  featureIconsArea: {
    height: 80,
    backgroundColor: '#DCF8C6',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  systemButtonsBand: {
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#111111',
    backgroundColor: '#DCF8C6',
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  disabledIcon: {
    opacity: 0.3,
  },
  reportItemContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 12,
    color: '#777',
  },
  footerButton: {
    backgroundColor: '#34B7F1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  footerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
