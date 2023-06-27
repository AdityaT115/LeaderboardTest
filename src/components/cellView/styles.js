import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, FONTWEIGHT, moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  cell: isSearched => ({
    color: isSearched ? COLORS.red : COLORS.black,
    fontSize: FONTSIZE.fontSizeRegular,
    fontWeight: FONTWEIGHT.fontFamilyRegular,
  }),
  cellView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRightWidth: moderateScale(1),
    paddingHorizontal: moderateScale(3),
  },
});
