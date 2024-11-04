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
      <GoogleMap
        ref="mapRef"
        api-key="AIzaSyC-xywoXu2pIerk_NipVwKfQNnurgjSYew"
        :center="center"
        map-id="ee76b85a1d64dadd"
        style="width: 100%; height: 75vh"
        :zoom="17"
        @error="onMapError"
        @load="onMapLoad"
      >

        <!-- Dynamic Markers for each site -->
        <AdvancedMarker
          v-for="site in sites"
          :key="site.id"
          :options="{ position: getCoordinates(site.coordinates ?? ''), title: site.name }"
          :pin-options="pinOptions"
          @click="openModal(site)"
        />
      </GoogleMap>
      <!-- Site Info Modal -->
      <SiteInfoModal :on-close="modalClosed" :open-modal="showModal" :site="selectedSite" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { useSitesStore } from '@/stores/locations'
  import { onMounted, ref, shallowRef, watch } from 'vue'
  import { AdvancedMarker, GoogleMap } from 'vue3-google-map'
  import SiteInfoModal from '@/components/SiteInfoModal.vue'
  // Initialize the sites store
  const sitesStore = useSitesStore()
  const { fetchSites, sites } = sitesStore
  const selectedSite = ref(null)
  // Reference for the map and the initial center
  const mapRef = shallowRef(null)
  const center = ref({ lat: 0, lng: 0 }) // Default center
  const showModal = ref(false)

  // Function to open the modal and pass selected site info
  function openModal (site: any) {
    selectedSite.value = site // Set selected site for the modal
    showModal.value = true // Open the modal
  }
  // Close the modal
  function modalClosed () {
    showModal.value = false
  }
  // WiFi icon SVG
  const wifiIconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path fill="#FFFFFF" d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
    </svg>`

  // Parse the SVG string into a DOM element
  const parser = new DOMParser()
  const pinSvg = parser.parseFromString(wifiIconSvg, 'image/svg+xml').documentElement

  // Marker options
  const pinOptions = {
    background: '#05B6FF',
    borderColor: '#FFFFFF',
    glyph: pinSvg,
    glyphColor: '#FFFFFF',
  }

  // Fetch sites on component mount
  onMounted(async () => {
    await fetchSites()
    const userLocation = await getUserLocation()
    center.value = userLocation || center.value // Set user location or default center
  })

  // Function to get user location
  async function getUserLocation (): Promise<{ lat: number; lng: number } | null> {
    if (navigator.geolocation) {
      return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(
          position => {
            resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
          },
          () => {
            console.warn('Geolocation permission denied or unavailable.')
            resolve(null) // Fallback to default center
          }
        )
      })
    } else {
      console.warn('Geolocation is not supported by this browser.')
      return null // Fallback to default center
    }
  }
  // Helper function to parse coordinates
  function getCoordinates (coordinateString: string): { lat: number; lng: number } {
    if (!coordinateString) return { lat: 0, lng: 0 }
    const [lat, lng] = coordinateString.split(',').map(Number)
    return { lat, lng }
  }

  function onMapLoad () {
    console.log('Map loaded successfully.')
  }

  function onMapError (error: any) {
    console.error('Error loading map:', error)
  }

  watch(sites, newSites => {
    console.log('Sites updated:', newSites)
  })

</script>

<style>
/* Customize styles here if necessary */
</style>
