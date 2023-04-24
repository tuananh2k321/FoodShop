

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleDateSelection = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(formatDate(selectedDate));
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View
        style={{
          height: 48,
          backgroundColor: 'pink',
          width: '100%',
          paddingLeft: 30,
          marginBottom: 5,
          marginTop: 20,
          borderWidth: 2,
          borderColor: 'black',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          padding: 10,
          flexDirection: 'row'
        }}>
        <TouchableOpacity
          onPress={showDatePicker}
        >
          <Image source={require('../assets/icon/IconCalendar2.png')} />

        </TouchableOpacity>
       
      </View>
      <Text>
          {date === null ? 'Date of birth' : date}
        </Text>
      <TouchableOpacity onPress={showDatepicker}>
        <Text style={{ marginTop: 20 }}>Chọn ngày sinh</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date ? new Date(date) : new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateSelection}
        />
      )}
    </View>
  );
};

export default App;










// import React, { useState } from 'react';
// import { View } from 'react-native';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';

// const Example = () => {
//   const [checkbox1, setCheckbox1] = useState(false);
//   const [checkbox2, setCheckbox2] = useState(true);

//   const handleCheckbox1 = () => {
//     setCheckbox1(true);
//     console.log("checkbox1",checkbox1)
//     setCheckbox2(false);
//     console.log("checkbox2",checkbox2)

//   };

//   const handleCheckbox2 = () => {
//     setCheckbox1(false);
//     console.log("checkbox11",checkbox1)
//     setCheckbox2(true);
//     console.log("checkbox22",checkbox2)

//   };

//   return (
//     <View>
//       <BouncyCheckbox
//         isChecked={checkbox1}
//         onPress={handleCheckbox1}
//         text="Checkbox 1"
//       />
//       <BouncyCheckbox
//         isChecked={checkbox2}
//         onPress={handleCheckbox2}
//         text="Checkbox 2"
//       />
//     </View>
//   );
// };

// export default Example;
