<template>
  <v-card class="mx-auto" elevation="1" max-width="500">
    <!-- Title with Back Button -->
    <v-card-title class="d-flex align-center">
      <v-btn class="mr-2" icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span class="font-weight-black">Own a BuzzFi Spot</span>
    </v-card-title>

    <!-- Form Content -->
    <v-card-text>
      <form>
        <!-- Name Field -->
        <v-text-field
          v-model="state.name"
          :counter="10"
          :error-messages="v$.name.$errors.map(e => e.$message).join(', ')"
          label="Name"
          required
          @blur="v$.name.$touch"
          @input="v$.name.$touch"
        />

        <!-- Email Field -->
        <v-text-field
          v-model="state.email"
          :error-messages="v$.email.$errors.map(e => e.$message).join(', ')"
          label="E-mail"
          required
          @blur="v$.email.$touch"
          @input="v$.email.$touch"
        />

        <!-- Phone Number Field -->
        <v-text-field
          v-model="state.phone"
          :error-messages="v$.phone.$errors.map(e => e.$message).join(', ')"
          label="Phone Number"
          required
          @blur="v$.phone.$touch"
          @input="v$.phone.$touch"
        />

        <!-- Mall Name Field -->
        <v-text-field
          v-model="state.mallName"
          :error-messages="v$.mallName.$errors.map(e => e.$message).join(', ')"
          label="Mall Name"
          required
          @blur="v$.mallName.$touch"
          @input="v$.mallName.$touch"
        />

        <!-- Location Field -->
        <v-text-field
          v-model="state.location"
          :error-messages="v$.location.$errors.map(e => e.$message).join(', ')"
          label="Location"
          required
          @blur="v$.location.$touch"
          @input="v$.location.$touch"
        />

        <!-- Estimated Clients Field -->
        <v-text-field
          v-model="state.estimatedClients"
          :error-messages="v$.estimatedClients.$errors.map(e => e.$message).join(', ')"
          label="Estimated Clients"
          required
          type="number"
          @blur="v$.estimatedClients.$touch"
          @input="v$.estimatedClients.$touch"
        />

        <!-- Checkbox Field -->
        <v-checkbox
          v-model="state.checkbox"
          :error-messages="v$.checkbox.$errors.map(e => e.$message).join(', ')"
          label="I have funds to invest"
          required
          @blur="v$.checkbox.$touch"
          @change="v$.checkbox.$touch"
        />

        <!-- Action Buttons -->

        <v-btn
          block
          class="text-none mb-4"
          color="#05B6FF"
          :disabled="loading"
          :loading="loading"
          size="x-large"
          variant="flat"
          @click="loading = !loading"
        >
          Get Started
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
      </form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { email, minValue, required } from '@vuelidate/validators'

  const initialState = {
    name: '',
    email: '',
    phone: '',
    mallName: '',
    location: '',
    estimatedClients: null,
    checkbox: false,
  }

  const state = reactive({
    ...initialState,
  })

  const loading = ref<boolean>(false)

  // Watcher in Composition API style
  watch(loading, val => {
    if (val) {
      setTimeout(() => (loading.value = false), 2000) // Using loading.value for reactivity
    }
  })

  const rules = {
    name: { required },
    email: { required, email },
    phone: { required },
    mallName: { required },
    location: { required },
    estimatedClients: { required, minValue: minValue(1) },
    checkbox: { required },
  }

  const v$ = useVuelidate(rules, state)

  // Handle form submission

</script>

<style>
/* Customize styles here if necessary */
</style>
