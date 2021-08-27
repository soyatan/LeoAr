import {StyleSheet} from 'react-native';
import {width as w, height as h} from '../../constants/Metrics';
import {Colors} from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import {width} from './../../constants/Metrics';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {marginLeft: w * 0.035, width: w * 0.55},
  blacktext: {
    fontSize: Fonts.Sizes.fourteen,
    color: Colors.Black,
    fontWeight: '700',
  },
  shadytext: {
    fontSize: Fonts.Sizes.twelve,
    color: Colors.Black,
    opacity: 0.4,
    fontWeight: '400',
  },
});
