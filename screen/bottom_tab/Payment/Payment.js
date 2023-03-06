import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput, Pressable, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-date-picker'
import BouncyCheckbox from "react-native-bouncy-checkbox";
const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;

const Payment = (props) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const { navigation } = props;
    const Back = () => {
        navigation.pop(1)
    }
    const [pickUpShow, setpickUpShow] = useState(false)
    const [changeIcon, setchangeIcon] = useState('')
    const [dateDelivery, setdateDelivery] = useState('')
    const [timeDelivery, settimeDelivery] = useState('')
    const goTPEditAddress = () => {
        navigation.navigate('EditAddress')
    }
    const goToCart = () => {
        navigation.navigate("Cart1")
    }
    const pickTime = () => {
        let time = "8AM - 11AM";
        settimeDelivery(time);
        console.log(time)
    }

    return (
        <KeyboardAwareScrollView>
            <ScrollView>
                <SafeAreaView style={styles.main}>
                    <View style={styles.container}>
                        {/* Header */}
                        <View style={styles.header}>
                            <TouchableOpacity onPress={Back} >
                                <Image source={require('../../../assets/img/IconArrow.png')} />
                            </TouchableOpacity>
                            <View style={styles.title}>
                                <Text style={styles.title}>Payment</Text>
                            </View>
                            <Text></Text>
                        </View>


                        {/* In-Store Pick Up */}
                        <View style={{ marginHorizontal: 6, marginTop: 40 }}>

                            {!pickUpShow && (
                                <View >
                                    {/* Location  */}
                                    <View style={styles.boxLocation}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, }}>
                                            <Text style={styles.tilte2}>Delivery Location</Text>
                                            <TouchableOpacity
                                                onPress={goTPEditAddress}>
                                                <Text style={[styles.Text, { color: '#FF5E00' }]}>Change</Text>

                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{}} source={require('../../../assets/icon/IconLocation.png')} />

                                            <Text style={{ fontSize: 14, color: '#6D3805', lineHeight: 17, marginLeft: 18 }}>Floor 4, Kartini Tower No 43 {'\n'}
                                                Lumajang, Jawa Timur</Text>
                                        </View>
                                    </View>
                                    {/* date time expected */}
                                    <View style={styles.boxLocation}>
                                        <Text style={styles.tilte2}>Expected date & Time</Text>
                                        <TouchableOpacity onPress={() => setOpen(true)} >
                                            <View style={styles.DateTimeBox}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image source={require('../../../assets/icon/IconCalendar2.png')} />
                                                    <Text style={{
                                                        fontSize: 16, color: '#6D3805A3',
                                                        marginLeft: 18,
                                                    }} placeholder='Select Date' >{dateDelivery}</Text>
                                                </View>

                                                <Image source={require('../../../assets/icon/IconArrowDown.png')} />
                                            </View>
                                        </TouchableOpacity>

                                        <DatePicker
                                            modal
                                            open={open}
                                            date={date}
                                            onConfirm={(date) => {
                                                setOpen(false)
                                                setDate(date)

                                                //console.log(typeof(date+''))
                                                let dateNe = (date + '').substring(4, 15);
                                                console.log(dateNe)
                                                setdateDelivery(dateNe)


                                            }}
                                            onCancel={() => {
                                                setOpen(false)
                                            }}
                                        />


                                        {/* Time */}
                                        <View style={styles.boxTimeExpected}>
                                            <View style={{ flexDirection: 'row', }}>
                                                <TouchableOpacity
                                                    onPress={pickTime}
                                                    style={styles.itemTime}>
                                                    <Text style={styles.TextTime}>8 AM - 11 AM</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={styles.itemTime}>
                                                    <Text style={styles.TextTime}>11 AM - 13 PM</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={styles.itemTime}>
                                                    <Text style={styles.TextTime}>13 PM - 15 PM</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: 16, }}>
                                                <TouchableOpacity style={styles.itemTime}>
                                                    <Text style={styles.TextTime}>15 PM - 17 PM</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={styles.itemTime}>
                                                    <Text style={styles.TextTime}>17 PM - 19 PM</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={styles.itemTime}>
                                                    <Text style={styles.TextTime}>19 PM - 21 PM</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                                <Text style={styles.tilte2}>In-Store Pick Up</Text>
                                <Text style={styles.tilte2}>FREE</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, alignItems: 'center' }}>
                                <Text style={[styles.tilte2, { fontWeight: '400' }]}>Some Stores May Be Temporarily {'\n'}
                                    Unavalable.</Text>
                                <TouchableOpacity onPress={() => [setpickUpShow(!pickUpShow), setchangeIcon(!changeIcon)]}>
                                    {
                                        changeIcon ? (
                                            <Image source={require('../../../assets/icon/IconArrowDownBrown.png')} />
                                        ) : (
                                            <Image source={require('../../../assets/icon/IconArrowRoghtBrown.png')} />
                                        )
                                    }
                                </TouchableOpacity>
                            </View>

                            {
                                pickUpShow ? (
                                    <View>
                                        <View style={styles.searchBox}>
                                            <TouchableOpacity>
                                                <Image style={{ width: 14, height: 14, marginHorizontal: 15 }} source={require('../../../assets/icon/icons8-search-50.png')} />
                                            </TouchableOpacity>
                                            <TextInput placeholder='Search For Town, Street, Zip Code...' />
                                        </View>

                                        <View style={styles.pickAtStore} >
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 20 }}>

                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text style={[styles.tilte2, { letterSpacing: 0.5, marginBottom: 15 }]}>Goteborg {'\n'}
                                                        Arkaden</Text>
                                                    <Text style={{ fontSize: 18, lineHeight: 22, fontWeight: '400', color: "#6D3805" }}>1.4 MI</Text>
                                                </View>
                                                <TouchableOpacity>
                                                    <Image source={require('../../../assets/icon/IconArrowRoghtBrown.png')} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, borderTopolor: '#6D38051C', borderTopWidth: 0.2 }}>

                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text style={[styles.tilte2, { letterSpacing: 0.5, marginBottom: 15 }]}>Kungsbacka {'\n'}
                                                        Kungsmassan</Text>
                                                    <Text style={{ fontSize: 18, lineHeight: 22, fontWeight: '400', color: "#6D3805" }}>17 MI</Text>
                                                </View>
                                                <TouchableOpacity>
                                                    <Image source={require('../../../assets/icon/IconArrowRoghtBrown.png')} />
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </View>
                                ) : (
                                    null
                                )
                            }

                        </View>
                        {/* Basket */}
                        <TouchableOpacity onPress={goToCart}>

                            <View style={styles.Basket}>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../../../assets/icon/IconBrownBasket.png')} />
                                    <Text style={[styles.tilte2, { marginLeft: 10 }]}>See Itemes</Text>
                                </View>
                                <TouchableOpacity >
                                    <Image source={require('../../../assets/icon/IconArrowRoghtBrown.png')} />
                                </TouchableOpacity>

                            </View>
                        </TouchableOpacity>


                        {/* Payment Method */}
                        <View style={styles.PaymentMethod}>
                            <Text style={styles.tilte2}>Payment Method</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ marginTop: 28, flexDirection: 'row' }}>
                                    <Image source={require('../../../assets/icon/IconApplePay.png')} />

                                    <Text style={{ fontSize: 16, lineHeight: 19, color: '#6D3805', marginLeft: 10, fontWeight: '400' }}>Apple Pay</Text>
                                </View>
                                <BouncyCheckbox
                                    size={30}
                                    isChecked={true}
                                    style={{ marginTop: 28, flexDirection: 'row', borderColor: '#FFF4E9' }}
                                    fillColor="#5EC401"

                                    unfillColor="#FFF4E9" />
                            </View>
                            <View style={{ borderTopWidth: 0.2, borderColor: 'black', marginTop: 25, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ marginTop: 28, flexDirection: 'row' }}>
                                    <Image source={require('../../../assets/icon/IconCashOnDelivery.png')} />
                                    <Text style={{ fontSize: 16, lineHeight: 19, color: '#6D3805', marginLeft: 10, fontWeight: '400' }}>Cash on delivery</Text>
                                </View>
                                <BouncyCheckbox
                                    size={30}
                                    isChecked={false}
                                    style={{ marginTop: 28, flexDirection: 'row', borderColor: '#FFF4E9' }}
                                    fillColor="#5EC401"
                                    unfillColor="#FFF4E9" />
                            </View>
                        </View>


                        {/* order Summary */}
                        <View style={styles.PaymentMethod}>
                            <Text style={[styles.tilte2, { marginBottom: 7.5 }]}>Order Sammery</Text>
                            <View style={styles.itemSummery}>
                                <Text style={styles.textItemSummery}>Subtotal</Text>
                                <Text style={styles.textItemSummery}>$137.00</Text>
                            </View>
                            <View style={styles.itemSummery}>
                                <Text style={styles.textItemSummery}>Tax</Text>
                                <Text style={styles.textItemSummery}>$4.50</Text>
                            </View>
                            <View style={styles.itemSummery}>
                                <Text style={styles.textItemSummery}>Delivery Price</Text>
                                <Text style={styles.textItemSummery}>$5.00</Text>
                            </View>

                            <View style={styles.itemSummery}>
                                <Text style={[styles.textItemSummery, { fontWeight: 'bold' }]}>Total:</Text>
                                <Text style={[styles.textItemSummery, { fontWeight: 'bold' }]}>$146.50</Text>


                            </View>
                        </View>

                        {/* BUTTON  */}

                        <TouchableOpacity style={styles.btnAdd}>
                            <Text style={[styles.text, { color: 'white', fontWeight: 'bold', fontSize: 20, }]}>
                                CheckOut$141.50
                            </Text>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            </ScrollView>

        </KeyboardAwareScrollView>
    )
}

