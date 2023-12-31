import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const verticalScale = size => (height / guidelineBaseHeight) * size;

export const HorizontalScale = size => (width / guidelineBaseWidth) * size;

export const moderateScale = (size, factor = 0.25) =>
  size + (HorizontalScale(size) - size) * factor;
