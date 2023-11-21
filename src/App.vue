<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/Landing.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/buzz.png" width="225"  />

    <div class="wrapper">
      <HelloWorld msg="FAST • RELIABLE • CONVENIENT" />

      <nav>
        <RouterLink to="/">Locations</RouterLink>
        <RouterLink to="/vouchers">Vouchers</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  /* max-width: 1280px; */
  /* margin: 0 auto; */
  /* padding: 2rem; */

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  background: white;
  padding-bottom: 2vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: #5baef4;
  transition: 0.4s;
}


@media (hover: hover) {
  a:hover {
    background-color: hsla(274, 96%, 38%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--vt-c-black-soft);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    /* place-items: center; */
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* padding: 0 2rem; */
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    /* text-align: left; */
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

   a.log, a.log:hover, a.log:focus, a.log:active {
     background-color: transparent;
 }
}
</style>
