<template>
  <div>
    <!-- <p>children</p> -->
    <v-btn><slot>slot-children</slot></v-btn>
    <v-btn><slot name="sctwo">koko ni oya no template sasikomu</slot></v-btn>
    <p>{{ children }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Datas',

  props: {
    children: {
      type: String,
      default: 'I am children',
    },
  },
  setup() {
    const chidren = ref('setup')
    return {
      chidren,
    }
  },
})
</script>
