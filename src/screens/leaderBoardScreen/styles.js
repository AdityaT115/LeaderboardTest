import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, FONTWEIGHT, moderateScale} from '../../utils';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
  },
  scrollViewStyle: {
    paddingBottom: moderateScale(30),
  },
  tableView: {
    marginTop: moderateScale(20),
  },
  tableCell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: moderateScale(1),
    borderBottomWidth: moderateScale(0.5),
    height: moderateScale(50),
    flex: 1,
  },
  cell: isSearched => ({
    color: isSearched ? COLORS.red : COLORS.black,
    fontSize: FONTSIZE.fontSizeRegular,
    fontWeight: FONTWEIGHT.fontFamilyRegular,
    borderRightWidth: moderateScale(3),
    borderRightColor: COLORS.black,
  }),
  cellView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRightWidth: 1,
  },
  tableHeading: {
    textAlign: 'center',
    flex: 0.25,
    fontSize: FONTSIZE.fontSizeMedium,
    color: COLORS.black,
    fontWeight: FONTWEIGHT.fontFamilyMedium,
    borderColor: Colors.black,
    // borderEndWidth: moderateScale(2),
  },
});
