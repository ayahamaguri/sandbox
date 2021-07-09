<template>
  <div>
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          WATCH VALUE
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(value, index) in values" :key="index">
          <v-list-item-title>{{ value.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-sheet>
      <v-col cols="3">
        <v-select v-model="month" :items="month" label="month"></v-select>
      </v-col>
    </v-sheet>
    <v-sheet><v-calendar class="ma-5"> </v-calendar></v-sheet>
  </div>
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
