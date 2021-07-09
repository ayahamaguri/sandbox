<template>
  <v-sheet height="300vh" width="500px" class="d-flex align-end">
    <v-lazy v-model="isShow">
      <log>
        <v-sheet :color="isShow ? 'orange' : 'green'" height="500"
          >aaaa</v-sheet
        >
      </log>
    </v-lazy>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {
      isShow: ref(false),
    }
  },
})
</script>
