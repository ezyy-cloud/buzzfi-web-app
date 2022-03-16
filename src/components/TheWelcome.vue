<template>
<v-container fill-height fluid>
<v-row align="center" justify="center" style="height: 100vh;">
  <v-col>
  <v-card elevation="4">
  <GoogleMap
  api-key="AIzaSyC-xywoXu2pIerk_NipVwKfQNnurgjSYew"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="15"
  >
    <Marker 
      v-for="location in locations"
      :options="{
        position: location.coordinates,
        animation: true,
        icon: {
          url: 'https://buzz-graphics.s3.af-south-1.amazonaws.com/wifiMarker.svg',
          scaledSize: { width: 20, height: 20 },
        }
      }"
    />
  </GoogleMap>
  </v-card>
  </v-col>
  </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: -18.53178, lng: 32.12389 }
    const locations = [
      {
        coordinates: { lat: -18.531399, lng: 32.123851}
      },
      {
        coordinates: { lat: -18.532394, lng: 32.125097}
      },
      {
        coordinates: { lat: -18.533115, lng: 32.125332}
      },
      {
        coordinates: { lat: -18.533264, lng: 32.126238}
      },
      {
        coordinates: { lat: -18.532249, lng: 32.125683}
      },
      {
        coordinates: { lat: -18.532700, lng: 32.124478}
      }
    ]
    return { center, locations }
  },
})
</script>
