import {Metrics} from './Metrics';

const Families = {
  light: 'Oswald-Light',
  regular: 'Oswald-Regular',
  medium: 'Oswald-Medium',
  semibold: 'Oswald-SemiBold',
  bold: 'Oswald-Bold',
  extralight: 'Oswald-ExtraLight',
};

const Sizes = {
  eight: Metrics.width * 0.024,
  ten: Metrics.width * 0.028,
  twelve: Metrics.width * 0.033,
  fourteen: Metrics.width * 0.037,
  sixteen: Metrics.width * 0.041,
  eighteen: Metrics.width * 0.045,
  twenty: Metrics.width * 0.049,
  twentytwo: Metrics.width * 0.055,
  twentysix: Metrics.width * 0.065,
  thirty: Metrics.width * 0.077,
  fourty: Metrics.width * 0.099,
  fifty: Metrics.width * 0.121,
  eighty: Metrics.width * 0.187,
};

export default {
  Families,
  Sizes,
};
