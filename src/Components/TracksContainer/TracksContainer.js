import React from 'react';
import {View, FlatList, Text} from 'react-native';
import ChooseButton from '../ChooseButton/ChooseButton';
import TrackInfo from '../TrackInfo/TrackInfo';
import TrackVisual from '../TrackVisual/TrackVisual';
import styles from './styles';

const TracksContainer = ({tracks}) => {
  return (
    <FlatList
      data={tracks}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <TrackVisual source={item.thumbUrl} />
            <TrackInfo track={item} />
            <ChooseButton />
          </View>
        );
      }}
    />
  );
};

export default TracksContainer;
