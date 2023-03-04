import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

const DATA = [
    {
        id: '1',
        image: require('../img/TAO.png'),
        name: 'Red Apple',
        gia: '$4,99 kg',
    },
    {
        id: '2',
        image: require('../img/chuoi.png'),
        name: 'Red Apple',
        gia: '$4,99 kg',
    },

    {
        id: '3',
        image: require('../img/bo.png'),
        name: 'Red Apple',
        gia: '$4,99 kg',
    },

    {
        id: '4',
        image: require('../img/ca.png'),
        name: 'Red Apple',
        kl: '60g',
        gia: '$4,99 kg',
    },

    {
        id: '5',
        image: require('../img/TAO.png'),
        name: 'Red Apple',
        kl: '60g',
        gia: '$4,99 kg',
    },

]

const Itemes = () => {
    const [listItiem, setListItiem] = useState(DATA);
    const ItiemView = ({ item }) => {
        return (
            <View style={styles.item0}>
                <View style={styles.item}>
                    <Image style={styles.img} source={item.image} />
                    <View>
                        <Text style={styles.name}>  {item.name} </Text>
                        <View style={{ marginTop: 25, marginStart: 30, backgroundColor: '#F4F4F4', borderRadius: 10, maxWidth: '100%', flexDirection: 'row', }}>
                            <Image source={require('../img/them.png')}></Image>
                            <Text style={{ textAlign: 'center', marginStart: 15, marginEnd: 15, fontSize: 12 }}>
                                2
                            </Text>
                            <Image source={require('../img/munus.png')} />
                        </View>
                    </View>

                    <View style={{ marginTop: 45 }}>
                        <Text style={styles.gia2}>  {item.gia} </Text>
                    </View>
                    <View style={{ height: 1, width: '100%', backgroundColor: '#c8c8c8' }} />

                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={{ padding: 24 }}>
            <View style={{ alignItems: 'center', }}>
                <Text style={{ alignItems: 'center', color: '#FF5E00', fontWeight: '600', fontSize: 30, lineHeight: 75 }}>
                    Itemes
                </Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={'1'}
                    data={listItiem}
                    renderItem={ItiemView}
                    keyExtractor={(item, index) => index.toString()} />
            </View>
        </SafeAreaView>
    )
}

export default Itemes

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    item0: {
        marginTop: 7,

    },
    name: {
        marginStart: 15,
        fontWeight: '600',
        fontSize: 15,
        marginTop: 10,
        color: 'black',

    },
    img: {
        width: 90
    },
    gia: {
        fontWeight: '600',
        fontSize: 15,
        color: '#52CC6D',

    },
    gia2: {
        // marginStart: '15',
        fontWeight: '600',
        fontSize: 15,
        marginStart: 60,
        marginTop: 10,

    },
})