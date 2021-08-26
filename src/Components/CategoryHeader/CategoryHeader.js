import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const CategoryHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.blackheadertext}>All</Text>
      <Text style={styles.shadyheadertext}>Acoustic</Text>
    </View>
  );
};

export default CategoryHeader;
