import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './style';

const FormInput = ({title, valueName, isNumeric, handleInput, value}) => {
  return (
    <View style={styles.containerInputForm}>
      <View style={styles.containerFormTitle}>
        <Text style={styles.textTitleInput}>{title}</Text>
      </View>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => handleInput(valueName, text)}
        keyboardType={isNumeric ? 'number-pad' : 'default'}
        value={value}
        returnKeyType={'done'}
        maxLength={isNumeric ? 3 : null}
      />
    </View>
  );
};

export default FormInput;
