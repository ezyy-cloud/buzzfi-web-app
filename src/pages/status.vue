<template>
  <v-card class="mx-auto" elevation="1" max-width="500">
    <v-card-title class="d-flex align-center">
      <v-btn class="mr-2" icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span class="font-weight-black">Balance Enquiry</span>
    </v-card-title>

    <v-card-text v-if="!voucher && !error">
      Enter voucher code to check how much you have used up on your voucher
    </v-card-text>

    <v-card-text v-if="!voucher && !error">
      <!-- Voucher Code Input -->
      <div class="text-subtitle-2 font-weight-black mb-1">Voucher Code</div>
      <v-text-field
        v-model="voucherCode"
        dense
        label="Enter voucher code here"
        placeholder="e.g. 1234567890"
        single-line
        type="tel"
        variant="outlined"
      />

      <v-btn
        block
        class="text-none mb-4"
        color="#05B6FF"
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
    <StatusCard v-if="voucher" :voucher="voucher" />

    <!-- Display Error Message -->
    <v-card-text v-if="error">
      <div class="error-text">{{ error }}</div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { useVoucherStore } from '@/stores/voucher' // Adjust the path if needed
  import StatusCard from '@/components/statusCard.vue'

  // Initialize store and reactive data
  const voucherStore = useVoucherStore()
  const voucherCode = ref<string>('')

  // Use computed properties for store state
  const loading = computed(() => voucherStore.loading)
  const voucher = computed(() => voucherStore.voucher)
  const error = computed(() => voucherStore.error)

  // Method to call the action and fetch voucher details
  const checkStatus = async () => {
    if (voucherCode.value) {
      await voucherStore.fetchVoucher(voucherCode.value)
    }
  }

  // Reset voucher data when the component is mounted
  onMounted(() => {
    voucherCode.value = ''
    voucherStore.voucher = null // Clear the voucher data in the store
    voucherStore.error = '' // Clear any error messages
  })
</script>

<style scoped>
.error-text {
  color: red;
}
</style>
