<script setup>
import { ref } from 'vue'

const counter = ref(0)

</script>

<template>
    <button @click="counter++">Count is {{ counter }}
    </button>

    <v-card text="King Of Hearts"></v-card>
</template>

<style scoped>

.button {
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
} 
</style>

