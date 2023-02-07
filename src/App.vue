<template>
  <div id="app">
    <header>
      <header-row/>
    </header>
    <maison-card-row/>
    <maison-card-row/>
    <maison-card-row/>
    
  </div>
</template>

<script>
import HeaderRow from './components/HeaderRow.vue';
import MaisonCardRow from './components/MaisonCardRow.vue';
import Home from './page/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
    MaisonCardRow,
    HeaderRow
    
  }
}
</script>

<style>

</style>