<template>
  <div>
    <v-banner elevation="10"></v-banner>

    <v-checkbox v-model="v0" label="Visible"></v-checkbox>
    <v-banner v-model="v0" single-line transition="slide-y-transition">
      No Internet connection
      <template #actions="{ dismiss }">
        <v-btn text color="primary" @click="dismiss"> Dismiss </v-btn>
        <v-btn text color="primary"> Retry </v-btn>
      </template>
    </v-banner>

    <v-checkbox v-model="v1" label="Visible"></v-checkbox>
    <v-banner
      v-model="v1"
      single-line
      transition="slide-y-transition"
      elevation="24"
    >
      No Internet connection
      <template #actions="{ dismiss }">
        <v-btn text color="primary" @click="dismiss"> Dismiss </v-btn>
        <v-btn text color="primary"> Retry </v-btn>
      </template>
    </v-banner>
  </div>
</template>
<script>
export default {
  data: () => ({
    v0: true,
    v1: true,
  }),
}
</script>
