<template>
  <div id="app">
    <maison-card-row/>
  </div>
</template>

<script>
import MaisonCardRow from './components/MaisonCardRow.vue';
import Home from './page/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
    MaisonCardRow
  }
}
</script>

<style>
  #app {
  max-width: 400vh;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;

}
</style>