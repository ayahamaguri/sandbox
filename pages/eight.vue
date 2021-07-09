<template>
  <div>
    <span>激安！{{ taxExclud }}円</span><span>（税込み{{ taxInclud }}円）</span>
    <div>
      <v-simple-table>
        <thead>
          <tr>
            <th>商品名</th>
            <th>税抜き</th>
            <th>税込み</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.exclud }}</td>
            <td>{{ includ }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const taxExclud = ref(1000)
    const taxInclud = taxExclud.value * 1.1
    const items = ref([
      {
        name: 'apple',
        exclud: 100,
      },
      {
        name: 'peach',
        exclud: 200,
      },
    ])

    const includ = computed((items: { exclud: string }) => items.exclud * 1.1)

    return {
      taxExclud,
      taxInclud,
      items,
      includ,
    }
  },
})
</script>
