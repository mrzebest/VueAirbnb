<template>
  <div class="home">
    <header>
      <header-row/>
    </header>
    <filter-row/>
    <maison-card-row/>
    <!-- <router-view/> -->
  </div>
</template>

<script>

import MaisonCardRow from '../components/MaisonCardRow.vue';
import HeaderRow from '../components/HeaderRow.vue';
import FilterRow from '../components/FilterRow.vue'

export default {
  name: 'Home',
  components: {
    MaisonCardRow,
    HeaderRow,
    FilterRow
  }
}
</script>

<style>

</style>