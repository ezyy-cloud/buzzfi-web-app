<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 class="main" style="color: var(--vt-c-black)">
      BuzzFi is connecting thousands of Zimbabweans to the internet.
      You have just become part of this growing family. BuzzFi is available
      in all these locations.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  top: -10px;
}

h3 {
  font-size: 1rem;
}

.greetings {
  padding-top: 2vh;
}



.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  .main {
    padding: 0 2rem;
  }
}</style>
