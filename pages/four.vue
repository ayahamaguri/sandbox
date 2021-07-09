<template>
  <div>
    <div>
      <h3>🎮数あてゲーム</h3>
      <v-text-field
        v-model.number="input"
        placeholder="0～5の数字を半角で入力してください"
      ></v-text-field>
      <!-- <v-btn @click="log(), log2()">判定</v-btn> -->
      <p v-if="number === input">あたり</p>
      <p v-else-if="number > input">はずれ。もっと大きい</p>
      <p v-else-if="number < input">はずれ。もっと小さい</p>
      <p v-else>ファイナルアンサー？</p>
    </div>
    <div>
      <h3>⏰今 何時？</h3>
      <v-text-field
        v-model.number="time"
        placeholder="そうねだいたいね"
      ></v-text-field>
      <p v-if="time >= 0 && time < 6">LA LA LA...</p>
      <p v-else-if="time === 9 || time === 6">ちょっと 待ってて</p>
      <p v-else-if="time > 9 && time <= 15">まだ早い</p>
      <p v-else-if="time === 16">胸騒ぎの腰つき</p>
      <p v-else>砂まじりの茅ケ崎</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const input = ref()
    const number = ref(Math.floor(Math.random() * 6))

    const log = () => console.log(number.value)
    const log2 = () => console.log(input.value)

    const time = ref()

    return {
      number,
      input,
      log,
      log2,
      time,
    }
  },
})
</script>
