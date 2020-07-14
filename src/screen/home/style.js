import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    paddingHorizontal: 5,
  },
  containerList: {
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  containerTitle: {
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#6B5AED',
    height: 60,
    width: 60,
    position: 'absolute',
    bottom: 10,
    right: 20,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
  },
});
