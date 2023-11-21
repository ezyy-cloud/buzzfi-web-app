<script setup lang="ts">
import AboutItem from './AboutItem.vue'
import FastSpeedsIcon from './icons/IconFastSpeeds.vue'
import AffordableIcon from './icons/IconAffordable.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <main>
    <v-container fill-height fluid>
      <v-row>
        <v-col style="padding: 0px;">
          <AboutItem>
            <template #icon>
              <FastSpeedsIcon class="emoji"/>
            </template>
            <template #heading>Fast Speeds</template>
            Experience fast speeds allowing you to stream your favorite shows
            without issues. Our network is optimised to ensure you enjoy the best
            quality of internet on your phone or laptop.
          </AboutItem>

          <AboutItem>
            <template #icon>
              <AffordableIcon class="emoji"/>
            </template>
            <template #heading>Reliable Connectivity</template>
            Our prices are affordable for everyone. We have the
            lowest packages across the whole country and we are not
            changing them forever.
          </AboutItem>

          <AboutItem>
            <template #icon>
              <EcosystemIcon class="emoji"/>
            </template>
            <template #heading>Convenient Roaming</template>
            Roam between locations without having to login again. You can
            roam between cities and enjoy the same internet access on the go.
          </AboutItem>

          <AboutItem>
            <template #icon>
              <SupportIcon class="emoji"/>
            </template>
            <template #heading>Social Media</template>
            Follow us on our social media platforms and stand a chance to win free vouchers every week!
            <a href="https://www.facebook.com/ezyy.cloud"> Facebook </a> <span>&#8226;</span>
            <a href="https://twitter.com/ezyycloud"> Twitter </a> <span>&#8226;</span>
            <a href="https://www.instagram.com/ezyy_cloud/"> Instagram </a> <span>&#8226;</span>
          </AboutItem>

          <AboutItem>
            <template #icon>
              <CommunityIcon class="emoji"/>
            </template>
            <template #heading>Support</template>
            Our <a href="https://wa.link/796cqh">support</a> team is on standby to help you with any issues.
            on Whatsapp
          </AboutItem>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
<style>
.emoji {
  margin: 5px
}

@media (min-width: 1024px) {
  .emoji {
    margin: 10px
  }
}
</style>