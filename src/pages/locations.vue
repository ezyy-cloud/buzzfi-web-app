<template>
  <v-card class="mx-auto" elevation="1" max-width="500">
    <!-- Title with Back Button -->
    <v-card-title class="d-flex align-center py-5">
      <v-btn class="mr-2" icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span class="font-weight-black">BuzzFi Locations</span>
    </v-card-title>

    <!-- Map Container -->
    <v-card-text class="pa-0">
      <GMapMap
        :center="{ lat: 37.7749, lng: -122.4194 }"
        style="width: 100%; height: 400px"
        :zoom="12"
      >
        <!-- Example Marker (Add more markers as needed) -->
        <GMapMarker :position="{ lat: 37.7749, lng: -122.4194 }" />
      </GMapMap>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">

// Any additional logic can go here
</script>

<style>
/* Customize styles here if necessary */
</style>
