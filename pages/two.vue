<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">click me</v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 blue lighten-2"
          >ヘルプを見ますか？</v-card-title
        >
        <v-card-text
          ><v-text-field v-model="input" placeholder="yes or no"></v-text-field
        ></v-card-text>

        <v-card-actions
          ><v-btn color="primary" @click="dialog = false">cancel</v-btn>

          <v-dialog v-model="dialogYes" width="400">
            <template #activator="{ on, attrs }">
              <v-btn v-bind="attrs" color="primary" v-on="on" @click="log()"
                >ok</v-btn
              ></template
            >

            <v-card v-if="input === 'yes'"
              ><v-card-title>うまぴょい！うまぴょい！</v-card-title
              ><v-card-actions
                ><v-btn @click="dialogYes = false"
                  >うまだっち</v-btn
                ></v-card-actions
              ></v-card
            >

            <v-card v-else-if="input === 'no'"
              ><v-card-title>120億を失いました</v-card-title
              ><v-card-actions
                ><v-btn @click="dialogYes = false"
                  >俺の馬券が！</v-btn
                ></v-card-actions
              ></v-card
            >
            <v-card v-else
              ><v-card-title>yesかnoでこたえてください</v-card-title
              ><v-card-actions
                ><v-btn @click="dialogYes = false"
                  >もういちど</v-btn
                ></v-card-actions
              ></v-card
            >
          </v-dialog></v-card-actions
        >
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const dialog = ref(false)
    const input = ref('')
    const log = () => console.log(input.value)

    const dialogYes = ref(false)

    return {
      dialog,
      input,
      log,
      dialogYes,
    }
  },
})
</script>
