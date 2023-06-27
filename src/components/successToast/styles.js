import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, FONTWEIGHT, moderateScale} from '../../utils';

const styles = StyleSheet.create({
  toastContainer: type => ({
    width: '100%',
    borderBottomColor: type ? COLORS.toastGreen : COLORS.toastRed,
    backgroundColor: type ? COLORS.lightGreen : COLORS.lightRed,
    borderBottomWidth: moderateScale(1),
    marginTop: moderateScale(-40),
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(30),
    paddingBottom: moderateScale(15),
    alignItems: 'center',
  }),
  title: type => ({
    fontSize: FONTSIZE.fontSizeMedium,
    fontWeight: FONTWEIGHT.fontFamilyMedium,
    color: type ? COLORS.green : COLORS.red,
    textAlign: 'left',
  }),
  descStyle: type => ({
    fontSize: FONTSIZE.fontSizeRegular,
    fontWeight: FONTWEIGHT.fontFamilyRegular,
    textAlign: 'left',
    color: type ? COLORS.green : COLORS.red,
  }),
});
export default styles;
