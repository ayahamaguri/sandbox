<template>
  <v-breadcrumbs :items="items" large></v-breadcrumbs>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const items = ref([
      {
        text: 'hajimeni',
        to: '/hajimeni',
      },
      {
        text: 'templatesyntax',
        to: '/templatesyntax',
      },
      {
        text: 'objectsyntax',
        to: '/objectsyntax',
      },
      {
        text: 'parents',
        to: '/parents',
      },
      {
        text: 'one',
        to: '/one',
      },
      {
        text: 'two',
        to: '/two',
      },
      {
        text: 'four',
        to: '/four',
      },
      {
        text: 'six',
        to: '/six',
      },
      {
        text: 'seven',
        to: '/seven',
      },
      {
        text: 'eight',
        to: '/eight',
      },
    ])
    return {
      items,
    }
  },
})
</script>
