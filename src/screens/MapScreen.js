import * as React from "react";
import { View, Text } from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default function MapScreen({ navigation }) {
  var John = {
    latitude: 46.78825,
    longitude: -122.4324,
  };
  var Mary = {
    latitude: 47.78825,
    longitude: -121.4324,
  };
  var Jimmy = {
    latitude: 46.48825,
    longitude: -121.4324,
  };

  return (
    <MapView style={{ flex: 1 }} provider={PROVIDER_GOOGLE} showsUserLocation>
      <Marker coordinate={John} title={"John"} description={"(123) 456-7890"} />
      <Marker coordinate={Mary} title={"Mary"} description={"(987) 456-1234"} />
      <Marker
        coordinate={Jimmy}
        title={"Jimmy"}
        description={"(765) 123-4567"}
      />
    </MapView>
  );
}
