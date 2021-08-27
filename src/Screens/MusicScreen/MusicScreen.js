import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MainHeader from './../../Components/MainHeader/MainHeader';
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader';
import TracksContainer from '../../Components/TracksContainer/TracksContainer';
import {trackData} from './../../Data/trackdata';
import {getGenres} from './../../Helper/helperfunctions';

let genres = getGenres(trackData);

const MusicScreen = () => {
  const [chosenGenre, setchosenGenre] = useState('All');
  return (
    <View style={styles.container}>
      <MainHeader />
      <CategoryHeader
        genres={genres}
        chosenGenre={chosenGenre}
        setChosenGenre={setchosenGenre}
      />
      <TracksContainer tracks={trackData} />
    </View>
  );
};

export default MusicScreen;
