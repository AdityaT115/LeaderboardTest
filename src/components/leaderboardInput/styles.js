import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, FONTWEIGHT, moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScale(15),
    alignItems: 'center',
  },
  inputView: {
    height: moderateScale(40),
    borderWidth: moderateScale(1),
    width: '70%',
    borderColor: COLORS.green,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  searchIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
  },
  input: {
    fontSize: FONTSIZE.fontSizeMedium,
    fontWeight: FONTWEIGHT.fontFamilyRegular,
    width: '80%',
  },
  button: {
    backgroundColor: COLORS.green,
    width: '25%',
    height: moderateScale(40),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: FONTWEIGHT.fontFamilyMedium,
    fontSize: FONTSIZE.fontSizeLarge,
  },
});
