import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  logo: {
    width: 71,
    height: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 32,
    marginTop: 12,

    width: '100%',
    paddingHorizontal: 32,
  },

  buttonLeft: {
    top: '25%',
  },

  right: {
    width: 32,
    height: 32,
  },

  banner: {
    paddingLeft: 32,
    width: 300,
    height: 160,
    marginBottom: 24,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  containerList: {
    width: '100%',
  },

  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    marginTop: 16,
    alignItems: 'flex-start',
  },
});
