import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {ImageLink} from './../../Assets/Images/index';
import PlayButton from '../PlayButton/PlayButton';

const TrackVisual = ({source}) => {
  return (
    <View style={styles.outercontainer}>
      <View style={styles.container}>
        <PlayButton />
        <Image
          width={'100%'}
          height={'100%'}
          source={{uri: source}}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
    </View>
  );
};

export default TrackVisual;
