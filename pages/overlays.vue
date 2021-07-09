<template>
  <div class="text-center">
    <!-- <v-overlay></v-overlay> -->

    <v-btn color="error" @click="overlay = !overlay"> Show Overlay </v-btn>

    <v-overlay :value="overlay" z-index="1">
      <v-progress-circular indeterminate></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const overlay = ref(false)
    watch(overlay, () =>
      setTimeout(() => {
        overlay.value = false
      }, 1500)
    )
    return {
      overlay,
    }
  },
})
</script>
