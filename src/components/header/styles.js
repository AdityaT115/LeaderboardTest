import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, FONTWEIGHT, moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.white,
    marginVertical: moderateScale(15),
  },
  headerText: {
    fontSize: FONTSIZE.fontSizeExtraXXXXLarge,
    fontWeight: FONTWEIGHT.fontSemiBold,
    color: COLORS.green,
  },
});
