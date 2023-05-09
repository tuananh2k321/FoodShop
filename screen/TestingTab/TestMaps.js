import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyAXjSuw8E1zhXWMLx1MQMUNEMtT1icEX4g';

class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                this.setState({ latitude, longitude });
            },
            error => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    render() {
        const { latitude, longitude, error } = this.state;
        const destination = { latitude: 10.853797, longitude: 106.628354 }; // Vị trí chỉ định 10.853797, 106.628354
        if (error) {
            return <Text>Error: {error}</Text>;
        } else if (latitude && longitude) {
            return (
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker coordinate={{ latitude, longitude }} />
                    <Marker coordinate={destination} />
                    <MapViewDirections
                        origin={{ latitude, longitude }}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor="hotpink"
                    />
                </MapView>
            );
        } else {
            return <Text>Loading...</Text>;
        }
    }
}

export default MapScreen;