export default Payment

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {

        bacgroundColor: "#fff",
        marginHorizontal: 16,

    },
    header: {
        justifyContent: 'space-between',
        marginTop: 10,
        flexDirection: 'row'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: "#FF5E00",
        lineHeight: 29,

    },
    Text: {
        color: '#FF5E00', fontSize: 18, lineHeight: 22, fontWeight: '400'
    },


    boxLocation: {
        backgroundColor: '#FFF4E9',
        borderRadius: 20,
        padding: 18,
        marginTop: 13,
        borderWidth: 1,
        borderColor: '#FFE6CC',

    },
    tilte2: {
        color: '#6D3805',
        lineHeight: 22,
        letterSpacing: -0.123,
        fontSize: 18,
        fontWeight: 'bold'
    },
    DateTimeBox: {
        flexDirection: 'row',
        marginTop: 16,

        backgroundColor: 'white',
        borderRadius: 7,
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 16, borderWidth: 1,
        borderColor: '#FFE6CC',
        paddingVertical: 14,

    },
    boxTimeExpected: {
        marginTop: 16,

    },
    itemTime: {
        backgroundColor: 'white',
        borderRadius: 7,
        paddingHorizontal: 10,
        paddingVertical: 11,
        marginRight: 15,
        width: 96,
        height: 40,

    },
    TextTime: { fontSize: 11, color: '#6D3805', fontWeight: '400', lineHeight: 16, height: 16, width: 80, },
    Basket: {
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#FFE6CC',
        borderRadius: 20,
        backgroundColor: '#FFF4E9',
        paddingHorizontal: 16,
        paddingVertical: 37,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    PaymentMethod: {
        marginTop: 23,
        padding: 16,
        backgroundColor: '#FFF4E9',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFE6CC',

    },
    itemSummery: { paddingVertical: 7.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    textItemSummery: {
        color: '#6D3805',
        lineHeight: 22,
        letterSpacing: -0.123,
        fontWeight: '400',
        fontSize: 18,

    },
    btnAdd: {
        marginTop: 53,
        backgroundColor: '#FF5E00',
        width: windowWIdth - 40,
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    searchBox: { flexDirection: 'row', backgroundColor: '#FAFAFA', borderRadius: 7, alignItems: 'center', marginTop: 20 },
    pickAtStore: {
        borderWidth: 1,
        borderColor: '#FFE6CC',
        backgroundColor: '#FFF4E9',
        borderRadius: 7,
        paddingHorizontal: 16,
        paddingVertical: 17,
        marginTop: 9
    }
})