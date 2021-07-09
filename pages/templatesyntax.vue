<template>
  <div>
    <slot-sample>
      <template #default>aaaaaa</template>
      <template #subheader>my subheader<v-icon>mdi-car</v-icon></template>
    </slot-sample>
    <tekitouna-tag>
      <template slot="aaa"><v-btn>aaa</v-btn></template>
      <v-btn type="submit">
        <slot name="submit">submit</slot>
      </v-btn>
    </tekitouna-tag>
    <div id="hige">
      <p>hige:{{ msg }}</p>
      <p>
        siki:{{
          'これまで、テンプレートに単純なキーをバインディングしてきました。' +
          '実際には Vue.js は全てのデータバインディング内部で JavaScript 式を完全にサポートします'
        }}
      </p>
      <p>reverse:{{ msg.split('').reverse().join('') }}</p>
      <p>computed:{{ reverseMsg }}</p>
    </div>
    <div id="directive">
      <!-- ディレクティブの中には “引数” を取るものもあります。
        これはディレクティブ名の後にコロンで表記します。
        例えば、v-bindディレクティブは、リアクティブに HTML 属性を更新します: -->

      <a href="https://profile.yoshimoto.co.jp/talent/detail?id=6711">
        ozwald</a
      >
      <a :href="url">{{ url }}</a>
      <!-- ここでの href は
       v-bind ディレクティブに要素の href 属性に式 url の値を
       束縛することを教えるための引数です。

v-on ディレクティブの別の例を見てみましょう。
これは DOM イベントを受け取ります
ここでの引数は受け取りたいイベント名です。 -->

      <div id="sanko-enzansi">
        <v-btn @click="ozw = !ozw">ozwald</v-btn>
        <p>sanko-enzansi:{{ ozw === true ? '伊藤' : '畠中' }}</p>
      </div>
      <div id="watch">
        <input v-model="question" type="text" placeholder="input question" />
        {{ answer }}
      </div>
    </div>
    <div id="v-for">
      <ul v-for="(yosimotoComedian, index) in yosimotoComedians" :key="index">
        <li>{{ yosimotoComedian }}</li>
      </ul>
      <v-btn @click="tuika()">tuika</v-btn>
      <v-btn @click="pop()">pop</v-btn>
      <v-btn @click="shift()">shift</v-btn>
      <v-btn @click="splice()">splice</v-btn>
      <v-btn @click="sort()">sort</v-btn>
    </div>
    <br /><br />
    <div id="v-on">
      v-on
      ディレクティブ（命令）を使うことで、DOMイベントの購読、イベント発火時の
      JavaScript の実行が可能になります。
      <v-btn @click="plus()">++</v-btn>
      counter:{{ counter }}
    </div>
    <div id="v-model">
      <input v-model="nyuryoku" placeholder="input me" />
      <p>you input:{{ nyuryoku }}</p>
      <click-check></click-check>
      <cards></cards>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from '@vue/composition-api'
// import { Cards } from '~/components/Cards.vue'
// import { ClickCheck } from '~/components/ClickCheck.vue'
export default defineComponent({
  // components: { Cards },
  setup() {
    const url = ref('https://profile.yoshimoto.co.jp/talent/detail?id=6711')
    const msg = ref(
      'データバインディングのもっとも基本的な形は、”Mustache” 構文(二重中括弧)を利用したテキスト展開です'
    )
    const ozw = ref(false)
    const reverseMsg = computed(() => msg.value.split('').reverse().join(''))
    const question = ref('')
    const answer = ref('KANGAE TYUU...')
    // const watchQuestion = watch(question, () => console.log('WAKARIMASEN!'))
    const watchQuestion = watch(question, () => console.log('WAKARIMASEN!'))
    const watchQuestion2 = watch(
      question,
      () => (answer.value = 'WAKARIMASEN!')
    )
    // 第二引数は関数
    // 第1引数が変わったら(watch)実行する関数
    // やりたいことはanswerのvalueの変更（変数answerへの代入）
    const yosimotoComedians = ref([
      { combi: 'ozwald', boke: 'hatanaka', tukkomi: 'itou' },
      { combi: 'magical lovely', boke: 'noda', tukkomi: 'murakami' },
      { combi: 'new york', boke: 'simasa', tukkomi: 'yasiki' },
      { aaa: 'aaa' },
    ])
    const tuika = () =>
      yosimotoComedians.value.push({
        combi: 'pekopa',
        boke: 'syupei',
        tukkomi: 'matui',
      })
    const pop = () => yosimotoComedians.value.pop()
    const shift = () => yosimotoComedians.value.shift()
    const splice = () =>
      yosimotoComedians.value.splice(1, 1, {
        combi: 'milk boy',
        boke: 'komaba',
        tukkomi: 'utumi',
      })
    const sort = () => yosimotoComedians.value.sort()
    const counter = ref(0)
    const plus = () => counter.value++

    const nyuryoku = ref()
    return {
      url,
      msg,
      ozw,
      reverseMsg,
      question,
      answer,
      watchQuestion,
      watchQuestion2,
      yosimotoComedians,
      tuika,
      pop,
      shift,
      splice,
      sort,
      counter,
      plus,
      nyuryoku,
    }
  },
})
</script>
