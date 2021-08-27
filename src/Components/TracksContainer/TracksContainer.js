import React from 'react';
import {View, Text} from 'react-native';
import ChooseButton from '../ChooseButton/ChooseButton';
import TrackInfo from '../TrackInfo/TrackInfo';
import TrackVisual from '../TrackVisual/TrackVisual';
import styles from './styles';

const TracksContainer = () => {
  return (
    <View style={styles.container}>
      <TrackVisual />
      <TrackInfo />
      <ChooseButton />
    </View>
  );
};

export default TracksContainer;
