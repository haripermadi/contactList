import React from 'react';
import {View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import axios from 'axios';

import styles from './style';
import ListItem from '../../component/list-item';

const {height} = Dimensions.get('window');

class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      contactList: [],
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

  renderAddButton() {
    return (
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>&#43;</Text>
      </TouchableOpacity>
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
              renderItem={({item}) => <ListItem key={item.key} {...item} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.containerList}
              showsVerticalScrollIndicator={false}
              extraData={this.state}
            />
          </View>
        )}
        {this.renderAddButton()}
      </View>
    );
  }
}

export default Home;
