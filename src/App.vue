<script setup>
// import Hello from "./components/Hello.vue";
import HelloBind from "./components/HelloBind.vue";

const name = "Belal";
</script>

<template>
  <div>
    <h1>Local regisration by {{ name }}</h1>
    <!-- <HellowWorld />
    <ByeWorld /> -->
    <!-- <Hello /> -->
    <HelloBind />
  </div>
</template>

<style scoped>
h1 {
  font-size: 50px;
}
</style>
