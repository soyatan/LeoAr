import React, {useEffect, useState} from 'react';
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
  const [chosenTracks, setchosenTracks] = useState(trackData);

  useEffect(() => {
    if (!chosenGenre || chosenGenre === 'All') {
      setchosenTracks(trackData);
    } else {
      let filteredArray = trackData.filter(
        track => track.genre === chosenGenre,
      );
      setchosenTracks(filteredArray);
    }
  }, [chosenGenre]);

  return (
    <View style={styles.container}>
      <MainHeader />
      <CategoryHeader
        genres={genres}
        chosenGenre={chosenGenre}
        setChosenGenre={setchosenGenre}
      />
      <TracksContainer tracks={chosenTracks} />
    </View>
  );
};

export default MusicScreen;
