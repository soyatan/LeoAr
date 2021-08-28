import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const TrackInfo = ({track}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.blacktext}>{track.name}</Text>
      <Text style={styles.shadytext}>{track.artistName}</Text>
      <Text style={styles.shadytext}>
        {track.tags && track.tags.length > 0 ? `#${track.tags[0]}` : null}
      </Text>
    </View>
  );
};

export default TrackInfo;
