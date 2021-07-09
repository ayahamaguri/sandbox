<template>
  <div class="SBar">
    <v-app>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-subheader class="pl-0"> Sintyoku Bar </v-subheader>
            <v-slider v-model="slider" :thumb-size="24" thumb-label="always">
              <template #thumb-label="{ value }">
                {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
              </template>
            </v-slider>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      satisfactionEmojis: [
        '😭',
        '😢',
        '☹️',
        '🙁',
        '😐',
        '🙂',
        '😊',
        '😁',
        '😄',
        '😍',
      ],
      slider: 45,
    }
  },
}
</script>
