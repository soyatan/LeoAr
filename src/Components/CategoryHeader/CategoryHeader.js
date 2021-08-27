import React from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

const CategoryHeader = ({genres, chosenGenre, setChosenGenre}) => {
  return (
    <View style={styles.container} horizontal={true}>
      <FlatList
        data={genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={[
                styles.genreitem,
                item === chosenGenre ? {borderBottomWidth: 2} : null,
              ]}
              onPress={() => setChosenGenre(item)}>
              <Text
                style={[
                  styles.blackheadertext,
                  item !== chosenGenre ? {opacity: 0.3} : null,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CategoryHeader;
