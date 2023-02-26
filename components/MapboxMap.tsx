// components/MapboxMap.tsx

import * as React from "react";
import mapboxgl from "mapbox-gl";

function MapboxMap() {
  const [map, setMap] = React.useState<mapboxgl.Map>();

  const mapNode = React.useRef<any>(null);

  React.useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    mapboxgl.accessToken =
      "pk.eyJ1IjoiZmVicmFzZ2FtZXIiLCJhIjoiY2xlY3d3MTF6MDFiajNvdGs1Mm11dW13ZCJ9.W-MwrzlUPB9HnbxkqMnijg" ||
      "";

    const mapboxMap = new mapboxgl.Map({
      container: node,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-8.61099, 41.14961],
      zoom: 12,
    });

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} style={{ width: "100%", height: "500px" }} />;
}

export default MapboxMap;
