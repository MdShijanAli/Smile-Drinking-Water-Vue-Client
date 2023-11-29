<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

</script>

<template>
  
  <Header />
  <slot></slot>
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>