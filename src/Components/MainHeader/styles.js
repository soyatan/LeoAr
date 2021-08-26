import {StyleSheet} from 'react-native';
import {width as w, height as h} from './../../constants/Metrics';
import {Colors} from './../../constants/Colors';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.Gray,
    height: h * 0.11,
    paddingHorizontal: w * 0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blackheadertext: {
    fontSize: Fonts.Sizes.eighteen,
    color: Colors.Black,
    fontWeight: '700',
  },
  shadysmalltext: {
    fontSize: Fonts.Sizes.fourteen,
    color: Colors.Black,
    opacity: 0.4,
    fontWeight: '700',
  },
});
