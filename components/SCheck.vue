<template>
  <div class="SCheck">
    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="Math.ceil((models.length / items.length) * 100)"
      color="primary"
    >
      {{ Math.ceil((models.length / items.length) * 100) + '%' }}
    </v-progress-circular>
    <v-card class="mx-auto" max-width="500">
      <v-list shaped>
        <v-list-item-group v-model="models" multiple>
          <template v-for="(item, i) in items">
            <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>

            <v-list-item
              v-else
              :key="`item-${i}`"
              dense
              :value="item"
              active-class="deep-purple--text text--accent-4"
            >
              <template #default="{ active }">
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-checkbox
                    :input-value="active"
                    color="deep-purple accent-4"
                  ></v-checkbox>
                </v-list-item-action>
              </template>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>
<script type="ts">
import {  defineComponent, ref} from '@nuxtjs/composition-api'
export default defineComponent({
  setup(){
    const items = ref([
      'Alerts',
      'Application',
      'Aspect ratio',
      'Avatars',
      'Badges',
      'Banners',
      'Bars',
      'Bottom navigation',
      'Bottom sheets',
      'Breadcrumbs',
      'Buttons',
      'Buttons:FAB',
      'Calendars',
      'Cards',
      'Carousels',
      'Chips',
      'Dialogs',
      'Dividers',
      'Expansion panels',
      'Footers',
      'Form inputs & controls',
      'Grid system',
      'Groups',
      'Hover',
      'Icons',
      'Images',
      'Lazy',
      'Lists',
      'Menus',
      'Navigation drawers',
      'Overlays',
      'Pagination',
      'Parallax',
      'Pickers',
      'Progress',
      'Ratings',
      'Sheets',
      'Skeleton loaders',
      'Snackbars',
      'Steppers',
      'Subheaders',
      'Tables',
      'Tabs',
      'Timelines',
      'Tooltips',
      'Treeview',
      'Virtuai scroller',
    ])
    const models = ref([
      'Alerts',
      'Application',
      'Aspect ratio',
      'Avatars',
      'Badges',
      'Banners',
      'Bars',
      'Breadcrumbs',
      'Bottom navigation',
      'Bottom sheets',
      'Buttons',
      'Buttons:FAB',
      'Calendars',
      'Cards',
      'Carousels',
      'Chips',
      'Dialogs',
      'Dividers',
      'Expansion panels',
      'Footers',
      'Form inputs & controls',
      'Grid system',
      'Groups',
      'Icons',
      'Images',
      'Lists',
      'Menus',
      'Navigation drawers',
      'Pagination',
      'Parallax',
      'Pickers',
      'Progress',
      'Ratings',
      'Sheets',
      'Skeleton loaders',
      'Snackbars',
      'Steppers',
      'Subheaders',
      'Tables',
      'Tabs',
      'Timelines',
      'Tooltips',
    ])
    return {
      items,
      models,
    }
  }
})
</script>
