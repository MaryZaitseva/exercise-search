import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  backButton: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
  },
  backIcon: {
    height: 18,
    width: 18,
    marginRight: 6,
  },
  errorText: {
    fontSize: 18,
    color: COLORS.red,
    marginTop: 30,
  },
  backText: {
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 40,
  },
  exerciseItem: {
    borderWidth: 1,
    borderColor: COLORS.dark_gray,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: COLORS.light_gray,
  },
  exerciseName: {
    color: COLORS.green,
    fontWeight: '600',
    fontSize: 22,
    marginBottom: 10,
  },
  propertyView: {
    flexDirection: 'row',
    marginTop: 6,
  },
  propertyTitle: {
    fontSize: 16,
  },
  propertyValue: { fontSize: 16 },
  instructions: {
    marginTop: 20,
  },
  noResult: {
    fontSize: 18,
    marginTop: 30,
  },
});
