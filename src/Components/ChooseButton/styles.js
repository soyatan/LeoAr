import {StyleSheet} from 'react-native';
import {width as w, height as h} from '../../constants/Metrics';
import {Colors} from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Gray,
    paddingVertical: w * 0.02,
    paddingHorizontal: w * 0.03,
    borderRadius: w * 0.05,
  },
});
