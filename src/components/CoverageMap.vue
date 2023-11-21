<template>
  <div>
    <GoogleMap ref="mapRef" api-key="AIzaSyC-xywoXu2pIerk_NipVwKfQNnurgjSYew" style="width: 100%; height: 100vh"
      :center="center" :zoom="15">
      <MarkerCluster>
        <Marker v-for="location in locations" :options="{
          position: location.coordinates,
          animation: true,
          icon: {
            url: 'https://buzz-graphics.s3.af-south-1.amazonaws.com/wifiMarker.svg',
            scaledSize: { width: 20, height: 20 },
          }
        }" />
      </MarkerCluster>
    </GoogleMap>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker, MarkerCluster },
  setup() {
    const mapRef = ref()

    const center = { lat: -18.53178, lng: 32.12389 }

    const locations = [
      {
        coordinates: { lat: -18.531399, lng: 32.123851 }
      },
      {
        coordinates: { lat: -17.8212572, lng: 31.0482664 }
      }
    ]

    watch(() => mapRef.value?.ready, (ready: boolean) => {
      if (!ready) { return}

      // do something with the api using `mapRef.value.api`
      // or with the map instance using `mapRef.value.map`
      const gmap = mapRef.value.map;
      const api = mapRef.value.api;
      const bounds = new api.LatLngBounds();

      for (var i = 0; i < locations.length; i++) {
        bounds.extend(locations[i].coordinates);
      }

      gmap.fitBounds(bounds);
    })
    return { center, locations, mapRef }
  },
})
</script>
