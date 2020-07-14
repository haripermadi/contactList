import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import styles from './style';

const ListItem = (props) => {
  const {firstName, lastName, photo, id} = props;
  const [image, setImage] = useState('');
  useEffect(() => {
    setImage(photo);
  }, []);
  const loadError = () => {
    setImage('https://api.adorable.io/avatars/285/avatar.png');
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.handleDetail(id)}>
      <View style={styles.containerImage}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          onError={loadError}
        />
      </View>
      <View style={styles.containerDesc}>
        <Text style={styles.textContent}>{`${firstName} ${lastName}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
