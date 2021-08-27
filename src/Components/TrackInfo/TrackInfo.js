import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const TrackInfo = ({track}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.blacktext}>{track.trackname}</Text>
      <Text style={styles.shadytext}>{track.artist}</Text>
      <Text style={styles.shadytext}>{`#${track.genre}`}</Text>
    </View>
  );
};

export default TrackInfo;
