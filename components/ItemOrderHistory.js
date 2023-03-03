<Image />
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ItemOrderHistory = () => {
    return (
        <TouchableOpacity style={styles.container}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.image} source={require('../assets/icon/IconOrderHistory.png')} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.nameOrders}>Order #345</Text>
                    <Text style={styles.stateOders}>Delivered</Text>
                    <Text style={styles.timeReceive}>October 26, 2014</Text>
                </View>
            </View>

            <Text style={styles.priceOrders}>$700</Text>
        </TouchableOpacity>
    )
}

export default ItemOrderHistory

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      
    },
    image: {
        width: 44,
        height: 44,
        marginRight: 10,
    },
    nameOrders: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '700', color: '#804F1E',
        marginBottom: 4,
    },
    stateOders: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '400',
        color: '#5EC401',
        marginBottom: 3,

    },
    timeReceive: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '400',
        color: '#804F1E'
    },
    priceOrders: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
        color: '#F37A20'
    }
})