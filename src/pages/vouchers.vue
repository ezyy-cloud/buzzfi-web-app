<template>
  <v-card class="mx-auto" elevation="1" max-width="500">
    <v-card-title class="d-flex align-center">
      <v-btn class="mr-2" icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span class="font-weight-black">Buy a voucher</span>
    </v-card-title>

    <v-card-text>
      Buy your BuzzFi Vouchers online using Ecocash, OneWallet, InnBucks or your ZimSwitch Bank Card
    </v-card-text>

    <v-card-text>
      <div class="text-subtitle-2 font-weight-black mb-1">Select Bundle</div>
      <v-select
        v-model="selectedBundle"
        dense
        :item-props="bundlesProps"
        :items="bundles"
        label="Bundles"
      />

      <!-- Phone Number Input -->
      <div class="text-subtitle-2 font-weight-black mb-1">Enter Phone Number</div>
      <v-text-field
        v-model="phoneNumber"
        dense
        label="Phone Number"
        placeholder="e.g. 123-456-7890"
        single-line
        type="tel"
        variant="outlined"
      />

      <v-btn
        block
        class="text-none mb-4"
        color="indigo-darken-3"
        :disabled="loading"
        :loading="loading"
        size="x-large"
        variant="flat"
        @click="loading = !loading"
      >
        Verify and Pay
      </v-btn>

      <v-btn
        block
        class="text-none"
        color="grey-lighten-3"
        size="x-large"
        variant="flat"
        @click="$router.go(-1)"
      >
        Cancel
      </v-btn>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
  import { ref, watch } from 'vue'

  // Define reactive data with ref()
  const bundles = ref([
    { name: 'Econo Week', price: '$1', validity: '7 days', quota: '2 GB', id: '1' },
  ])

  const loading = ref<boolean>(false)

  // Watcher in Composition API style
  watch(loading, val => {
    if (val) {
      setTimeout(() => (loading.value = false), 2000) // Using loading.value for reactivity
    }
  })

  const bundlesProps = (bundle: any) => {
    return {
      title: bundle.name + ' ' + '(' + bundle.quota + ' for ' + bundle.validity + ')',
      subtitle: bundle.price,
    }
  }

  const selectedBundle = ref<string | null>(null)
  const phoneNumber = ref<string>('')
</script>

<style>
</style>
