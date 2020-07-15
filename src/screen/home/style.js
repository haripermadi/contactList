import {StyleSheet, Dimensions} from 'react-native';
import Scaling from '../../helper/Scaling';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    paddingHorizontal: 5,
    height: height * 0.9,
  },
  containerList: {
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
  title: {
    fontSize: Scaling.moderateScale(24),
    color: '#000',
    fontWeight: 'bold',
  },
  containerTitle: {
    marginVertical: Scaling.moderateScale(10),
  },
  addButton: {
    backgroundColor: '#6B5AED',
    height: Scaling.moderateScale(60),
    width: Scaling.moderateScale(60),
    position: 'absolute',
    bottom: Scaling.moderateScale(10),
    right: Scaling.moderateScale(20),
    borderRadius: Scaling.moderateScale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: Scaling.moderateScale(34),
    fontWeight: 'bold',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  iconStyle: {
    fontSize: Scaling.moderateScale(30),
    fontWeight: 'bold',
  },
  textPurple: {
    color: '#6B5AED',
  },
  textRed: {
    color: '#E85F60',
  },
  containerModal: {
    flex: 1,
    backgroundColor: 'white',
    top: height * 0.02,
    borderTopStartRadius: Scaling.moderateScale(10),
    borderTopEndRadius: Scaling.moderateScale(10),
    paddingTop: Scaling.moderateScale(10),
    paddingHorizontal: 5,
  },
  modalTitle: {
    fontSize: Scaling.moderateScale(16),
    color: '#222f3e',
    fontWeight: '700',
    paddingHorizontal: 5,
  },
  containerModalTitle: {
    flexDirection: 'row',
    marginVertical: Scaling.moderateScale(5),
    alignItems: 'center',
  },
  containerDesc: {
    // backgroundColor: 'yellow',
    paddingVertical: Scaling.moderateScale(10),
    marginVertical: Scaling.moderateScale(10),
    alignItems: 'center',
    height: Scaling.moderateScale(200),
  },
  textSmall: {
    fontSize: Scaling.moderateScale(16),
    color: 'grey',
    marginVertical: 5,
  },
  containerDelete: {
    backgroundColor: '#E85F60',
    paddingVertical: Scaling.moderateScale(10),
    borderRadius: 5,
    position: 'absolute',
    width: width * 0.8,
    bottom: Scaling.moderateScale(20),
  },
  textButton: {
    fontSize: Scaling.moderateScale(14),
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerModalInside: {
    // backgroundColor: 'yellow',
    height: height * 0.7,
    alignItems: 'center',
  },
  textMedium: {
    fontSize: Scaling.moderateScale(18),
    color: 'grey',
    marginVertical: 5,
    marginRight: 5,
  },
});
