<template>
  <div class="filter--row">
    <div class="wrapper--filter">
        <filter-component/>
    </div>
  </div>
</template>

<script>
import FilterComponent from "./FilterComponent.vue";

export default{
    name: "FilterRow",
    components: {
        FilterComponent
    }
}
</script>

<style lang="scss">
    .filter--row{
        .wrapper--filter{
            padding: 2vh;
        }
    }
</style>