import { StyleSheet } from 'react-native';

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#6b2272',
    fontSize: 30,
    fontWeight: '600',
  },
  option: {
    flexGrow: 1,
    alignItems: 'center',
    margin: 10
  }
});