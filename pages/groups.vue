<template>
  <div>
    <v-chip-group></v-chip-group>

    <v-card>
      <v-card-text> choose M-1 grand prix 2020 champion </v-card-text>
      <v-chip-group>
        <v-chip v-for="combi in combis" :key="combi">{{ combi }}</v-chip>
      </v-chip-group>
    </v-card>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const combis = ref([
      'ozwald',
      'magical lovely',
      'pekopa',
      'milk boy',
      'kamaitachi',
    ])
    return {
      combis,
    }
  },
})
</script>
