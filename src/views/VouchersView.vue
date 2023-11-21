<template>
<main class="wrapper">
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="12" md="10">
            <v-card class="elevation-6">
              <v-toolbar color="hsl(207, 87%, 66%)" flat>
                <v-toolbar-title style="font-weight: 500; color: #fff">Grab A Voucher</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <div style="font-weight: 700; color: #000">Packages</div>
                <ul>
                <li>7 days Unlimited @ $10</li>
                <li>7 days 5GB @ $3</li>
                <li>7 days 1GB @ $1</li>
                </ul>
                <div style="font-weight: 700; color: #000; margin-top: 15px">Agents</div>
                <div style="font-weight: 500; color: #000; margin-top: 3px">Harare</div>
                <uL><li>The Brew (Avenues Mall Liquor Store)</li></uL>
                <div style="font-weight: 500; color: #000; margin-top: 3px">Rusape</div>
                <ul><li>PrintShop</li></uL>
              </v-card-text>
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

<style>
.wrapper {
  align-content: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
}
header {
  padding: 0px;
}
</style>