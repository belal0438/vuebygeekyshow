<script setup>
import HelloWorld from "./components/HelloWorld.vue";
const name = "Belal";
</script>

<template>
  <div>
    <h1>Local regisration by {{ name }}</h1>
    <HelloWorld />
  </div>
</template>

<style scoped>
h1 {
  font-size: 50px;
}
</style>
