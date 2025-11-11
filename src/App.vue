<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { ref } from 'vue'
import EditableSpan from './components/EditableSpan.vue'
import CounterButton from './components/CounterButton.vue'
import FlippableCard from './components/FlippableCard.vue'
const name = ref('Daneil')

const isFlipped = ref(true)


</script>

<template>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/testing">Flippy card</RouterLink>
    <RouterLink to="/test/:id">Done</RouterLink>

  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
.card-container {
  display: flex;
  flex-wrap: wrap; 
  gap: 20px; 
  justify-content: center;
}
</style>
