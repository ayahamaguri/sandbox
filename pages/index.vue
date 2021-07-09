<template>
  <div id="iti">
    <slot-sample>
      <template #default>aaaaaa</template>
      <template #subheader>my subheader<v-icon>mdi-car</v-icon></template>
    </slot-sample>
    <v-timeline>
      <v-timeline-item>
        <template #icon>
          <v-avatar>
            <img src="@/assets/PIEN_face.jpg" />
          </v-avatar>
        </template>
        pien
        <template #opposite
          ><v-avatar> <img src="@/assets/PIEN_face.jpg" /> </v-avatar
          >pien</template
        >
      </v-timeline-item>
    </v-timeline>

    <v-timeline>
      <v-timeline-item
        ><v-avatar>
          <img class="img" src="@/assets/PIEN_face.jpg" />
        </v-avatar>
        pien</v-timeline-item
      >

      <v-timeline-item class="text-right"> homerareru </v-timeline-item>
      <v-timeline-item>happy!!!</v-timeline-item>
    </v-timeline>

    <v-container fluid fill-height>
      <!-- fluidを付けることで左右いっぱいにコンテナが広がります -->
      <!-- fill-heightを付けるとここに書いた要素は上下中央寄せで表示されます -->
      <v-footer light padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            お互いのことを尊重するとともに感謝や賞賛を行えるような関係性のチームは、<br />
            働く上でのストレスが少なく、生産性の向上や定着率の向上などが期待できます。<br />
            「褒めること」「褒められること」には人間関係において多くのメリットがあり、<br />
            「褒めること」をシステムとして職場に導入することで、<br />
            従業員のモチベーション向上やコミュニケーション活性化に大いに役立ちます。
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} —
            <strong>consallink</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
      //    items: [ aaa: require('@/assets/PIEN_face.jpg'),]
    }
  },
}
</script>
