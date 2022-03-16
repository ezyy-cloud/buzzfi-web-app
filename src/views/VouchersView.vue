<template>
<main>
      <v-container fill-height fluid>
        <v-row align="center" justify="center" style="height: 100vh;">
          <v-col cols="12" sm="12" md="10">
            <v-card class="elevation-6">
              <v-toolbar color="hsl(281, 98%, 50%, 0.2)" dark flat>
                <v-toolbar-title style="font-weight: 500;">BUY VOUCHER</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                   <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="n in 5"
        :key="n"
        :label="`${n} GB`"
        :value="n"
      ></v-radio>
    </v-radio-group> 

                  <v-text-field
                    id="ecocash"
                    label="Ecocash Number"
                    name="telephone"
                    prepend-icon="mdi-phone"
                    type="telephone"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="hsl(281, 98%, 50%)" style="color: white;" rounded="pill">BUY</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      </main>
</template>

<script lang="ts">
export default {
  props: {
    source: String
  }
};
</script>