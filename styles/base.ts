import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  centered: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  centeredScroll: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    color: '#6b2272',
    fontSize: 30,
    fontWeight: '600',
  }
});