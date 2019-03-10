<img src="http://www.danijelgrabez.com/public-links/github/react-native-step-by-step/step-by-step.gif" width="240" alt= "Example usage of StepByStepModal component">

# Step by Step Modal
React Native step by step modal component.

👉[Bare minimum](https://snack.expo.io/@danijelgrabez/step-by-step-bare-minimum)  
👉[Advanced configuration](https://snack.expo.io/@danijelgrabez/step-by-step-advanced-config)

### Install
```npm i step-by-step-modal -S```

or,

```yarn add step-by-step-modal```

### Usage
#### Props:
| Property 	| isRequired 	| Description 	|
|------------------------	|------------	|-------------------------------------------------------------------------------------------------------------------------------	|
| `closeModal` 	| true 	| Function for closing the modal passed from parent component 	|
| `modalColor` 	| - 	| Define modal background color 	|
| `modalHeaderComponent` 	| - 	| Component shown instead of default header 	|
| `modalVisible` 	| true 	| Boolean which indicates if the modal is open, or closed 	|
| `popupComponent` 	| - 	| Popup component which will be shown on the last step 	|
| `popupRepeatComponent` 	| - 	| Component which will return user to the fist slide. Functionality will be removed if `-` value is passed to this property 	|
| `progressColor` 	| - 	| Define progress color active step color. Secondary color is represented as 30% opaque 	|
| `progressStyles` 	| - 	| Override progress styles 	|
| `slides` 	| true 	| Array of slide components 	|
| `stepStyles` 	| - 	| Override active step styles 	|
| `withoutPopup` 	| - 	| Boolean which indicates weather popup should be shown on the last slide 	|

#### Basic example
Bellow is bare minimum which is needed for this component to work.
```js
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import StepByStepModal from './StepByStepModal';

class App extends Component {
  state = {
    modalVisible: false,
  }

  handleModalVisibility() {
    const { modalVisible } = this.state;

    this.setState({ modalVisible: !modalVisible });
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <View style={styles.wrapper}>
        <StepByStepModal
          modalVisible={modalVisible}
          closeModal={() => this.handleModalVisibility()}
          slides={[
            <SampleSlide title="Initial slide" />,
            <SampleSlide title="Slide One" />,
            <SampleSlide title="Slide Two" />,
          ]}
        />

        <TouchableOpacity
          onPress={() => this.handleModalVisibility()}>
          <Text>Show Progress Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
```


## TODO
- [ ] Add tests


## Suggestions?
[Shoot me an email](mailto:danijel.grabez@gmail.com), or [submit an issue](https://github.com/danijelgrabez/step-by-step-modal/issues) 🚀
