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
  TriangleShapeCSS: {
    width: 0,
    height: 0,
    //borderLeftWidth: 10,
    left: w * 0.045,
    top: w * 0.055,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    transform: [{rotate: '90deg'}],
    borderLeftWidth: 10,
    borderStyle: 'solid',
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.White,
  },
});
