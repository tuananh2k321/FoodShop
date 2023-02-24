import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native'
import React from 'react'

const OnGoing = () => {
    return (
        <SafeAreaView style={styles.main} >
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>

                        <Image style={{ marginLeft: 10 }} source={require('../../../assets/icon/IconCalendar.png')} />

                        <Text style={styles.textDate}>March 5, 2019</Text>

                    </View>
                    <Text style={styles.textTime}>6:30 pm</Text>
                </View>

                {/* Process */}
                <View style={styles.OnGoing}>
                    <View style={styles.boxStep}>
                        <Image source={require('../../../assets/icon/IconCheckActive.png')}></Image>
                        <Image source={require('../../../assets/img/PackOfStuff.png')}></Image>
                        <Text style={styles.textStep}>We are packin your items...</Text>
                    </View>
                    <View style={styles.boxStep}>
                        <Image source={require('../../../assets/icon/IconCheckActive.png')}></Image>
                        <Image source={require('../../../assets/img/ScooterDelivery.png')}></Image>
                        <Text style={styles.textStep}>We are packin your items...</Text>
                    </View>
                    <View style={styles.boxStep}>
                        <Image source={require('../../../assets/icon/IconUnCheck.png')}></Image>
                        <Image source={require('../../../assets/img/HandAndStuff.png')}></Image>
                        <Text style={styles.textStep}>We are packin your items...</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OnGoing

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        marginHorizontal: 16,
        marginTop: 14,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    textDate: {
        marginLeft: 6,
        fontWeight: 'bold',
        color: "#6D3805",
        fontSize: 22,

    },
    textTime: {
        fontSize: 14,
        letterSpacing: 0.9,
        lineHeight: 32,
        color: '#F37A20'
    },
    OnGoing: {
        marginTop: 50, marginLeft: 2, marginRight: 5,
    },
    boxStep: {
        marginBottom:50,

        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    textStep: {
        color: "#6D3805",
        fontSize: 16,
        lineHeight: 32,
        letterSpacing: 0.9,
    }
})