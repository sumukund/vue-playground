<script setup>
import { ref, defineProps } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();
console.log(router);

const props = defineProps({
  id: Number,
});

</script>

<template>

<router-link :to="`/test/${ route.params.id}`">
    <h1>Your ID is :{{ props.id }}</h1>
</router-link>

</template>

<style scoped>

</style>