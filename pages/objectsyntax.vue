<template>
  <div>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
      aaa

      <p>aaa</p>
    </div>
    <div id="v-if">
      <!-- v-if ディレクティブ(命令)は、ブロックを条件に応じて描画したい場合に使用されます。
        ブロックは、ディレクティブの式が真を返す場合のみ描画されます。 -->
      <!-- <p v-if="judge">伊藤</p>
      <p v-else>畠中</p>
      <v-btn @click="judge = !judge">ozwald</v-btn> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const activeColor = ref('red')
    const fontSize = ref(30)
    const tf = ref({ tukkomi: true, boke: false })
    const judge = ref(true)
    return {
      activeColor,
      tf,
      judge,
      fontSize,
    }
  },
})
</script>
