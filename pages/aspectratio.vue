<template>
  <div>
    <v-responsive></v-responsive>

    <v-card>
      <img src="@/assets/totoro022.jpg" />
    </v-card>

    <v-card>
      <v-responsive :aspect-ratio="16 / 9">
        <img src="@/assets/totoro022.jpg" />
      </v-responsive>
    </v-card>
    <v-card>
      <v-responsive :aspect-ratio="16 / 9" :height="300">
        <img src="@/assets/totoro022.jpg" />
      </v-responsive>
    </v-card>
  </div>
</template>
