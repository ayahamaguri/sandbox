<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-apps',
          title: 'れんしう',
          to: '/rensiu',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-heart-plus',
          title: 'HOMERU',
          to: '/homeru',
        },
        {
          icon: 'mdi-cards-heart',
          title: 'Hometa',
          to: '/hometa',
        },
        {
          icon: 'mdi-account-heart-outline',
          title: 'Homerareta',
          to: '/homerareta',
        },
        {
          icon: 'mdi-crown',
          title: 'Ranking',
          to: '/ranking',
        },
        {
          icon: 'mdi-check',
          title: 'Sintyoku',
          to: '/sintyoku',
        },
        {
          icon: 'mdi-apps',
          title: 'sandbox',
          to: '/sandbox',
        },
        {
          icon: 'mdi-cloud',
          title: 'sorawotobu',
          to: '/sorawotobu',
        },
        {
          icon: 'mdi-apps',
          title: 'Aspect ratio',
          to: '/aspectratio',
        },
        {
          icon: 'mdi-apps',
          title: 'Badges',
          to: '/badges',
        },
        {
          icon: 'mdi-apps',
          title: 'Banners',
          to: '/banners',
        },
        {
          icon: 'mdi-apps',
          title: 'Bars',
          to: '/bars',
        },
        {
          icon: 'mdi-apps',
          title: 'Bottom navigation',
          to: '/bottomnavigation',
        },
        {
          icon: 'mdi-apps',
          title: 'Buttons:FAB',
          to: '/btnsfab',
        },
        {
          icon: 'mdi-apps',
          title: 'Carousels',
          to: '/carousels',
        },
        {
          icon: 'mdi-apps',
          title: 'Chips',
          to: '/chips',
        },
        {
          icon: 'mdi-apps',
          title: 'Groups',
          to: '/groups',
        },
        {
          icon: 'mdi-apps',
          title: 'Hover',
          to: '/hover',
        },
        {
          icon: 'mdi-apps',
          title: 'Lazy',
          to: '/lazy',
        },
        {
          icon: 'mdi-apps',
          title: 'Navigation drawers',
          to: '/navigationdrawers',
        },
        {
          icon: 'mdi-apps',
          title: 'Overlays',
          to: '/overlays',
        },
        {
          icon: 'mdi-apps',
          title: 'Pickers',
          to: '/pickers',
        },
        {
          icon: 'mdi-apps',
          title: 'Skeleton loaders',
          to: '/skeletonloaders',
        },
        {
          icon: 'mdi-apps',
          title: 'Snackbars',
          to: '/snackbars',
        },
        {
          icon: 'mdi-apps',
          title: 'Tabs',
          to: '/tabs',
        },
        {
          icon: 'mdi-apps',
          title: 'Treeview',
          to: '/treeview',
        },
        {
          icon: 'mdi-apps',
          title: 'Virtuai scroller',
          to: '/virtuaiscroller',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'HOMETE!',
    }
  },
}
</script>
