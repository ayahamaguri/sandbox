<template>
  <div>
    <slot-sample :readonly="true">
      aaaa
      <template #icon="{ counter, readonly }">
        counter: {{ counter }} {{ readonly }}
        <v-icon>mdi-menu</v-icon>
      </template>
    </slot-sample>

    <div>
      <v-btn> Add todo </v-btn>
      <tekitouna-tag>
        <template slot="aaa"></template>
      </tekitouna-tag>
    </div>
    <div id="hutuu_no_hyouji">
      <p>{{ message }}</p>
    </div>
    <div id="v-bind">
      <span :title="combi[0]">畠中</span>
      <span>おいでやす小田</span>
      <span :title="combi[0]">伊藤</span>
      <span :title="combi[1]">野田</span>
      <span :title="combi[1]">村上</span>
    </div>
    <div id="v-if">
      <v-btn @click="msgShow = !msgShow">switch</v-btn>
      <p v-if="msgShow">要素の有無を切り替えることも非常にシンプルにできます</p>
    </div>
    <div id="v-if_and_transition">
      <!-- ディレクティブは v- から始まる特別な属性です。
      ディレクティブ属性値は、単一の JavaScript 式を期待します(v-forは例外)。
      ディレクティブの仕事は、属性値の式が変化したときに、
      リアクティブに DOM に適用することです。 -->
      <v-slide-y-transition>
        <!-- ここでの v-if ディレクティブは 
                showOzw 式の値が真か否かに基づいて、
                 <p>,<span> 要素を削除/挿入します。 -->

        <p v-if="showOzw">伊藤</p>
        <span v-else>畠中</span>
      </v-slide-y-transition>
      <v-btn @click="showOzw = !showOzw">ozwald</v-btn>
    </div>
    <div id="v-for">
      <ul v-for="(comedian, index) in comedians" :key="index">
        <li>{{ comedian.name }}</li>
      </ul>
    </div>
    <div id="v-model">
      <input v-model="msg" placeholder="input massage" />
      show massage:{{ msg }}
    </div>
    <div id="components">
      <!-- comedians 配列にある各 comedian に対して 
      cards コンポーネントのインスタンスを作成する -->
      <!--
      各 cards の内容を表す memberdata オブジェクトを与えます(子のpropsで定義)。
      これにより内容は動的に変化します。
      また後述する "key" を各コンポーネントに提供する必要があります。
    -->
      <cards
        v-for="(comedian, index) in comedians"
        :key="index"
        :memberno="comedian.combi"
        :membername="comedian.name"
      ></cards>
    </div>
    <div>
      <!-- <v-btn @click="aaa = !aaa">demo</v-btn>
      <v-slide-x-reverse-transition>
        <p v-if="aaa">ozwald</p>
      </v-slide-x-reverse-transition> -->
      CC:<click-check></click-check><ClickCheck></ClickCheck>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Templatesyntax from './templatesyntax.vue'
import Cards from '~/components/Cards.vue'
import ClickCheck from '~/components/ClickCheck.vue'

interface Comedian {
  combi: string
  name: string
}
export default defineComponent({
  components: { Cards, ClickCheck, Templatesyntax },
  // Cards コンポーネントは "プロパティ" で受け取ります。
  // このプロパティは Memberdata と呼ばれます。
  setup() {
    const message = ref(
      'v-bind 属性はディレクティブと呼ばれています。ディレクティブは Vue.js によって提供された特別な属性を示すために v- 接頭辞がついています。これは、描画された DOM に特定のリアクティブな振舞いを与えます。ここで宣言されているのは、「この要素の title 属性を Vue インスタンスの combi プロパティによって更新して保存する」ということになります。:)'
    )
    const combi = ref(['ozwald', 'magical lovely'])
    const msgShow = ref(true)
    const showOzw = ref(true)
    const comedians = ref<Comedian[]>([
      { combi: 'ozwald', name: 'itou' },
      { combi: 'magical lovely', name: 'noda' },
      { combi: 'pekopa', name: 'syupei' },
      { combi: 'milk boy', name: 'utumi' },
    ])
    const msg = ref()

    // const aaa = ref(true)

    return {
      message,
      combi,
      msgShow,
      showOzw,
      comedians,
      msg,
      // aaa,
    }
  },
})
</script>
