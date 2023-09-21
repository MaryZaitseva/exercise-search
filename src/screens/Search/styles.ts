import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 40,
    alignSelf: 'center',
  },
  label: {
    marginBottom: 6,
  },
  input: {
    height: 54,
    marginBottom: 24,
    borderWidth: 1,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  difficultyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  difficultyItem: {
    height: 54,
    width: '30%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  difficultyActive: {
    borderWidth: 5,
    borderColor: COLORS.pink,
    borderStyle: 'solid',
  },
  searchButton: {
    marginTop: 40,
    height: 50,
    justifyContent: 'center',
    backgroundColor: COLORS.green,
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
  },
  buttonInactive: {
    backgroundColor: COLORS.medium_gray,
  },
});
