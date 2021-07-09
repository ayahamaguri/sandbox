<template>
  <div>
    <ul>
      <li v-for="(comedian, index) in comedians" :key="index">
        {{ comedian }}
      </li>
    </ul>
    <ul v-for="(comedian, index) in comedians" :key="index">
      <li>
        {{ comedian + 'abc' }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const comedians = ref([
      'オズワルド',
      'さすらいラビー',
      'さや香',
      'Gパンパンダ',
    ])
    return {
      comedians,
    }
  },
})
</script>
