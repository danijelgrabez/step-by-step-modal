import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../utils';

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    bottom: 0,
    width: SCREEN_WIDTH,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    marginLeft: 'auto',
  },
});

export default styles;
