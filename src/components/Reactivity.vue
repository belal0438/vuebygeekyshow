<!-- Reactivity me number nahi hosakta, boolean, string nahi ho sakta h -->
<!-- Reactivity me sirf object, map, array, set hoga -->
<script setup>
// // without Reactivity
// let num = { a: 10, b: 20 };
// setTimeout(() => {
//   console.log("SetTimout Called");
//   console.log("Num", num);
//   num.a = 30;
//   console.log("a:", num.a);
//   // yha pe {{ num.a + num.b }} iski value change honi chaiyethimagr nahi hue
// }, 2000);

// with Reactivity
import { reactive } from "vue";

// let num = reactive({ a: 10, b: 20 });
// setTimeout(() => {
//   console.log("SetTimout Called");
//   console.log("Num", num);
//   num.a = 30;
//   console.log("a:", num.a);
//  // yha pe {{ num.a + num.b }}  value change hoke 50 hue
// }, 2000);

// //  without Reactivity
// let count = 0;
// setTimeout(() => {
//   console.log("SetTimout Called");
//   count = count + 1;
//   console.log("count:", count);
// }, 2000);

// //  with Reactivity
// let num = reactive({ count: 0 });
// setTimeout(() => {
//   console.log("SetTimout Called");
//   console.log("Num", num);
//   num.count = num.count + 1;
//   console.log("count:", num.count);
// }, 2000);

//// Deep Reactivity
// const obj = reactive({
//   num: { count: 0 },
//   user: ["Rahul", "Sonam"],
// });

// setTimeout(() => {
//   console.log("SetTimout Called");
//   console.log("OBJ", obj);
//   console.log("OBJ.num", obj.num);
//   console.log("OBJ.user", obj.user);
//   obj.num.count++;
//   obj.user.push("Rohit");
// }, 2000);
</script>

<template>
  <!-- <h1>Sum: {{ num.a + num.b }}</h1> <br> -->
  <!-- <h1>Count: {{ count }}</h1> -->
  <!-- <h1>Count: {{ num.count }}</h1> -->

  <h1>Count: {{ obj.num.count }}</h1>
  <h1>User: {{ obj.user }}</h1>
  <!-- <h1>User1: {{ obj.user[0] }}</h1>
  <h1>User:2 {{ obj.user[1] }}</h1> -->
</template>

<style></style>
