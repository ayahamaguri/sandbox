<template>
  <div class="Hometa">
    <v-container>
      <v-btn @click="HelloWorld()">Hello World</v-btn>
      HOMERU NAME:
      <input v-model="newName" type="text" placeholder="name wo nyu-ryoku" />
      <div>sanzuke:{{ honorificTitle }}</div>
      <v-btn @click="addName(newName)">HOMERU</v-btn>
      <div class="blue">元：{{ nameList }}</div>
      <div class="green">後：{{ honorificNames }}</div>
      <div>3文字以上：{{ sanMoji }}</div>
      <div>{{ { name: 'aaa' } }}</div>
      <ul>
        HOMETA LIST:
        <li v-for="name in nameList" id="hl" :key="name">
          {{ name }}
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    // ref関数 ラップするだけの関数。
    // オブジェクトにすることで参照渡しになるので、値がどこにいても監視できる(リアクティブ)。
    const newName = ref('')
    // 空文字を引数に、ref関数を実行した結果をnewNameに代入。
    const nameList = ref(['伊藤'])
    const addName = (newName: string) => nameList.value.push(newName)
    const honorificTitle = computed(() => newName.value + 'さん')
    const honorificNames = computed(() =>
      nameList.value.map((name) => name + 'さん')
    )
    const sanMoji = computed(() =>
      nameList.value.filter((namae) => namae.length >= 3)
    )
    // class User {
    //   log() {
    //     console.log()
    //   }
    // }
    // const user = new User()
    // console.log(user.log())
    // // const fn = (a: any) => 'HelloWorld'
    // console.log(fn(newName))
    // newNameが更新されたらconsole.logにいちいち吐くwatch関数

    // watchの文法 watch(user, (newValue, oldValue) => {
    // 第一引数user:監視対象 第二引数newValue:userが変わったら(watch)実行する関数

    // newNameを監視,実行するのはconsole.log

    // そのままだとx
    // watch(newName, console.log(newName))

    // 第二引数は関数なので()=>関数の形にする。
    // console.logはvoid型の戻り値を持つ(consoleクラスの)メソッド。
    // (ホバーしたら情報出てくる) なので引数なし。()に何も入れない。
    // o
    watch(newName, () => console.log(newName.value))
    return {
      newName,
      nameList,
      honorificTitle,
      honorificNames,
      addName,
      sanMoji,
    }
  },
})
</script>

<!--
<script lang="ts">
export default {
  data() {
    return {
      newName: '',
      nameList: ['伊藤'],
      homeTaList: [],
      xxx: ['a', 'b', 'c'].map((alphabet) => alphabet.toUpperCase()),
    }
  },
  computed: {
    // 敬称つきの名前
    honorificTitle() {
      return this.newName + 'さん'
    },
    honorificNames() {
      return this.nameList.map((name) => name + 'さん')
    },
    nameList2() {
      return [...this.nameList, this.newName]
    },
    sanMoji() {
      return this.nameList.filter((name) => name.length >= 3)
    },
  },
  watch: {
    newName: 'log',
  },
  methods: {
    log() {
      console.log(this.newName)
    },
    HelloWorld() {
      
    },
    mapName() {
      this.nameList.map((namae) => {
        return namae + ' HOMETA'
      })
    },
    nameInList() {
      console.log(this.newName)
      this.nameList.push(this.newName)
      return this.nameList
    },
  },
}
</script>
-->
