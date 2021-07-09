<template>
  <div>
    <v-navigation-drawer></v-navigation-drawer>

    <v-card>
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> v-navi ari </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
          <v-list-item v-for="item in items" :key="item">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.geinin }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <v-card>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> v-navi nasi </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="item in items" :key="item">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.geinin }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const items = ref([
      { geinin: 'Oswald', icon: 'mdi-view-dashboard' },
      { geinin: 'Pekopa', icon: 'mdi-image' },
      { geinin: 'Wagyu', icon: 'mdi-help-box' },
    ])
    return {
      items,
    }
  },
})
</script>
