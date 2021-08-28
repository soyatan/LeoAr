export const convertJsonToArray = jsonfile => {
  let convertedArray = [];
  Object.values(jsonfile).map(item => convertedArray.push(item));
  return convertedArray;
};

export const getGenres = jsonfile => {
  let genres = ['All'];

  Object.values(jsonfile).map(item =>
    item.tags.map(tag => {
      if (!genres.some(genre => genre === tag)) {
        genres.push(tag);
      }
    }),
  );

  return genres;
};
