import {StyleSheet} from 'react-native';
import {width as w, height as h} from '../../constants/Metrics';
import {Colors} from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  outercontainer: {borderColor: '#0a0a0a20', borderWidth: 1, borderRadius: 12},
  container: {
    width: w * 0.16,
    height: w * 0.16,
    borderWidth: 4,
    borderColor: '#ffffff50',
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: '100%',

    borderRadius: 8,
  },
});
