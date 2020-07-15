import {StyleSheet} from 'react-native';
import Scaling from '../../helper/Scaling';

export default StyleSheet.create({
  containerInputForm: {
    // flexDirection: 'row',
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: Scaling.moderateScale(10),
    marginHorizontal: 3,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
  containerFormTitle: {
    // backgroundColor: 'violet',
    // flex: 1,
  },
  textTitleInput: {
    fontSize: Scaling.moderateScale(14),
    color: '#222f3e',
  },
  textInputStyle: {
    height: Scaling.moderateScale(35),
    paddingHorizontal: 5,
  },
});
