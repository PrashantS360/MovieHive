<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<script>
export default {
  name: "App"
}
</script>
