<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
    <header>
      <header-row />
    </header>
    <maison-card-row />

  </div>
</template>

<script>
import HeaderRow from './components/HeaderRow.vue';
import MaisonCardRow from './components/MaisonCardRow.vue';
// import FilterComponent from './components/FilterComponent.vue';
import FilterRow from './components/FilterRow.vue';
import Home from './views/Home.vue';


export default {
  name: 'App',
  components: {
    Home,
    MaisonCardRow,
    HeaderRow,
    FilterRow,
    RouterView
    // FilterComponent
  }
}
</script>

<style></style>