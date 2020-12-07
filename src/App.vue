<template>
  <teleport to="body">
    Foo {{ title }}
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Bar')
</script>