import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Slides.styles';

/**
 * Slides component
 */
const Slides = ({ slides }) => slides.map((item, index) => (
  // eslint-disable-next-line react/no-array-index-key
  <ScrollView style={styles.slide} key={`slide-${index}`}>
    {item}
  </ScrollView>
));

export default Slides;

Slides.propTypes = {
  /**
   * Array of slide components
   */
  slides: PropTypes.array.isRequired,
};
