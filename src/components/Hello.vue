<script setup>
const msg = "Learn vue JS by GeekyShow";
const num = 10;
const on = false;
function disp() {
  console.log("Hello from disp");
}
</script>

<template>
  <h1>Hello World</h1>
  <h1>{{ msg }}</h1>
  <h1>{{ 10 + 10 }}</h1>
  <h1>{{ num + 25 }}</h1>
  {{ disp() }}

  {{ on ? "Dark" : "Light" }}

  <!-- {{ var a=10 }} -->
  <!-- aisa nhi likh sakte ye kam nahi krega -->
</template>

<style></style>
