import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const Signpass = () => {
    return (
        <View style={styles.container}>
            <View style={styles.selectionContainer}>
                <Text style={styles.selectionText}>Sign Up</Text>
            </View>

            <View style={styles.editImg}>
                <Image style={styles.imgScreen3} source={require('../assets/img/screen.png')} />
                <Image style={styles.imgScreen2} source={require('../assets/img/screen0.png')} />
            </View>

            <View>
                <Text style={styles.selectionText2}> Enter the password </Text>
            </View>

            <View>
                <Text style={styles.selectionText3}>
                    For the security & safety please
                    choose a password
                </Text>
            </View>

            <View style={styles.imgContainer}>
                <Image style={styles.lock} source={require('../assets/img/iconLock.png')} />
                <TextInput style={styles.namsurname} placeholder='Password' />
                <Image style={styles.eye} source={require('../assets/img/eye.png')} />
            </View>

            <View style={styles.imgContainer}>
                <Image style={styles.lock2} source={require('../assets/img/iconLock.png')} />
                <TextInput style={styles.passw} placeholder='Confirm Password' />
                <Image style={styles.eye} source={require('../assets/img/eye.png')} />
            </View>

            <Pressable style={styles.btnSignup} >
                <Text style={styles.btnText}>Next</Text>
            </Pressable>
        </View>

    )
}

export default Signpass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 24
    },

    selectionContainer: {
        alignItems: 'center',
    },

    selectionText: {
        fontWeight: '700',
        lineHeight: 41,
        letterSpacing: 0.41,
        marginTop: 20,
        fontSize: 24,
        color: '#FF5E00',
        fontFamily: 'Klarna Text',
    },


    imgScreen3: {
        position: 'absolute',
        marginTop: 7,
    },

    imgScreen2: {
        marginTop: 46,
        marginLeft: 45
    },

    selectionText2: {
        fontWeight: '700',
        letterSpacing: 0.41,
        marginTop: 50,
        fontSize: 20,
        color: '#7F4E1D',
        fontFamily: 'Klarna Text',
    },
    selectionText3: {
        fontWeight: '400',
        letterSpacing: 0.41,
        marginTop: 12,
        marginEnd: 21,
        fontSize: 16,
        color: '#7F4E1D',
        fontFamily: 'Klarna Text',
    },

    editImg: {
        position: 'relative',

    },

    imgContainer: {
        position: 'relative',
        backgroundColor: '#F3F3F3',
        marginTop: 16,
        borderRadius: 10,
    },
    lock: {
        position: 'absolute',
        top: 16,
        left: 23,
    },

    lock2: {
        position: 'absolute',
        top: 16,
        left: 23,
    },

    eye: {
        position: 'absolute',
        top: 16,
        right: 13,
    },

    namsurname: {
        paddingLeft: 27,
        width: 355,
        padding: 10,
        height: 48,
        marginLeft: 16,
        borderRadius: 5,
        borderColor: '#F3F3F3',
    },

    passw: {
        textAlign: 'auto',
        paddingLeft: 27,
        width: 355,
        padding: 10,
        height: 48,
        marginLeft: 16,
        borderRadius: 5,
    },

    btnSignup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 17,
        paddingVertical: 13,
        paddingHorizontal: 24,
        width: '100%',
        height: 50,
        backgroundColor: '#FF5E00',
        borderRadius: 30,
    },
    btnText: {
        color: '#FFFFFF',
        fontFamily: 'Klarna Text',
        fontSize: 20,
    }
})