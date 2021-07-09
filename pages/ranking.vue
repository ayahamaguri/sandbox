<template>
  <div>
    <slot-sample :readonly="true">
      aaaa
      <template #icon="{ counter, readonly }">
        counter: {{ counter }} {{ readonly }}
        <v-icon>mdi-menu</v-icon>
      </template>
    </slot-sample>
    <v-simple-table dense>
      <template #default>
        <thead>
          <tr>
            <th class="text-left">No</th>
            <th class="text-left">Name</th>
            <th class="text-left">HOMERARETA_POINT</th>
            <th class="text-left">HOMETE!</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="syain in syainList" :key="syain.no">
            <!-- {{計算結果}}<v-btn @click="②関数名(②-1引数)" -->
            <td>{{ syain.no }}</td>
            <td>{{ syain.name }}</td>
            <td>
              {{ syain.home
              }}<v-rating
                size="25"
                dense
                readonly
                :value="Math.ceil(syain.home / 200)"
              ></v-rating>
            </td>
            <v-btn @click="syain.home++">HOMERU</v-btn>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import SlotSample from '~/components/SlotSample.vue'

export default defineComponent({
  components: {
    SlotSample,
  },
  setup() {
    const syainList = ref([
      {
        no: '001',
        name: '伊藤俊介',
        home: 0,
      },
      {
        no: '002',
        name: '松井勇太',
        home: 237,
      },
      {
        no: '003',
        name: '鈴木崇裕',
        home: 262,
      },
      {
        no: '004',
        name: '野田光',
        home: 205,
      },
      {
        no: '005',
        name: '畠中悠',
        home: 656,
      },
      {
        no: '006',
        name: '成田秀平',
        home: 875,
      },
      {
        no: '007',
        name: '上田瞳',
        home: 1392,
      },
    ])

    // const 計算結果の定数名 = (引数)を使った計算結果
    // const homeData = ref([0])
    // const ②関数の定数名 = (②-1引数の宣言) => 関数の中身、計算
    // const pushData = (homeData: number) => rareData.value
    // const 計算結果の定数名 = 関数名((引数) => 戻り値)

    // const rareData = computed(() => homeData.value.map((home) => home + 1))

    // computed=カウンター変数。関数じゃない。refと似たようなもんで計算された仮想的な値を返す。
    // @clickの後は動詞（式）num=1  num+1←代入してないから意味なし。仮にコンソールログしても表示されない num=num+1 num++ console.log (num)
    // const counter = ref(2)
    // const twiceCounter = computed(() => counter.value * 2)
    // const hyoujiData = computed(() => home)

    // computed (関数が引数.callback)
    const rate = computed(() => syainList.value.map((syain) => syain.home))
    const afterRates = computed(() =>
      syainList.value.map((syain) => ({
        no: syain.no,
        rate: Math.ceil(syain.home % 200),
      }))
    )
    const getRate = (home: number) => Math.ceil(home / 200)

    // returnオブジェクト。中のやつは変数として認識される
    return {
      syainList,
      rate,
      afterRates,
      getRate,
      // homeData,
      // counter,
      // twiceCounter,
      // hyoujiData,
    }
  },
})
</script>
