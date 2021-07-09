<template>
  <v-container>
    <!-- fluidを付けることで左右いっぱいにコンテナが広がります -->
    <!-- fill-heightを付けるとここに書いた要素は上下中央寄せで表示されます -->
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1"> ARIGATO- </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          kossori<br />HOMERU
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3">
          motto<br />HOMERU
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="4"> Happy! </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 2"> next </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 3"> next </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 4"> next </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="4">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary" @click="e1 = 1"> next </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      e1: 1,
    }
  },
}
</script>
