









import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'YOUR_API_KEY';
import Geolocation from '@react-native-community/geolocation';
export default function App(props) {
    const { navigation } = props;
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [directions, setDirections] = useState(null);
    // add this to the component's state
    const [currentLocation, setCurrentLocation] = useState(null);
    const handleDirection = () => {
        if (origin && destination) {
            setDirections({
                origin: origin.description,
                destination: destination.description,
            });
        }
    };
    const [position, setPosition] = useState({
        latitude: 10.853864,

        longitude: 106.627351,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
    });

    // add this to the component's useEffect hook
    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                setCurrentLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }, []);
    return (
        <View style={styles.container}>
             <MapView
                style={styles.map}
                initialRegion={position}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsCompass={true}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}>
                <Marker
                    title='Yor are here'
                    description='This is a description'
                    coordinate={position} /> 
           
            </MapView>

            <View style={styles.search}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{width:20,height:20}} source={require('../../assets/img/IconArrow.png')} />
                </TouchableOpacity>
            </View>
        </View>

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    search: {
        position: 'absolute',
        top: 50,
        left: 10,
        right: 10,
        flexDirection: 'row',
    },

});
