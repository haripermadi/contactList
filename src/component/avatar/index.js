import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import styles from './style';

const Avatar = (props) => {
  const {photo, isEdit, handleImagePicker} = props;
  console.log('props---', props);
  const [image, setImage] = useState('');
  useEffect(() => {
    setImage(photo);
  }, []);
  const loadError = () => {
    setImage(
      'https://www.pngitem.com/pimgs/m/421-4212341_default-avatar-svg-hd-png-download.png',
    );
  };

  if (props.type === 'add') {
    return (
      <TouchableOpacity
        style={styles.containerAvatar}
        onPress={handleImagePicker}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.avatar}
          onError={loadError}
        />
        <Text style={styles.avatarText}>{isEdit ? 'Edit' : 'Add Photo'}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.containerAvatar}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.avatar}
          onError={loadError}
        />
      </View>
    );
  }
};

export default Avatar;
