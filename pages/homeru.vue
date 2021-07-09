<template>
  <div class="Homeru">
    <!-- <v-btn @click="addMember()">add member</v-btn>
    {{ members }} -->
    <v-col cols="6">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header> TUKAIKATA </v-expansion-panel-header>

          <v-expansion-panel-content>
            <Stepper />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>

    <v-container>
      <!-- members: {{ members }} -->
      <!--  ↑配列 members[] -->
      <v-row justify="center">
        <v-col
          v-for="member in showmembers"
          :key="member.memberno"
          cols="12"
          lg="4"
        >
          <!-- <ul v-if="shouldShowUsers()"></ul> -->
          <!-- <ul v-if="member.age > 30">
            member.membername
          </ul> -->
          <!-- <p v-if="member.age >'30"></p> v-if="member.age > 30"-->
          <!--  ↑オブジェクト member v-for="member in members" で生成したやつ -->
          <!--③ データを送りたい子コンポーネントのタグを用意する-->
          <Cards
            :membername="member.membername"
            :memberno="member.memberno"
            :age="member.age"
          ></Cards>
        </v-col>
      </v-row>
      <!-- <v-list-item v-for="smember in showMembers" :key=""> </v-list-item> -->
    </v-container>
    <v-container>
      <v-pagination v-model="page" :length="hyoujipage" circle></v-pagination>
    </v-container>
  </div>
</template>

<script lang="ts">
// ① 子コンポーネントを親コンポーネントにimportする
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const members = ref([
      {
        memberno: 'No 01',
        membername: '伊藤俊介',
        age: 31,
      },
      {
        memberno: 'No 02',
        membername: '畠中悠',
        age: 33,
      },
      {
        memberno: 'No 03',
        membername: '粗品',
        age: 28,
      },
      {
        memberno: 'No 04',
        membername: '松井勇太',
        age: 37,
      },
      {
        memberno: 'No 05',
        membername: '成田秀平',
        age: 33,
      },
      {
        memberno: 'No 06',
        membername: '大橋のぞみ',
        age: 22,
      },
    ])
    const page = ref(1)
    const perPage = 3
    const showmembers = computed(() =>
      members.value.slice((page.value - 1) * perPage, perPage * page.value)
    )
    // (page.value - 1) * perPage, 前のページの最大数
    // perPage * page.value) ページに表示できる数＊開いているページの
    const hyoujipage = computed(() => Math.ceil(members.value.length / perPage))

    return {
      members,
      perPage,
      showmembers,
      // start,
      // current,
      // getNum,
      page,
      hyoujipage,
      addMember: () =>
        members.value.push({
          memberno: members.value.length.toString(),
          membername: '新参者',
          age: 0,
        }),
    }
  },
})

//
//     length: 0,
//     parPage: 3,
//     pageSize: 3,
//     currentPage: 1,
//     showMembers: [],
//   }
// },

// const pageChange(pageNum: number) {
//     console.log(pageNum)
//     }
// methods: {
//   pageChange(pageNum: number) {
//     // console.log(pageNum)
//     this.showMembers = this.members.slice(
//       this.pageSize * (pageNum - 1),
//       this.pageSize * pageNum
//     )
//   },
// },

// mounted: function(){
// this.length = Math.ceil(this.members.length/this.pageSize);

// this.showMembers = this.members.slice(0,this.pageSize);
// }
//   getPageCount() {
//     return Math.ceil(this.members.length / this.parPage)
//   },
// },
// getPageNum(pageNum) {
//   console.log(pageNum)
// },

//
//  computed: {
//   getItems(pageNum) {
//     const current = this.currentPage * this.parPage
//     const start = current - this.parPage
//     return this.members.slice(start, current)
//   },
// computed: {
//   // 算出 getter 関数
//   reversedMessage() {
//     // `this` は vm インスタンスを指します
//     return this.message.split('').reverse().join('')
//   },
// },
// methods: {
//   shouldShowUsers(member) {
//     return member.age > 30
//   },
// },
</script>
