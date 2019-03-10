import React from 'react';
import { Animated, View } from 'react-native';
import PropTypes from 'prop-types';
import { range, SCREEN_WIDTH, hexToRgb } from '../../utils';
import styles from './Progress.styles';

const dotAnimation = (xOffset, length) => {
  const inputSteps = range(0, length - 1, 1);

  const scaleXInput = inputSteps.map((_, index) => index * SCREEN_WIDTH);
  // Multipled by 2 due to positioning of progress component
  // (component's center is in the left edge of the screen)
  const scaleXOutput = inputSteps.map((_, index, array) => 2 * ((index + 1) / array.length));

  return {
    transform: [
      {
        scaleX: xOffset.interpolate({
          inputRange: scaleXInput,
          outputRange: scaleXOutput,
        }),
      },
    ],
  };
};

/**
 * Progress component
 */
const Progress = ({ progressColor, progressStyles, slides, stepStyles, xOffset }) => (
  <View style={[styles.progress, { backgroundColor: hexToRgb(progressColor, 0.3) }, progressStyles]}>
    <Animated.View
      style={[
        styles.currentStep,
        { backgroundColor: progressColor },
        stepStyles,
        dotAnimation(xOffset, slides.length)
      ]}
    />
  </View>
);

Progress.propTypes = {
  /**
   * Define progress color for secondary color and active step color
   */
  progressColor: PropTypes.string,
  /**
   * Override progress styles
   */
  progressStyles: PropTypes.object,
  /**
   * Array of slide components
   */
  slides: PropTypes.array.isRequired,
  /**
   * Override default active step styles
   */
  stepStyles: PropTypes.object,
  /**
   * `xOffset` parent state which is controlled with `onScroll` prop from ScrollView component
   */
  xOffset: PropTypes.object.isRequired,
};

Progress.defaultProps = {
  progressColor: '#000',
  progressStyles: {},
  stepStyles: {},
};

export default Progress;
