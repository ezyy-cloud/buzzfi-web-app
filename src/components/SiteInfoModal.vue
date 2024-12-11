<template>
  <v-dialog v-model="isVisible" max-width="500" @close="close">

    <v-card
      class="mx-auto my-12"
      :disabled="loading"
      :loading="loading"
      max-width="374"
    >
      <template #loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        />
      </template>

      <v-card-item class="pb-3">
        <v-card-title class="text-uppercase">{{ site?.name }}</v-card-title>
        <v-card-subtitle class="pb-0">
          {{ site?.type }}
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>

        <div class="font-weight-light pb-4">{{ site?.description }}</div>

        <v-row
          align="center"
          class="mx-0 my-2"
          justify="space-between"
        >

          <div class="text-bold">
            <span class="me-1 text-overline font-weight-black">Active</span>
            <v-icon
              :color="site?.status ? 'light-green' : 'error'"
              :icon="site?.status ? 'mdi-check-circle' : 'mdi-close-circle'"
              size="small"
            />
          </div>
          <div>
            <v-rating
              color="amber"
              density="compact"
              half-increments
              :model-value="4.5"
              readonly
              size="small"
            />

          </div>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4 mb-0" />

      <v-row
        align="center"
        class="mx-0 my-2"
        justify="space-between"
      >
        <div class="text-uppercase ml-6">Opening Hours</div>

        <div class="px-2">
          <v-chip-group v-model="selection" selected-class="bg-deep-purple-lighten-2">
            <v-chip class="font-weight-bold">08:00 - 20:00</v-chip>
          </v-chip-group>
        </div>
      </v-row>

      <v-card-actions class="justify-space-between align-center mx-2 my-2">
        <v-btn
          border
          color="#05B6FF"
          icon="mdi-phone"
          text="Call"
          @click="site && reserve(site.phone)"
        />

        <v-btn @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
=

<script setup lang="ts">
  import { ref, watch } from 'vue'

  const loading = ref(false)
  const selection = ref(1)

  const props = defineProps({
    site: {
      type: Object,
    },
    openModal: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      default: () => {},
    },
  })

  const reserve = (phoneNumber: string) => {
    loading.value = true

    // Simulate reservation logic (optional, can remove if not needed)
    setTimeout(() => {
      loading.value = false
      // Open the dialer
      window.location.href = `tel:${phoneNumber}`
    }, 2000)
  }

  const isVisible = ref(false)

  watch(
    () => props.openModal, (openModal: boolean) => {
      isVisible.value = openModal
    }
  )

  function close () {
    isVisible.value = false
    props.onClose()
  }
</script>

<style scoped>
/* Add any necessary styling here */
</style>
