export const getGenres = tracks => {
  let genres = ['All'];
  tracks.map(item => {
    if (!genres.some(genre => genre === item.genre)) {
      genres.push(item.genre);
    }
  });
  return genres;
};
