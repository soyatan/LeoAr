import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const ChooseButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.blacktext}>Choose</Text>
    </TouchableOpacity>
  );
};

export default ChooseButton;
