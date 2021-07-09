<template>
  <div>
    <v-virtual-scroll></v-virtual-scroll>

    <v-virtual-scroll
      v-model="scroll"
      height="100"
      item-height="20"
      :items="items"
    >
      <template #default="{ item, index }">
        <div :class="index === 0 ? 'red--text' : undefined">{{ item }}</div>
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const items = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    return {
      items,
    }
  },
})
</script>
