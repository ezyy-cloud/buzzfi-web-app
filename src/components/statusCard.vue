<template>
  <v-card>
    <!-- Display formatted voucher code with hyphen after the fifth digit -->
    <v-card-title class="text-overline my-3">
      {{ formattedVoucherCode }}
    </v-card-title>

    <v-card-subtitle class="text-white text-h3 font-weight-bold my-3">
      {{ progress }}%
    </v-card-subtitle>

    <v-card-text>
      <div class="position-absolute text-caption text-white ml-3" :style="`right: calc(${progress} - 32px); z-index: 1`">
        Data Usage
      </div>

      <v-progress-linear color="#05B6FF" height="22" :model-value="progress" rounded="lg" />

      <div class="d-flex justify-space-between py-3 mb-4">
        <span class="text-h8 text-white font-weight-medium">
          USED: {{ (voucher.rx_bytes / Math.pow(1024, 3)).toFixed(2) }} GB
        </span>
        <span class="text-h8 text-medium-emphasis">
          TOTAL: {{ (voucher.qos_usage_quota / 1024).toFixed(2) }} GB
        </span>
      </div>
    </v-card-text>

    <v-divider />

    <div class="text-medium-emphasis font-weight-bold ma-3 text-overline">
      Current Balance: <span class="font-weight-regular">{{ remainingData }} GB</span>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import { computed, defineProps } from 'vue'

  // Define props for the component
  const props = defineProps({
    voucher: {
      type: Object,
      required: true,
    },
  })

  // Computed property for data usage progress as percentage
  const progress = computed(() => {
    return Math.min(
      parseFloat(((props.voucher.rx_bytes / (props.voucher.qos_usage_quota * 1024 * 1024)) * 100).toFixed(2)),
      100
    )
  })

  // Computed property to calculate remaining data in GB
  const remainingData = computed(() => {
    const remainingBytes =
      props.voucher.qos_usage_quota * 1024 * 1024 - props.voucher.rx_bytes
    return (remainingBytes / Math.pow(1024, 3)).toFixed(2)
  })

  // Computed property to format voucher code with a hyphen after the fifth digit
  const formattedVoucherCode = computed(() => {
    return props.voucher.voucher_code.replace(/(\d{5})(\d{5})/, '$1-$2')
  })
</script>

<style scoped>
.text-overline {
  text-transform: uppercase;
}
.text-green-darken-3 {
  color: #388e3c;
}
.error-text {
  color: red;
}
</style>
