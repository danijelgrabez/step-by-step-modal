import memoizeOne from 'memoize-one';
import { Dimensions, Platform, PixelRatio } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// Granular in-between steps
// // e.g. range(0, 2, 0.5) // [0, 0.5, 1, 1.5, 2];
export const range = (from, to, step) => (
  Array.from(Array(Math.ceil((to - from) / step + step)).keys()).map(x => from + x * step)
);

/**
 * Normalize size
 * Normalize px values between Android/iOS platforms
 * due according to pixel density
 */
export const normalize = memoizeOne((size) => {
  const { width: SCREEN_WIDTH } = Dimensions.get('window');

  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 320;

  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
});

/**
 * useSafeArea (portrait mode)
 * Use this function in cases when spacing (margin/padding/etc)
 * is set to elements close to bottom, or top edge of the screen.
 */
export const useSafeArea = memoizeOne((value, position = 'top') => {
  const { height } = Dimensions.get('window');
  const hasHinge = height >= 812; // iPhone X or, larger

  if (hasHinge) {
    if (position === 'top') {
      return normalize(value + 44);
    }
    if (position === 'bottom') {
      return normalize(value + 34);
    }
  }
  return normalize(value);
});

/**
 * HEX to RGB
 */
export const hexToRgb = memoizeOne((hex, alpha = 1) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`
    : null;
});
