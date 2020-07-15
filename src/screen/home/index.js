import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import styles from './style';
import ListItem from '../../component/list-item';
import FormInput from '../../component/form-input';

import {
  fetchContactListAsync,
  postNewContactAsync,
  fetchByIdContactAsync,
  deleteContactAsync,
  editContactAsync,
} from '../../redux/contact/contact.actions';
import {checkAlphanumeric} from '../../helper/index';

const {height} = Dimensions.get('window');

class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      // contactList: [],
      modalVisible: false,
      firstName: '',
      lastName: '',
      age: 1,
      photo:
        'https://www.pngitem.com/pimgs/m/421-4212341_default-avatar-svg-hd-png-download.png',
      modalDetailVisible: false,
      detail: {},
      isEdit: false,
    };
  }

  componentDidMount() {
    // this.getContactList();
    this.props.getContactList();
  }

  handleInputModal = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleAdd = async () => {
    try {
      const {firstName, lastName, age, photo, detail, isEdit} = this.state;
      const {contactDetail} = this.props;
      if (!firstName || !lastName || !age) {
        return Alert.alert(
          'Error',
          'Please Fill the field',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      }
      if (firstName.length < 3 || lastName.length < 3) {
        return Alert.alert(
          'Error',
          'first name and last name minimum 3 characters',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else if (age > 200 || age < 1) {
        return Alert.alert(
          'Error',
          'Age must be larger than 1 and less than 200',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else if (
        !checkAlphanumeric(firstName) ||
        !checkAlphanumeric(lastName)
      ) {
        return Alert.alert(
          'Error',
          'First name and last name must only contain alpha-numeric characters',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      }
      let input = {
        firstName,
        lastName,
        age: parseInt(age),
        photo: photo ? photo : 'N/A',
      };
      console.log('input----', input);
      if (isEdit) {
        await this.props.editContact(contactDetail.id, input);
        this.setState({modalVisible: false});
        this.props.getContactList();
      } else {
        await this.props.postNewContact(input);
        this.props.getContactList();
        this.setState({modalVisible: false});
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
      modalDetailVisible: false,
      firstName: '',
      lastName: '',
      age: null,
      photo: '',
    });
  };

  goToDetail = async (id) => {
    await this.props.fetchContactById(id);
    this.setState({
      modalDetailVisible: true,
    });
  };

  handleDelete = async () => {
    let id = this.props.contactDetail.id;
    console.log('delete id----', id);
    await this.props.deleteContact(id);
    this.setState({
      modalDetailVisible: false,
    });
    this.props.getContactList();
  };

  loadErrorImage = () => {
    console.log('load error---------');
    this.setState((prevState) => ({
      detail: {
        ...prevState.detail,
        photo: 'https://api.adorable.io/avatars/285/avatar.png',
      },
    }));
  };

  handleGoToEdit = () => {
    let data = this.props.contactDetail;
    console.log('gotoedit----', data);
    this.setState({
      modalDetailVisible: false,
    });
    setTimeout(() => {
      this.setState({
        // modalDetailVisible: false,
        modalVisible: true,
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        photo: data.photo,
        isEdit: true,
      });
    }, 500);
  };

  handleImagePicker = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      maxWidth: 600,
      maxHeight: 600,
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('imagepicker---Response === ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = 'data:image/jpeg;base64,' + response.data;

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log('source----', source);

        this.setState({
          photo: source,
        });
      }
    });
  };

  renderAddButton() {
    return (
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => this.setState({modalVisible: true})}>
        <Text style={styles.addButtonText}>&#43;</Text>
      </TouchableOpacity>
    );
  }

  renderModalInput() {
    const {modalVisible, firstName, lastName, age, photo, isEdit} = this.state;
    console.log('modalinput----', this.state);
    return (
      <View>
        <Modal
          isVisible={modalVisible}
          style={{marginHorizontal: 0}}
          onBackdropPress={() => this.setState({modalVisible: false})}>
          <View style={styles.containerModal}>
            <View style={styles.containerHeader}>
              <TouchableOpacity onPress={this.handleCloseModal}>
                <Icon
                  name={'close'}
                  style={[styles.iconStyle, styles.textRed]}
                  color={'#000'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleAdd}>
                <Icon
                  name={'check'}
                  style={[styles.iconStyle, styles.textPurple]}
                  color={'#000'}
                />
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.containerModalTitle}>
                <Icon
                  name={'note-text-outline'}
                  style={styles.iconStyle}
                  color={'#000'}
                />
                <Text style={styles.modalTitle}>
                  {isEdit ? 'Edit Contact' : 'New Contact'}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.containerAvatar}
                onPress={this.handleImagePicker}>
                <Image
                  source={{
                    uri: photo,
                  }}
                  style={styles.avatar}
                />
                <Text style={styles.avatarText}>
                  {isEdit ? 'Edit' : 'Add Photo'}
                </Text>
              </TouchableOpacity>
              <View>
                <FormInput
                  title={'First Name'}
                  valueName={'firstName'}
                  isNumeric={false}
                  handleInput={this.handleInputModal}
                  value={firstName}
                />
                <FormInput
                  title={'Last Name'}
                  valueName={'lastName'}
                  isNumeric={false}
                  handleInput={this.handleInputModal}
                  value={lastName}
                />
                <FormInput
                  title={'Age'}
                  valueName={'age'}
                  isNumeric={true}
                  handleInput={this.handleInputModal}
                  value={age}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  renderModalDetail() {
    const {modalDetailVisible} = this.state;
    const {contactDetail} = this.props;
    return (
      <View>
        <Modal
          isVisible={modalDetailVisible}
          style={{marginHorizontal: 0}}
          onBackdropPress={() => this.setState({modalDetailVisible: false})}
          onSwipeComplete={() => this.setState({modalDetailVisible: false})}
          swipeDirection="down">
          <View style={styles.containerModal}>
            <View style={styles.containerHeader}>
              <TouchableOpacity onPress={this.handleCloseModal}>
                <Icon
                  name={'close'}
                  style={[styles.iconStyle, styles.textRed]}
                  color={'#000'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleGoToEdit}>
                <Text style={[styles.textMedium]}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerModalInside}>
              <View style={styles.containerAvatar}>
                <Image
                  source={{
                    uri: contactDetail.photo,
                  }}
                  style={styles.avatar}
                  // onError={this.loadErrorImage}
                />
              </View>
              <View style={styles.containerDesc}>
                <Text
                  style={
                    styles.title
                  }>{`${contactDetail.firstName} ${contactDetail.lastName}`}</Text>
                <Text style={styles.textSmall}>
                  {contactDetail.age} years old
                </Text>
              </View>

              <TouchableOpacity
                style={styles.containerDelete}
                onPress={this.handleDelete}>
                <Text style={styles.textButton}>Delete Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  render() {
    console.log('state=====', this.state, '--props---', this.props);
    const {contacts} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Contact List</Text>
        </View>
        {contacts.length > 0 && (
          <View style={{height: height * 0.83}}>
            <FlatList
              data={contacts}
              renderItem={({item}) => (
                <ListItem
                  key={item.id}
                  {...item}
                  handleDetail={this.goToDetail}
                />
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.containerList}
              showsVerticalScrollIndicator={false}
              extraData={this.state}
            />
          </View>
        )}
        {this.renderAddButton()}
        {this.renderModalInput()}
        {this.renderModalDetail()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contact.contacts,
    isLoading: state.contact.isLoading,
    contactDetail: state.contact.contactDetail,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getContactList: () => dispatch(fetchContactListAsync()),
  postNewContact: (input) => dispatch(postNewContactAsync(input)),
  fetchContactById: (id) => dispatch(fetchByIdContactAsync(id)),
  deleteContact: (id) => dispatch(deleteContactAsync(id)),
  editContact: (id, input) => dispatch(editContactAsync(id, input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
