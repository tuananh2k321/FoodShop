import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const OrderSuccessful = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img1}
                source={require('../../assets/img/orderSeccessful.png')} />
            <View>
                <Text style={styles.text1}>
                    Your Order Has Been Accepted
                </Text>

                <Text style={styles.text2}>
                    We’ve accepted your order,
                    and we’re getting it ready.
                </Text>
            </View>

            <View style={styles.btn}>
                <Pressable style={styles.btnOrder} >
                    <Text style={styles.btnText}>Track Order</Text>
                </Pressable>

                <Pressable style={styles.btnBackHome}>
                    <Text style={styles.btnText2}>Back Home</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default OrderSuccessful

const styles = StyleSheet.create({

    container: {
        padding: 24
    },
    img1: {
        marginTop: 125 - 24,
        marginStart: 30 - 24
    },
    text1: {
        fontWeight: '700',
        height: 24,
        fontSize: 20,
        fontStyle: 'Klarna Text',
        textAlign: 'center',
        color: '#6D3805',
        marginTop: 55

    },
    text2: {
        textAlign: 'center',
        fontWeight: '400',
        letterSpacing: 0.41,
        marginTop: 12,
        marginStart: 12,
        marginEnd: 15,
        fontSize: 16,
        color: '#7F4E1D',
        fontFamily: 'Klarna Text',
    },
    btn: {
        marginTop: 45
    },

    btnOrder: {
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
        fontWeight: '700',
        fontSize: 18,
    },
    btnBackHome: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 17,
        paddingVertical: 13,
        paddingHorizontal: 24,
        width: '100%',
        height: 50,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#FF5E00'
    },
    btnText2: {
        color: '#FF5E00',
        fontFamily: 'Klarna Text',
        fontWeight: '700',
        fontSize: 18,
    }
})