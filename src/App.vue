<!-- eslint-disable -->
<template>

  <TheNavigation />

  <div class="main-content">
    <router-view />
  </div>

</template>

<!-- eslint-disable -->
<script>

import TheNavigation from '@/components/TheNavigation.vue'; // ak komponent začina The, dávame ostatnym programatorom najavo že sa bude používat len raz na stránke nebude viac krat

export default {
  components: {
    TheNavigation,
  },
}

</script>

<!-- eslint-disable -->
<style lang="scss">

  @import './assets/scss/main.scss';

</style>
