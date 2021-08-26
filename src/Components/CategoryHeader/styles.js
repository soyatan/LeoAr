import {StyleSheet} from 'react-native';
import {width as w, height as h} from '../../constants/Metrics';
import {Colors} from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    height: h * 0.1,
    backgroundColor: Colors.Gray,
    opacity: 0.5,
    paddingLeft: w * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
  },
  blackheadertext: {
    fontSize: Fonts.Sizes.eighteen,
    color: Colors.Black,
    fontWeight: '700',
  },
  shadyheadertext: {
    fontSize: Fonts.Sizes.eighteen,
    color: Colors.Black,
    opacity: 0.4,
    fontWeight: '700',
  },
});
