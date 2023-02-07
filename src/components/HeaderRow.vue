<template>
  <div class="header--row">
    <div class="wrapper--header">
        <header-component/>
    </div>
  </div>
</template>

<script>
import HeaderComponents from './HeaderComponents.vue';

export default {
    name: "HeaderRow",
    components : {
        HeaderComponents
    }
}
</script>

<style>

</style>