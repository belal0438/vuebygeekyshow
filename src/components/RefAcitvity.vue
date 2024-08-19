<script setup>
// // Without Reactivity
// let a = 10;
// let b = 20;
// setTimeout(() => {
//   console.log("SetTimOut Called");
//   a = 30;
// }, 2000);

import { reactive, ref } from "vue";
// With Reactivity
// let a = ref(10);
// let b = ref(20);
// setTimeout(() => {
//   console.log("SetTimOut Called");
//   console.log("a", a);
//   console.log("b", b);
//   console.log("a", a.value);
//   console.log("b", b.value);
//   a.value = 30;
// }, 2000);

// // Without Reactivity
// let count = 0;
// setTimeout(() => {
//   console.log("SetTimOut Called");
//   count++;
// }, 2000);

// // With Reactivity
// let count = ref(0);
// setTimeout(() => {
//   console.log("SetTimOut Called");
//   count.value++;
// }, 2000);

//////////
// object

// let obj1 = ref({ count: 0 });
// setTimeout(() => {
//   console.log("OBJ1 SetTimOut Called");
//   console.log("Obj1", obj1);
//   console.log("Obj1.value", obj1.value);
//   console.log("Obj1.value.count", obj1.value.count);
//   obj1.value.count++;
// }, 2000);

let obj2 = { count: ref(0) };
// // let { count } = obj2;
// setTimeout(() => {
//   console.log("OBJ2 SetTimOut Called");
//   console.log("OBJ2", obj2);
//   console.log("OBJ2.count", obj2.count);
//   console.log("OBJ2.count.value", obj2.count.value);
//   obj2.count.value++;
//   let {count} = obj2
// }, 2000);

// let obj3 = ref({ count: ref(0) });
// console.log("Obj3", obj3);
// console.log("Obj3.value", obj3.value);
// console.log("Obj3.value.count", obj3.value.count);
// obj3.value.count++;

// array
const student = reactive([ref("Rahul"), ref("Sonam")]);
setTimeout(() => {
  console.log("student SetTimOut Called");
  console.log("student", student);
  console.log("student[0]", student[0]);
  console.log("student[0].value", student[0].value);
  console.log("student[1]", student[1]);
  console.log("student[1].value", student[1].value);
  student.push(ref("Rohit"));
}, 2000);
</script>
<template>
  <!-- <h1>SUM: {{ a + b }}</h1> -->
  <!-- <h1>Count: {{ count }}</h1> -->

  <!-- <h1>{{ obj1.count }}</h1> -->
  <!-- <h1>{{ obj2.count }}</h1> -->
  <!-- <h1>{{ obj2.count.value }}</h1> -->
  <!-- <h1>{{ obj2.count.value + 5 }}</h1> -->
  <!-- <h1>{{ obj2.count + 5 }}</h1> ham aise nahi likh sakte -->
  <!-- <h1>{{ count + 5 }}</h1> it work wthen we destructure then -->

  <!-- <h1>{{ obj3.count }}</h1> -->

  <h1>{{ student }}</h1>
</template>

<style></style>
