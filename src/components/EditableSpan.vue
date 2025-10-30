<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps(['value'])

const emit = defineEmits(['input', 'save'])

const editMode = ref(0)

function save() {
  editMode.value = false
  emit('save')
}
</script>

<template>
  <input v-if="editMode" :value="value" @input="(event) => $emit('input', event.target.value)" />
  <i class="fa" v-if="editMode" @click="save()">&nbsp;&#xf0c7;</i>

  <span v-else @click="editMode = !editMode">{{ value }}</span>
</template>

<style scoped>
i.fa {
  cursor: pointer;
}
</style>