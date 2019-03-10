import { StyleSheet } from 'react-native';
import { useSafeArea } from '../utils';

const styles = StyleSheet.create({
  header: {
    paddingTop: useSafeArea(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerButton: {
    marginLeft: 15,
    alignSelf: 'flex-start',
  },
  headerButtonText: {
    fontSize: 30,
    lineHeight: 30,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  scrollView: {
    flexDirection: 'row',
  },
});

export default styles;
