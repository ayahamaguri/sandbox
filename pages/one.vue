<template>
  <div>
    <v-btn @click=";(itou = !itou), (htnk = false)">伊藤派</v-btn>
    <v-btn @click=";(htnk = !htnk), (itou = false)">畠中派</v-btn>
    <p>伊藤と畠中でオズワルドです。名前だけでも覚えて帰ってください</p>
    <p v-if="htnk">俺、畠中って名前改名しようと思ってるんだよね</p>
    <p v-if="itou">一旦、伊藤だけ覚えて帰ってください</p>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const itou = ref(false)
    const htnk = ref(false)

    return {
      itou,
      htnk,
    }
  },
})
</script>
