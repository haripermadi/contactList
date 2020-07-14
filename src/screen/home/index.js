import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME</Text>
      </View>
    );
  }
}

export default Home;
