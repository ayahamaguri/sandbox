<template>
  <!-- 砂場 -->
  <div class="Homeru">
    <v-btn @click="membersFilter()">membersFilter</v-btn>
    message: <input v-model="message" />
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>

    <v-container>
      <v-btn color="pink"> Age30 </v-btn>
      <v-row class="red">
        <v-col v-for="n in 15" :key="n" class="green" cols="12" lg="3">
          <v-card>
            <v-card-title>{{ n }}aaaaaaaaaaa</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="text-center">
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Dropdown
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(value, index) in values" :key="index">
            <v-list-item-title>{{ value.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <!-- <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on, attrs }"> -->
    <!-- ↑トリガーになる。v-slot:activator="{ on, attrs }" -->
    <!-- <v-btn 
        elevation="1" 
        color="primary" 
        v-bind="attrs" 
        attes の中身 = {role: button}属性が集まったオブジェクト
           :role="attrs.role" === v-bind:role="attrs.role" 

           v-on="on" 
          on の中身＝イベントが集まったオブジェクト
          {click: () => {}, mousedown: () => {}} 
          clickというプロパティをもつ。プロパティの中身は関数
          
           v-on="on" === v-on:click="on.click" === @click="on.click"

          v-on:mousedown="on.mousedown"
           @click="log(attrs)" >COMMENT</v-btn
        > -->
    <!-- </template>
    </v-dialog> -->
  </div>
  <!-- 拡張for文 -->
  <!-- <ul id="example-2">
     <li v-for="(item←変数。繰り返し処理の対象となる配列の要素,
     index←変数。itemに対応する番号。配列のうち何番目か) in items"> -->
  <!-- <li v-for="(item, index) in items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
  </ul> -->
</template>
<script type="ts">
import { defineComponent, ref} from '@nuxtjs/composition-api'
export default defineComponent({
    setup(){
        const month = ref([
               1,2,3,4,5,6,7,8,9,10,11,12
            ])
        const values = ref([
            {title:'hometa-kazu'},
            {title:'homerareta-kazu'},
            {title:'star-no-kazu'}
        ])
        return {
            month,
            values
        }
    }
})
</script>
<script>
// export default {
//   // Vue3の文法
//   //   setup() {
//   //     const message = ref('Ozwald')
//   //     function shouldShowUsers(member) {
//   //       return member.age > 30
//   //     }
//   //     const shouldShowUsers2 = (member) =>  {
//   //        return member.age > 30
//   //     }
//   //     const reversedMessage = computed(
//   //         () => message.value.split('').reverse().join('')
//   //     )
//   //     console.log(reversedMessage)
//   //   },
//   data() {
//     return {
//       message: 'Ozwald',
//       members: [
//         {
//           name: 'aa',
//           age: 20,
//         },
//         {
//           name: 'bb',
//           age: 30,
//         },
//       ],
//       log: console.log,
//     }
//   },
//   computed: {
//     // 算出 getter 関数
//     reversedMessage() {
//       return this.message.split('').reverse().join('')
//     },
//   },
//   methods: {
//     shouldShowUsers(member) {
//       return member.age > 30
//     },
//     membersFilter() {
//       console.log('this.members', this.members)
//       const filteredMembers = []
//       for (const member of this.members) {
//         if (member.age < 30) {
//           filteredMembers.push(member)
//         }
//       }
//       console.log('filteredMembers', filteredMembers)
//       console.log(
//         'filteredMembers2',
//         this.members.filter((member) => member.age < 30)
//       )
//       console.log(
//         'サバ読み',
//         this.members.map((member) => {
//           return {
//             name: member.name,
//             age: member.age - 3,
//           }
//         })
//       )
//     },
//     sample() {
//       // オブジェクト直下にidとかnameとか＝user.nameで指定できる
//       const user = {
//         id: 'aaa',
//         name: 'A',
//       }
//       // リスト直下には何もない＝idとかnameとか指定できない。指定できるのは番号list[0]だけ。
//       const list = [
//         {
//           id: 'aaa',
//           name: 'A',
//         },
//         {
//           id: 'bbb',
//           name: 'b',
//         },
//       ]
//       // OK ↓オブジェクトのuser
//       console.log(user.name)
//       // NG ↓配列のlist
//       console.log(list[0].name)
//     },
//     reverse() {
//       const message = 'ozwald'
//       console.log('message', message)
//       console.log('message.split("")', message.split(''))
//       console.log('message.split("").reverse()', message.split('').reverse())
//       console.log(
//         'message.split("").reverse().join("")',
//         message.split('').reverse().join('')
//       )
//     },
//   },
// }

// // const products = ref([
// //       {
// //         id: '1',
// //         price: 100,
// //         name: 'おにぎり🍙',
// //       },
// //       {
// //         id: '2',
// //         price: 15000,
// //         name: 'BBQセット',
// //       },
// //     ])
// //     const cart = ref(['2'])
// //     const cartView = computed(() =>
// //       cart.value.map((id) => products.value.find((product) => product.id === id))
// //     )
// //     console.log(cartView.value)
//
</script>
<script lang="ts">
// import { defineComponent, ref } from '@nuxtjs/composition-api'

// export default defineComponent({
//   // props 親から受け取る属性を定義
//   // setup() templateで使うオブジェクトを返す関数
//   name: 'Memberdata',

//   props: {
//     memberno: {
//       type: String,
//       default: '',
//     },
//     membername: {
//       type: String,
//       default: '',
//     },
//     age: {
//       type: Number,
//       default: 0,
//     },
//   },
//   setup() {
//     const shouldShowUsers = (age: number) => {
//       return age > 30
//     }
//     const dialog = ref()
//     const sheet = ref(false)
//     return {
//       shouldShowUsers,
//       sheet,
//       dialog,
//     }
//   },
// })
//
</script>
