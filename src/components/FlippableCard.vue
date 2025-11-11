<script setup>
import { ref } from 'vue'

const isFlipped = ref(false);
const props = defineProps({ isFlipped: Boolean})
const emit = defineEmits(['flip', 'unflip'])
</script>

<template>


<div class="card" :class="{ flipped: isFlipped }" @click="$emit('flip')=$emit('unflip')">
</div>
</template>

<style scoped>

.card {
background: rgb(126, 50, 50);
  height: 200px;
  width: 150px;
  border-radius: 5px;
  box-shadow: 0 0 30px transparentize(black, 0.8);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
} 

.card.flipped {
background: rgb(48, 120, 227);
  height: 200px;
  width: 150px;
  border-radius: 5px;
  box-shadow: 0 0 30px transparentize(black, 0.8);
  left: 50%;
  top: 50%;
} 
</style>

