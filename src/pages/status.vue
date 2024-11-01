<template>
  <v-card class="mx-auto" elevation="1" max-width="500">
    <v-card-title class="d-flex align-center">
      <v-btn class="mr-2" icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span class="font-weight-black">Balance Enquiry</span>
    </v-card-title>

    <v-card-text v-if="!voucher && !error">
      Check how much you have used up on your voucher
    </v-card-text>

    <v-card-text v-if="!voucher && !error">
      <!-- Voucher Code Input -->
      <div class="text-subtitle-2 font-weight-black mb-1">Enter Voucher Code</div>
      <v-text-field
        v-model="voucherCode"
        dense
        label="Voucher Code"
        placeholder="e.g. 1234567890"
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
        @click="checkStatus"
      >
        Check Status
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

    <!-- Display Voucher Details -->
    <v-card-text v-if="voucher">
      <div><strong>Voucher Code:</strong> {{ voucher.voucher_code }}</div>
      <div><strong>Data Available:</strong> {{ (voucher.qos_usage_quota / 1024).toFixed(2) }} GB</div>
      <div><strong>Expires On:</strong> {{ new Date(voucher.end * 1000).toLocaleString() }}</div>
      <div><strong>Duration:</strong> {{ (voucher.duration / 86400).toFixed(2) }} days</div>
      <div><strong>Data Received:</strong> {{ (voucher.rx_bytes / Math.pow(1024, 3)).toFixed(2) }} GB</div>
      <div><strong>Data Sent:</strong> {{ (voucher.tx_bytes / Math.pow(1024, 3)).toFixed(2) }} GB</div>
      <div><strong>IP Address:</strong> {{ voucher.ip }}</div>
    </v-card-text>

    <!-- Display Error Message -->
    <v-card-text v-if="error">
      <div class="error-text">{{ error }}</div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useAppStore } from '@/stores/app' // Adjust the path if needed

  // Initialize store and reactive data
  const store = useAppStore()
  const voucherCode = ref<string>('')

  // Use computed properties for store state
  const loading = computed(() => store.loading)
  const voucher = computed(() => store.voucher)
  const error = computed(() => store.error)

  // Method to call the action and fetch voucher details
  const checkStatus = async () => {
    if (voucherCode.value) {
      await store.fetchVoucher(voucherCode.value)
    }
  }
</script>

<style scoped>
.error-text {
  color: red;
}
</style>
