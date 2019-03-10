import React, { Component } from 'react';
import { Animated, Modal, View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Slides, Progress, Popup, styles } from './components';

/**
 * Step by Step Modal component
 */
class StepByStepModal extends Component {
  static propTypes = {
    /**
     * Array of slide components
     */
    slides: PropTypes.array.isRequired,
    /**
     * Define progress color for secondary color and active step color
     */
    progressColor: PropTypes.string,
    /**
     * Override progress styles
     */
    progressStyles: PropTypes.object,
    /**
     * Function for closing the modal passed from parent component
     */
    closeModal: PropTypes.func,
    /**
     * Define modal background color
     */
    modalColor: PropTypes.string,
    /**
     * Component which will be shown instead of default modal header
     */
    modalHeaderComponent: PropTypes.node,
    /**
     * Boolean which indicates if the modal is open, or closed
     */
    modalVisible: PropTypes.bool.isRequired,
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
     * Override default active step styles
     */
    stepStyles: PropTypes.object,
    /**
     * Boolean which indicates weather popup should be shown on the last slide
     */
    withoutPopup: PropTypes.bool,
  };

  static defaultProps = {
    progressColor: '#000',
    progressStyles: {},
    closeModal: () => {},
    modalColor: '#fff',
    modalHeaderComponent: null,
    popupComponent: null,
    popupRepeatComponent: null,
    stepStyles: {},
    withoutPopup: false,
  };

  state = {
    xOffset: new Animated.Value(0),
  };

  scrollToStart = () => {
    this.scrollViewRef.getNode().scrollTo({ x: 0, animated: true });
  };

  render() {
    const {
      closeModal,
      modalColor,
      modalHeaderComponent,
      modalVisible,
      popupComponent,
      popupRepeatComponent,
      progressStyles,
      slides,
      progressColor,
      stepStyles,
      withoutPopup,
    } = this.props;
    const { xOffset } = this.state;

    return (
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={[styles.header, { backgroundColor: modalColor }]}>
          {modalHeaderComponent || (
            <TouchableOpacity onPress={() => closeModal()} style={styles.headerButton}>
              <Text style={styles.headerButtonText}>&times;</Text>
            </TouchableOpacity>
          )}
        </View>
        <Animated.ScrollView
          ref={(ref) => {
            this.scrollViewRef = ref;
          }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          horizontal
          pagingEnabled
          style={[styles.scrollView, { backgroundColor: modalColor }]}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: xOffset } } }], {
            useNativeDriver: true,
          })}
        >
          <Slides slides={slides} />
        </Animated.ScrollView>
        <Progress
          progressColor={progressColor}
          progressStyles={progressStyles}
          slides={slides}
          stepStyles={stepStyles}
          xOffset={xOffset}
        />
        <Popup
          popupComponent={popupComponent}
          popupRepeatComponent={popupRepeatComponent}
          scrollToStart={this.scrollToStart}
          slides={slides}
          withoutPopup={withoutPopup}
          xOffset={xOffset}
        />
      </Modal>
    );
  }
}

export default StepByStepModal;
