import {StyleSheet} from 'react-native';
import Scaling from '../../helper/Scaling';

export default StyleSheet.create({
  avatar: {
    height: Scaling.moderateScale(150),
    width: Scaling.moderateScale(150),
    borderRadius: Scaling.moderateScale(150),
    resizeMode: 'cover',
    borderWidth: 0.5,
    borderColor: '#dfe4ea',
  },
  containerAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Scaling.moderateScale(30),
  },
  avatarText: {
    fontSize: Scaling.moderateScale(16),
    color: '#6B5AED',
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
