<template>
  <div>
    <span>激安！{{ taxExclud }}円</span><span>（税込み{{ taxInclud }}円）</span>
    <div>
      <v-data-table :headers="headers"></v-data-table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const taxExclud = ref(1000)
    const taxInclud = taxExclud.value * 1.1
    return {
      taxExclud,
      taxInclud,
    }
  },
})
</script>
