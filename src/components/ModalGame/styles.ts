import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: THEME.COLORS.OVERLAY,

    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 32,
    paddingBottom: 32,
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  containerIcon: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },

  title: {
    textAlign: 'center',
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    color: THEME.COLORS.TEXT,
  },

  subTitle: {
    textAlign: 'center',
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.CAPTION_400,
    marginBottom: 24,
  },

  titleBox: {
    textAlign: 'center',
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    color: THEME.COLORS.TEXT,
    marginBottom: 8,
  },

  box: {
    width: '100%',
    paddingTop: 11,
    paddingBottom: 11,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderRadius: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },

  textBox: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT,
    textAlign: 'center',
  },

  iconClose: {
    position: 'absolute',
    top: 16,
    left: '119%',
  },
});
