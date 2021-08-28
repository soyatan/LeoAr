import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const MainHeader = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.shadysmalltext}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.blackheadertext}>Choose Music</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.shadysmalltext}>Done</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MainHeader;
