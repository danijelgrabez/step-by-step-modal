import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../utils';

const styles = StyleSheet.create({
  progress: {
    height: 6,
    position: 'absolute',
    bottom: 0,
    width: SCREEN_WIDTH,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  currentStep: {
    width: SCREEN_WIDTH,
    height: 6,
    backgroundColor: '#000',
    position: 'absolute',
    left: -SCREEN_WIDTH / 2,
    zIndex: 2,
  },
});

export default styles;
