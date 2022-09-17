import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 180,

    backgroundColor: '#2A2634',
    padding: 20,
    borderRadius: 8,
    marginRight: 16,
  },

  containerName: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: '#C4C4C6',
  },

  name: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },

  button: {
    width: '100%',
    height: 36,
    borderRadius: 6,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: THEME.COLORS.PRIMARY,
  },

  iconButton: {
    marginRight: 8,
  },

  textButton: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT,
  },
});
