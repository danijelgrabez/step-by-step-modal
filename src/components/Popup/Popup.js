import React from 'react';
import { Animated, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Popup.styles';
import { range, SCREEN_WIDTH } from '../../utils';

const dotAnimation = (xOffset, length) => {
  const steps = range(0, length - 1, 1);

  const translateYInput = steps.map((_, index) => index * SCREEN_WIDTH);
  // add step before last step
  translateYInput.splice(translateYInput.length - 1, 0, translateYInput[translateYInput.length - 1] - 50);

  const translateYOutput = translateYInput.map((_, index) => (index === translateYInput.length - 1 ? 0 : 50));

  return {
    transform: [
      {
        translateY: xOffset.interpolate({
          inputRange: translateYInput,
          outputRange: translateYOutput,
        }),
      },
    ],
  };
};

/**
 * Popup component
 */
const Progress = ({ popupComponent, popupRepeatComponent, scrollToStart, slides, withoutPopup, xOffset }) => (
  withoutPopup ? null : (
    <Animated.View style={[styles.popup, dotAnimation(xOffset, slides.length)]}>
      {popupComponent}
      {popupRepeatComponent === false ? null : (
        <TouchableOpacity style={styles.button} onPress={() => scrollToStart()}>
          {popupRepeatComponent || <Text>Repeat</Text>}
        </TouchableOpacity>
      )}
    </Animated.View>
  )
);

Progress.propTypes = {
  /**
   * Component which will be shown instead of default popup component
   */
  popupComponent: PropTypes.node,
  /**
   * Provide option to return to fist slide,
   * or hide it completely (if passed as `popupRepeatComponent={false}`)
   */
  popupRepeatComponent: PropTypes.any,
  /**
   * Function which scrolls to beggining of the ScrollView
   */
  scrollToStart: PropTypes.func,
  /**
   * Array of slide components
   */
  slides: PropTypes.array.isRequired,
  /**
   * Boolean which indicates weather popup should be shown on the last slide
   */
  withoutPopup: PropTypes.bool,
  /**
   * `xOffset` parent state which is controlled with `onScroll` prop from ScrollView component
   */
  xOffset: PropTypes.object.isRequired,
};

Progress.defaultProps = {
  popupComponent: null,
  popupRepeatComponent: null,
  scrollToStart: () => {},
  withoutPopup: false,
};

export default Progress;
