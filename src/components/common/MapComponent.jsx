import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState, useEffect } from "react";

export default function MapComponent(props) {
  const [coords, setCoords] = useState([]);

  function getCoords() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log([position.coords.latitude, position.coords.longitude]);
      setCoords([position.coords.latitude, position.coords.longitude]);
    });
  }

  useEffect(() => {
    if (props.coords) {
      setCoords(props.coords);
    } else {
      getCoords();
    }
  }, []);

  const defaultState = {
    center: coords,
    zoom: 16,
  };

  let normal_size = "40vw";
  let small_screen = 680;

  if (window.innerWidth < small_screen) {
    normal_size = "90vw";
  }

  return (
    <YMaps>
      <Map defaultState={defaultState} width={normal_size}>
        <Placemark geometry={coords} />
      </Map>
    </YMaps>
  );
}
