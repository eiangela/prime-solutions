<template>
  <v-container>
    <v-row class="d-flex flex-column align-center mb-5 flex-md-row">
      <v-col cols="12" sm="12" md="12" v-for="infos in infosNumber" :key="infos">
        <v-card
          class="d-flex flex-column align-center pa-5 rounded-xl"
          elevation="8"
        >
          <v-card-title class="build-number font-weight-bold">{{
            infos.title
          }}</v-card-title>
          <v-card-text class="build-sub-text text-uppercase font-weight-bold">{{
            infos.subtitle
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const infosNumber = [
  { title: "16", subtitle: "ranking" },
  { title: "120", subtitle: "clients" },
  { title: "977", subtitle: "cases" },
  { title: "40", subtitle: "awards" },
];
</script>
