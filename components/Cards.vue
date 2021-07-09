<template>
  <div>
    <v-card class="member" max-width="344" outlined>
      <v-container fluid fill-height>
        <v-list-item three-line>
          <v-list-item-content>
            <!-- <div class="data" v-for="(datas, i) in datas> -->
            <!-- <div class="data"  v-for="(datas, i) in datas" :key="i" > -->
            <!-- <v-subheader v-for="data in datas"
                  :key="data">{{ memberno }}</v-subheader> -->
            <!-- <div v-for="(memberdata, n) in memberdata" :key="n" class="data"> -->
            <!--④属性を指定してデータ呼び出し-->
            <div class="data">
              <v-subheader>{{ memberno }}</v-subheader>
              <v-list-item-title> {{ membername }}</v-list-item-title>
              <p>{{ age }}</p>
            </div>
            <v-container fluid fill-height>
              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-container>
          </v-list-item-content>
        </v-list-item>
        <v-container>
          <v-layout column justify-center>
            <div class="text-center">
              <v-tooltip top>
                <template #activator="{ on, attrs }">
                  <v-icon color="orange" dark v-bind="attrs" v-on="on">
                    mdi-star-face
                  </v-icon>
                </template>
                <span>HOMETE!</span>
              </v-tooltip>
              <v-bottom-sheet v-model="sheet" inset>
                <template #activator="{ on, attrs }">
                  <v-btn
                    elevation="1"
                    class="homebtn"
                    color="orange"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="shouldShowUsers(age)"
                  >
                    HOMERU!
                  </v-btn>
                </template>
                <v-sheet class="text-center" height="200px">
                  <v-btn
                    class="mt-6"
                    text
                    color="error"
                    @click="sheet = !sheet"
                  >
                    close
                  </v-btn>
                  <div class="my-3">HOMEMASITA!</div>
                </v-sheet>
              </v-bottom-sheet>
            </div>
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template #activator="{ on, attrs }">
                <v-btn
                  class="ma-5"
                  elevation="5"
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  >COMMENT</v-btn
                >
              </template>

              <v-card class="pa-5">
                <v-card-title class="text-h5 grey lighten-2 pa-5">
                  PLEASE COMMENT
                </v-card-title>
                <v-divider></v-divider>
                <v-text-field
                  class="ma-5"
                  label="NAME"
                  placeholder="名前の入力は任意です"
                ></v-text-field>
                <v-textarea label="COMMENT" class="ma-5"></v-textarea>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    SEND
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
        </v-container>
      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  // ③propsで受け取る属性を定義

  name: 'Memberdata',
  props: {
    memberno: {
      type: String,
      default: '',
    },
    membername: {
      type: String,
      default: '',
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const shouldShowUsers = (age: number) => {
      return age > 30
    }
    const dialog = ref(false)
    const sheet = ref(false)
    return {
      shouldShowUsers,
      sheet,
      dialog,
    }
  },
})
</script>
