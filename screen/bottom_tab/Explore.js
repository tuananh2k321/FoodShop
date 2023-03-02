import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

const DATA = [
    {
        id: '1',
        image: require('../../assets/img/cake.png'),
    },
    {
        id: '2',
        image: require('../../assets/img/Ice.png'),
    },
    {
        id: '3',
        image: require('../../assets/img/egg.png'),
    },
    {
        id: '4',
        image: require('../../assets/img/juice.png'),
    },
    {
        id: '5',
        image: require('../../assets/img/seaFood.png'),
    },
    {
        id: '6',
        image: require('../../assets/img/Fish2.png'),
    },
    {
        id: '7',
        image: require('../../assets/img/Meat2.png'),
    },
    {
        id: '8',
        image: require('../../assets/img/Vegetable.png'),
    },
    {
        id: '9',
        image: require('../../assets/img/Fruits.png'),
    },
    {
        id: '10',
        image: require('../../assets/img/cake.png'),
    },
    {
        id: '11',
        image: require('../../assets/img/Ice.png'),
    },
    {
        id: '12',
        image: require('../../assets/img/egg.png'),
    },


]

const Explore = () => {
    const [listItiem, setListItiem] = useState(DATA);

    const ItiemView = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image style={styles.img} source={item.image} />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
            <View style={styles.selectContainer}>
                <Text style={styles.textCategories}> Categories </Text>
            </View>
            <View style={styles.inputContainer}>
                <Image style={styles.imgSearch} source={require('../img/search.png')} />
                <TextInput style={styles.textSearch} placeholder='Search' />
            </View>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={'3'}
                    data={listItiem}
                    renderItem={ItiemView}
                    keyExtractor={(item, index) => index.toString()} />
            </View>
        </SafeAreaView>
    )
}

export default Explore

const styles = StyleSheet.create({
    selectContainer: {
        alignItems: 'center',
    },
    selectContainer: {
        alignItems: 'center',
    },

    textCategories: {
        fontWeight: '700',
        lineHeight: 41,
        letterSpacing: 0.41,
        marginTop: 20,
        fontSize: 24,
        color: '#FF5E00',
        fontFamily: 'Klarna Text',
    },
    inputContainer: {
        position: 'relative',
        backgroundColor: '#F3F3F3',
        marginTop: 16,
        borderRadius: 10,
    },

    imgSearch: {
        position: 'absolute',
        top: 16, left: 10
    },

    textSearch: {
        fontSize: 16,
        paddingLeft: 27,
        padding: 10,
        height: 48,
        marginLeft: 16,
        color: '#6D3805'
    },
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 15,
    },
    item: {
        marginRight: 8,
        marginTop: 12,
        padding: 3,
    },

})