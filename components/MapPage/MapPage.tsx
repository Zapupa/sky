import React from "react";
import { Poppins } from "next/font/google";
import styles from "./MapPage.module.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

import {
  YMaps,
  Map,
  FullscreenControl,
  GeoObject,
  Polyline,
  Button,
  Placemark,
} from "@pbe/react-yandex-maps";

const API_KEY = "8ad44015-6f2d-4403-92cb-4daa45aff76c";

const defaultMapState = {
  center: [38.626032, -90.190702],
  zoom: 12,
};

const MapPage = () => {
  return (
    <div className={styles.bg}>
      <div className={`${styles.page} ${poppins.className}`}>
        <YMaps
          query={{
            apikey: API_KEY,
          }}
        >
          <Map className={styles.map} defaultState={defaultMapState}>
            <Placemark geometry={[38.626032, -90.190702]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default MapPage;
