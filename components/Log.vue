<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    console.log('できたで')
  },
})
</script>
