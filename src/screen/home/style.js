import {StyleSheet, Dimensions} from 'react-native';

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
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  iconStyle: {
    fontSize: 30,
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
    top: height * 0.05,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  modalTitle: {
    fontSize: 16,
    color: '#222f3e',
    fontWeight: '700',
    paddingHorizontal: 5,
  },
  containerModalTitle: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 150,
    resizeMode: 'cover',
  },
  containerAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  avatarText: {
    fontSize: 16,
    color: '#6B5AED',
    fontWeight: 'bold',
  },
  containerDesc: {
    // backgroundColor: 'yellow',
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
    height: 200,
  },
  textSmall: {
    fontSize: 16,
    color: 'grey',
    marginVertical: 5,
  },
  containerDelete: {
    backgroundColor: '#E85F60',
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    width: width * 0.8,
    bottom: 20,
  },
  textButton: {
    fontSize: 14,
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
    fontSize: 18,
    color: 'grey',
    marginVertical: 5,
    marginRight: 5,
  },
});
