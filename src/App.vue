<template>
  <div id="app">
    <header>
      <header-row/>

    </header>
    <filter-row/>
    <maison-card-row/>
    <maison-card-row/>
    
  </div>
</template>

<script>
import HeaderRow from './components/HeaderRow.vue';
import MaisonCardRow from './components/MaisonCardRow.vue';
// import FilterComponent from './components/FilterComponent.vue';
import FilterRow from './components/FilterRow.vue';
import Home from './page/Home.vue';


export default {
  name: 'App',
  components: {
    Home,
    MaisonCardRow,
    HeaderRow,
    FilterRow
    // FilterComponent
    
  }
}
</script>

<style>

</style>