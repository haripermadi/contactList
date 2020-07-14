import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 5,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  textContent: {
    fontSize: 16,
    color: '#2f3542',
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  containerImage: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 60,
    marginHorizontal: 5,
  },
  containerDesc: {
    flex: 1,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
});
