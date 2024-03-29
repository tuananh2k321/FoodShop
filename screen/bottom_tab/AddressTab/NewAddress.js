import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dropdown } from 'react-native-element-dropdown';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;

const city = [
    { label: 'Los Angles', value: '1' },
    { label: 'Texas', value: '2' },
    { label: 'New York', value: '3' },
    { label: 'Ha Noi', value: '4' },
    { label: 'Ho Chi Minh City', value: '5' },
    { label: 'Tokyo', value: '6' },
    { label: 'Paris', value: '7' },
    { label: 'San Fancisco', value: '8' },

]
const NewAddress = (props) => {
    const { navigation } = props;
    const [valueCity, setValueCity] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const Back = () => {
        navigation.pop(1)
    }
    const renderCity = () => {
        if (valueCity || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>

                </Text>
            );
        }
        return null;
    };
    return (
        <KeyboardAwareScrollView>

            <SafeAreaView style={styles.main}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={Back} >
                            <Image source={require('../../../assets/img/IconArrow.png')} />

                        </TouchableOpacity>
                        <Text></Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.title}>New Addresses</Text>
                    </View>
                    <TouchableOpacity style={styles.fab} onPress={()=>{navigation.navigate("Maps")}}>
                        <Image style={{ width: 30, height: 30 }} source={require("../../../assets/icon/IconGGMaps.png")}></Image>
                    </TouchableOpacity>

                    {/* Input */}

                    <View>
                        <TextInput
                            style={[styles.input, { marginTop: 64 }]}
                            placeholder='Address Title'
                            placeholderTextColor="#AC8E71" />
                        <TextInput
                            style={[styles.input, {}]}
                            placeholder='Name Surname'
                            placeholderTextColor="#AC8E71" />

                        {renderCity()}
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={{ color: '#AC8E71' }}
                            selectedTextStyle={{ color: '#AC8E71' }}
                            inputSearchStyle={styles.inputSearchStyle}

                            data={city}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"

                            placeholder={!isFocus ? 'City' : '...'}
                            searchPlaceholder="Search..."
                            value={valueCity}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValueCity(item.valueCity);
                                setIsFocus(false);
                                console.log('data:'+valueCity)
                            }}
                        />

                        <TextInput
                            style={[styles.input, {}]}
                            placeholder='Address'
                            placeholderTextColor="#AC8E71" />
                    </View>

                    {/* BUTTON  */}
                    <TouchableOpacity style={styles.btnAdd}>
                        <Pressable>
                            <Text style={[styles.text, { color: 'white', fontWeight: 'bold', fontSize: 20, }]}>
                                Add
                            </Text>
                        </Pressable>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </KeyboardAwareScrollView>
    )
}

export default NewAddress

const styles = StyleSheet.create({
    main: {
        height: windowHeight,
        backgroundColor: 'white'
    },
    container: {
        height: '85%',
        bacgroundColor: "#fff",
        marginHorizontal: 16,

    },
    header: {
        justifyContent: 'space-between',
        marginTop: 10,

    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: "#FF5E00",
        lineHeight: 29,

    },
    input: {
        marginTop: 13,
        backgroundColor: '#F3F3F3',
        width: windowWIdth - 40,
        height: 48,
        borderRadius: 5,
        marginTop: 30,
        paddingLeft: 27,
        color: "black"
    },
    btnAdd: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FF5E00',
        width: windowWIdth - 40,
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    dropdown: {
        height: 50,
        marginTop: 30,
        borderRadius: 5,

        paddingHorizontal: 27,
        backgroundColor: '#F3F3F3',
        width: windowWIdth - 40,
    },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 80,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 8,
        borderWidth: 2,
        borderColor: '#fff',
    },
    fabText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
})