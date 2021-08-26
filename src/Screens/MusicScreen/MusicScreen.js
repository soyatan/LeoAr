import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MainHeader from './../../Components/MainHeader/MainHeader';
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader';

const MusicScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <CategoryHeader />
      {/*'TracksContainer'*/}
    </View>
  );
};

export default MusicScreen;
