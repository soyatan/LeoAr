import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MainHeader from './../../Components/MainHeader/MainHeader';
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader';
import TracksContainer from '../../Components/TracksContainer/TracksContainer';

const MusicScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <CategoryHeader />
      <TracksContainer />
      <TracksContainer />
    </View>
  );
};

export default MusicScreen;
