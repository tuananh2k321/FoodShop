import { View, Text, Image, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const EditProfile = (props) => {
    const { navigation } = props


    return (
        <KeyboardAwareScrollView>

            <View style={styles.container}>
                <TouchableOpacity onPress={() => { navigation.pop(1) }}>
                    <Image style={styles.prnev}
                        source={require('../../assets/img/prnev.png')}
                    />
                </TouchableOpacity>

                <Text style={styles.title}> Edit Profile</Text>
                <TextInput style={styles.textiput} placeholder='Iput'></TextInput>
                <View style={styles.dropdown}>

                    <Image style={styles.imco}
                        source={require('../../assets/img/co.png')}
                    />
                    <Image style={styles.imdown}
                        source={require('../../assets/img/down.png')}
                    />
                    <TextInput style={styles.iputdown} placeholder='+46 888 86 99'></TextInput>

                </View>
                <Pressable style={styles.update}>
                    <Text style={styles.textupdate}>Update Profile</Text>

                </Pressable>
            </View>
        </KeyboardAwareScrollView>

    )
}

export default EditProfile
const styles = StyleSheet.create({
    textupdate: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 45,
        color: '#FFFFFF',
        textAlign: 'center',
        alignItems: 'center'
    },
    update: {
        width: 343,
        height: 50,
        right: 17,
        marginTop: 300,
        backgroundColor: '#FF5E00',
        borderRadius: 30,
        marginLeft: 40
    },
    imdown: {
        width: 9.67,
        marginLeft: 12,

    },
    imco: {
        width: 23,
        height: 26,
        marginLeft: 12
    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 90,
        width: 343,
        height: 48,
        backgroundColor: '#F3F3F3',
        marginLeft: 16,
    },
    textiput: {
        width: 343,
        height: 48,
        left: 16,
        top: 64,
        borderRadius: 5,
        backgroundColor: '#F3F3F3',
        paddingLeft: 21
    },

    title: {
        fontSize: 24,
        lineHeight: 29,
        fontWeight: '700',
        color: '#FF5E00',
        marginTop: 5,
        textAlign: 'center'


    },
    prnev: {
        marginLeft: 20,
        width: 8.49,
        height: 14,
        color: '#FF5E00',
        marginTop: 20
    },
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})