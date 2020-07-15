import {StyleSheet} from 'react-native';
import Scaling from '../../helper/Scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 5,
    shadowColor: '#70a1ff',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: Scaling.moderateScale(10),
    borderRadius: Scaling.moderateScale(10),
    alignItems: 'center',
    paddingVertical: Scaling.moderateScale(10),
  },
  textContent: {
    fontSize: Scaling.moderateScale(16),
    color: '#2f3542',
    fontWeight: 'bold',
  },
  image: {
    width: Scaling.moderateScale(50),
    height: Scaling.moderateScale(50),
    resizeMode: 'cover',
    borderRadius: Scaling.moderateScale(50),
  },
  containerImage: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: Scaling.moderateScale(60),
    marginHorizontal: 5,
  },
  containerDesc: {
    flex: 1,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
});
