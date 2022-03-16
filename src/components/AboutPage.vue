<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import FastSpeedsIcon from './icons/IconFastSpeeds.vue'
import AffordableIcon from './icons/IconAffordable.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>

<main>
      <v-container fill-height fluid>
        <v-row align="center" justify="center" style="height: 100vh;">
          <v-col>
  <WelcomeItem>
    <template #icon>
      <FastSpeedsIcon />
    </template>
    <template #heading>Fast Speeds</template>
      Experience fast speeds allowing you to stream your favorite shows 
      without issues. Our network is optimised to ensure you enjoy the best 
      quality of internet on your phone or laptop.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <AffordableIcon />
    </template>
    <template #heading>Affordable</template>
        Our prices are affordable for everyone. We have the 
        lowest packages across the whole country and we are not 
        changing them forever.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Roaming</template>
      Roam between locations without having to login again. You can 
      roam between cities and enjoy the same internet access on the go.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Social Media</template>
      Follow us on our social media platforms and stand a chance to win free vouchers every week!
      <a href="https://www.facebook.com/ezyy.cloud"> Facebook </a> <span>&#8226;</span> 
      <a href="https://twitter.com/ezyycloud"> Twitter </a> <span>&#8226;</span> 
      <a  href="https://www.instagram.com/ezyy_cloud/"> Instagram </a> <span>&#8226;</span> 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Support</template>
        Our support team is on standby to help you with any issues. 
        Contact <a href="https://wa.link/796cqh">Schneider</a> or 
        <a href="https://wa.link/7ve4kx">Tino</a>
        on Whatsapp
  </WelcomeItem>
  </v-col>
  </v-row>
  </v-container>
  </main>
</template>
