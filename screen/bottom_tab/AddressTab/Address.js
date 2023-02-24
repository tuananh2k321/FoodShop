import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Address = (props) => {
    const { navigation } = props;
    const goNewAddress = () => {
        navigation.navigate("NewAddress")
    }
    const Back=()=>{
        navigation.pop(1)
    }
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={Back}>
                        <Image source={require('../../../assets/img/IconArrow.png')} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={goNewAddress} >
                        <Image source={require('../../../assets/icon/IconPlus.png')} />

                    </TouchableOpacity>

                </View>
                <View style={styles.title}>
                    <Text style={styles.title}> Addresses</Text>
                </View>

                {/* Address */}
                <View style={styles.Address}>
                    <View style={styles.itemAddress}>
                        <View style={[styles.itemAddress, { marginBottom: 1 }]}>
                            <Image source={require('../../../assets/icon/IconHome.png')} />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={styles.textNameAddress}>Home</Text>
                                <Text style={styles.textPosition}>Lungangen 6, 41722</Text>
                            </View>
                        </View>
                        <Image source={require('../../../assets/icon/IconArrowRight.png')} />
                    </View>

                    <View style={styles.itemAddress}>
                        <View style={[styles.itemAddress, { marginBottom: 1 }]}>
                            <Image source={require('../../../assets/icon/IconBag.png')} />
                            <View style={{ marginLeft: 8 }}>
                                <Text style={styles.textNameAddress}>Office</Text>
                                <Text style={styles.textPosition}>Lungangen 6, 41722</Text>
                            </View>
                        </View>
                        <Image source={require('../../../assets/icon/IconArrowRight.png')} />
                    </View>
                </View>

            </View>
        </SafeAreaView>

    )
}

export default Address

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        marginTop: 10,
        bacgroundColor: "#fff",
        marginHorizontal: 20,

    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,

    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#FF5E00',
        fontWeight: 'bold'
    },
    Address: {
        marginTop: 60,

    },
    itemAddress: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth: 2, borderColor: 'black',
        marginBottom: 50,
    },
    textNameAddress: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        color: '#6D3805',

    },
    textPosition: {
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: 22,
        color: '#6D3805',

    }
})