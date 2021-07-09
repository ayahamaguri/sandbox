<template>
  <div>
    <v-alert
      v-model="alert"
      dismissible
      color="orange"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-star-face"
    >
      You've got <strong>5</strong> new HOMERARE!.
    </v-alert>

    <v-btn v-if="!alert" class="text-center" dark @click="alert = true">
      Reset Alert
    </v-btn>
    <v-breadcrumbs :items="year" large> </v-breadcrumbs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const year = ref([
      {
        text: '2021',
        disabled: false,
        href: 'breadcrumbs_2021',
        to: '/itigatu',
      },
      {
        text: '2020',
        disabled: false,
        href: 'breadcrumbs_2020',
      },
    ])
    const alert = ref(true)
    const month = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    return {
      year,
      month,
      alert,
    }
  },
})
</script>
