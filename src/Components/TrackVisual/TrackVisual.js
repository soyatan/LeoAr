import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {ImageLink} from './../../Assets/Images/index';

const TrackVisual = () => {
  return (
    <View style={styles.outercontainer}>
      <View style={styles.container}>
        <Image
          width={'100%'}
          height={'100%'}
          source={ImageLink['deckthehalls']}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
    </View>
  );
};

export default TrackVisual;
