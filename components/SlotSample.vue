<template>
  <div>
    <div @click="counter++">
      <slot name="icon" :counter="counter" :readonly="readonly">
        <v-icon>mdi-account</v-icon>
      </slot>
      slot sample
    </div>
    <h1>
      <slot></slot>
    </h1>
    <h2>
      <slot name="subheader">default subheader</slot>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      counter: ref(0),
    }
  },
})
</script>
