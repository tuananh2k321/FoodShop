import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})













// import React, { useState, useRef } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   Text,
// } from "react-native";
// import PhoneInput from "react-native-phone-number-input";
// import { Colors } from "react-native/Libraries/NewAppScreen";

// const App = () => {
//   const [value, setValue] = useState("");
//   const [formattedValue, setFormattedValue] = useState("");
//   const [valid, setValid] = useState(false);
//   const [showMessage, setShowMessage] = useState(false);
//   const phoneInput = useRef<PhoneInput>(null);
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <View style={styles.container}>
//         <SafeAreaView style={styles.wrapper}>
//           {showMessage && (
//             <View style={styles.message}>
//               <Text>Value : {value}</Text>
//               <Text>Formatted Value : {formattedValue}</Text>
//               <Text>Valid : {valid ? "true" : "false"}</Text>
//             </View>
//           )}
//           <PhoneInput
//             ref={phoneInput}
//             defaultValue={value}
//             defaultCode="DM"
//             layout="first"
//             onChangeText={(text) => {
//               setValue(text);
//             }}
//             onChangeFormattedText={(text) => {
//               setFormattedValue(text);
//             }}
//             withDarkTheme
//             withShadow
//             autoFocus
//           />
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               const checkValid = phoneInput.current?.isValidNumber(value);
//               setShowMessage(true);
//               setValid(checkValid ? checkValid : false);
//             }}
//           >
//             <Text>Check</Text>
//           </TouchableOpacity>
//         </SafeAreaView>
//       </View>
//     </>
//   );
// };

// export default App;
// const styles = StyleSheet.create({
//   // DROPDOWN
// dropdown: {
//   height: 40,
//   width: 45,
//   paddingHorizontal: 8,
// },
// imageStyle: {
//   width: 30,
//   height: 30,
//   alignSelf: 'center',
  
// },
// placeholderStyle: {
//   fontSize: 16,
// },
// selectedTextStyle: {
//   fontSize: 16,
//   marginLeft: 8,
// },
// iconStyle: {
//   width: 20,
//   height: 20,
// },

// })

