import {StyleSheet} from 'react-native';
import {width as w, height as h} from '../../constants/Metrics';
import {Colors} from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const {Families, Sizes} = Fonts;

export default styles = StyleSheet.create({
  container: {
    height: h * 0.1,
    backgroundColor: Colors.LightGray,

    //paddingLeft: w * 0.03,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  blackheadertext: {
    fontSize: Fonts.Sizes.eighteen,
    color: Colors.Black,
    fontWeight: '600',
    fontFamily: Families.medium,
  },
  shadyheadertext: {
    fontSize: Fonts.Sizes.eighteen,
    color: Colors.Black,
    opacity: 0.4,
    fontWeight: '700',
  },
  genreitem: {justifyContent: 'center', paddingHorizontal: w * 0.03},
});
