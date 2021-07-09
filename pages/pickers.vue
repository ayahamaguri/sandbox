<template>
  <div>
    <v-date-picker></v-date-picker>

    <v-row justify="center">
      <v-date-picker v-model="picker" type="month"></v-date-picker>
    </v-row>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const picker = ref(new Date().toISOString().substr(0, 10))
    return {
      picker,
    }
  },
})
</script>
