<template>
  <div class="text-center ma-2">
    <v-snackbar></v-snackbar>

    <v-btn dark @click="snackbar = true"> OSEWANI NATTEMASU </v-btn>
    <v-snackbar v-model="snackbar">
      {{ text }}

      <template #action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-btn dark @click="snackbar2 = true"> TURIKAWANI </v-btn>
    <v-snackbar v-model="snackbar2" top>
      {{ noda }}

      <template #action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar2 = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const text = ref('OZWALD DESU')
    const noda = ref('TUKAMARITAKUNAIYO-')
    const snackbar = ref(false)
    const snackbar2 = ref(false)
    return {
      text,
      snackbar,
      snackbar2,
      noda,
    }
  },
})
</script>
