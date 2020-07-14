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

import styles from './style';
import ListItem from '../../component/list-item';
import FormInput from '../../component/form-input';

const {height} = Dimensions.get('window');

class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      contactList: [],
      modalVisible: false,
      firstName: '',
      lastName: '',
      age: null,
      photo: '',
      modalDetailVisible: false,
      detail: {},
      isEdit: false,
    };
  }

  componentDidMount() {
    this.getContactList();
  }

  getContactList = async () => {
    try {
      const response = await axios.get(
        'https://simple-contact-crud.herokuapp.com/contact',
      );
      console.log('res----', response);
      this.setState({contactList: response.data.data});
    } catch (err) {
      console.log(err.message);
    }
  };

  handleInputModal = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleAdd = async () => {
    try {
      const {firstName, lastName, age, photo, detail, isEdit} = this.state;
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
      }
      let input = {
        firstName,
        lastName,
        age,
        photo: photo ? photo : 'N/A',
      };
      console.log('input----', input);
      if (isEdit) {
        const response = await axios.put(
          `https://simple-contact-crud.herokuapp.com/contact/${detail.id}`,
          input,
        );
        console.log('res-edit---', response);
        this.setState({modalVisible: false});
        this.getContactList();
      } else {
        const response = await axios.post(
          'https://simple-contact-crud.herokuapp.com/contact',
          input,
        );
        console.log('res----', response);
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
    try {
      const response = await axios.get(
        `https://simple-contact-crud.herokuapp.com/contact/${id}`,
      );
      console.log('detail----', response);
      this.setState({
        modalDetailVisible: true,
        detail: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleDelete = async () => {
    try {
      let id = this.state.detail.id;
      console.log('delete id----', id);
      const response = await axios.delete(
        `https://simple-contact-crud.herokuapp.com/contact/${id}`,
      );
      console.log('delete----', response);
      this.setState({
        modalDetailVisible: false,
        detail: {},
      });
    } catch (error) {
      Alert.alert(
        'Error',
        error.message,
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
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
    let data = this.state.detail;
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
              <TouchableOpacity style={styles.containerAvatar}>
                <Image
                  source={{
                    uri:
                      'https://www.pngitem.com/pimgs/m/421-4212341_default-avatar-svg-hd-png-download.png',
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
    const {modalDetailVisible, detail} = this.state;
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
                    uri: detail.photo,
                  }}
                  style={styles.avatar}
                  onError={this.loadErrorImage}
                />
              </View>
              <View style={styles.containerDesc}>
                <Text
                  style={
                    styles.title
                  }>{`${detail.firstName} ${detail.lastName}`}</Text>
                <Text style={styles.textSmall}>{detail.age} years old</Text>
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
    console.log('state=====', this.state);
    const {contactList} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Contact List</Text>
        </View>
        {contactList.length > 0 && (
          <View style={{height: height * 0.83}}>
            <FlatList
              data={contactList}
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
        <>
          {this.renderModalInput()}
          {this.renderModalDetail()}
        </>
      </View>
    );
  }
}

export default Home;
