import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MainHeader from './../../Components/MainHeader/MainHeader';
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader';
import TracksContainer from '../../Components/TracksContainer/TracksContainer';
import {convertJsonToArray, getGenres} from './../../Helper/helperfunctions';
const tracks = require('../../Data/trackdata.json');

const MusicScreen = () => {
  const [chosenGenre, setchosenGenre] = useState('All');
  const [chosenTracks, setchosenTracks] = useState([]);

  let genres = getGenres(tracks.data);

  useEffect(() => {
    let convertedArray = convertJsonToArray(tracks.data);

    if (!chosenGenre || chosenGenre === 'All') {
      setchosenTracks(convertedArray);
    } else {
      let filteredArray = convertedArray.filter(track =>
        track.tags.includes(chosenGenre),
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
