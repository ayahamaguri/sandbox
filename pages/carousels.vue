<template>
  <div>
    <v-sheet width="100vw" height="100vh" color="pink"></v-sheet>
    <v-card>
      <v-carousel></v-carousel>
    </v-card>
    <v-card>
      <v-carousel>
        <v-carousel-item v-for="(color, index) in colors" :key="index">
          <v-sheet :color="color">a</v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const colors = ref(['primary', 'orange'])

    return {
      colors,
    }
  },
})
</script>
