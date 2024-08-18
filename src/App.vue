<script setup>
import Hello from "./components/Hello.vue";

const name = "Belal";
</script>

<template>
  <div>
    <h1>Local regisration by {{ name }}</h1>
    <!-- <HellowWorld />
    <ByeWorld /> -->
    <Hello />
  </div>
</template>

<style scoped>
h1 {
  font-size: 50px;
}
</style>
