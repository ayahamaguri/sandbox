<template>
  <div>
    <v-btn @click="marioPower(), (koopaHP = koopaHP - marioAttack), log()"
      >mario Attack!!</v-btn
    >
    <p v-if="koopaHP > 0">
      このクッパさまの 相手ではないわ!<br />残りHP：{{ koopaHP }}
    </p>
    <p v-else>ぴえん<br />残りHP：0</p>
    <p></p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const koopaHP = ref(100)
    const marioAttack = ref()
    const marioPower = () =>
      (marioAttack.value = Math.floor(Math.random() * 30))
    const log = () => console.log(koopaHP.value, marioAttack.value)

    return {
      koopaHP,
      marioAttack,
      log,
      marioPower,
    }
  },
})
</script>
