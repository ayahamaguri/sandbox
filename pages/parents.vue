<template>
  <div>
    <!-- <p>parents</p> -->

    <div>
      <v-col v-for="(Data, index) in Datas" :key="index">
        <children :children="Data.chidren">
          <template #sctwo>slot chidren two in parent</template>
        </children>
      </v-col>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import Children from '~/components/Children.vue'

export default defineComponent({
  components: { Children },
  setup() {
    const Datas = ref([{ chidren: 'I am parent' }])
    return {
      Datas,
    }
  },
})
</script>
