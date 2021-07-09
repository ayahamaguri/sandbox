<template>
  <div>
    <v-treeview></v-treeview>
    {{ items }}
    <v-treeview :items="items"></v-treeview>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

interface VTreeviewItem {
  id: number
  name: string
  children?: VTreeviewItem[]
}

export default defineComponent({
  setup() {
    const items = ref<VTreeviewItem[]>([
      {
        id: 1,
        name: 'ozwald:',
        children: [
          { id: 2, name: '伊藤' },
          { id: 3, name: '畠中' },
        ],
      },
      {
        id: 11,
        name: 'aa',
      },
    ])
    return {
      items,
    }
  },
})
</script>
