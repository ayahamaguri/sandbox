<template>
  <div>
    <v-hover></v-hover>

    <v-hover v-slot="{ hover }"
      ><v-btn :color="hover ? 'orange' : 'green'">{{ hover }}</v-btn>
    </v-hover>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>
