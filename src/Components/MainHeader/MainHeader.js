import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const MainHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.shadysmalltext}>Cancel</Text>
      <Text style={styles.blackheadertext}>Choose Music</Text>
      <Text style={styles.shadysmalltext}>Done</Text>
    </View>
  );
};

export default MainHeader;
