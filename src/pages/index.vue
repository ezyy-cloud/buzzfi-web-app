<template>
  <v-card class="mx-auto" elevation="1" max-width="500">
    <v-card-title class="d-flex align-center">
      <v-btn class="mr-2" icon>
        <v-icon>mdi-wifi</v-icon>
      </v-btn>
      <span class="font-weight-black">BuzzFi</span>
    </v-card-title>

    <!-- Container for the grid of cards -->
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="6"
        >
          <router-link class="text-decoration-none" :to="card.route">
            <v-card class="square-card" ripple>
              <v-card-title class="text-center">
                <v-icon class="custom-icon">{{ card.icon }}</v-icon> <!-- Displaying the icon -->
              </v-card-title>
              <v-card-title class="text-white text-center">{{ card.title }}</v-card-title>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
  const cards = [
    { title: 'Buy Voucher', icon: 'mdi-cash', route: '/vouchers' },
    { title: 'Balance Enquiry', icon: 'mdi-gauge', route: '/status' },
    { title: 'Locations', icon: 'mdi-map-marker', route: '/locations' },
    { title: 'Reseller', icon: 'mdi-store', route: '/reseller' },
    // Add more cards as needed with corresponding routes
  ]
</script>

<style>
.custom-icon {
  font-size: 50px; /* Adjust the size as needed */
}

.square-card {
  height: 200px; /* Set height to make it square */
  width: 100%; /* Ensure it takes the full width of the column */
  display: flex; /* Allow for alignment of inner content */
  flex-direction: column; /* Arrange content vertically */
  justify-content: center; /* Center content vertically */
  align-content: center; /* Center content horizontally */
}
</style>
