<!-- Attribute Binding -->

<script setup>
const mydataid = "jack";
const url = "https://mohd-belal.netlify.app/";

// <!-- Dynamic Binding Multiple Attributes -->
const objattrs = {
  id: "jack",
  href: "https://mohd-belal.netlify.app/",
};

// <!-- Dynamic Argument -->
const attributeName = "href";

//Boolean Attribute
const isDisabled = true;
</script>

<template>
  <h1 id="jack"></h1>

  <h1 v-bind:id="mydataid"></h1>
  <!--  v-bin:id ye likhene pe jack value aayega -->
  <h1 :id="mydataid"></h1>
  <!--  v-bin:id ka short valu :id  -->

  <a href="https://mohd-belal.netlify.app/"> Visit 1</a><br />
  <br />

  <a v-bind:href="url"> Visit 2</a><br />
  <br />

  <a :href="url"> Visit 3</a><br />
  <br />

  <a :id="mydataid" :href="url"> Visit id and href</a> <br /><br />

  <!-- Dynamic Binding Multiple Attributes -->
  <a v-bind="objattrs">Vist 4</a> <br /><br />

  <!-- Dynamic Argument -->
  <a v-bind:[attributeName]="url">Dynamic Argument</a> <br />
  <br />
  <a :[attributeName]="url">Dynamic Argument 2</a> <br /><br />

  <!-- Boolean Attrbute -->
  <button disabled>Click 1</button> <br /><br />
  <button :disabled="isDisabled">Click 2</button> <br /><br />
</template>

<style></style>
