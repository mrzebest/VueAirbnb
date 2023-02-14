
<template>
    <div class="header--row">
      <div class="wrapper--header">
          <header-component/>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderComponent from './HeaderComponent.vue';
  
  export default {
      name: "HeaderRow",
      components : {
          HeaderComponent
      }
  }
  </script>
  
  <style>
  
  </style>