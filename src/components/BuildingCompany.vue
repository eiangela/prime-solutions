<template>
  <v-container>
    <v-row class="d-flex flex-column align-center mb-5">
      <v-col cols="10">
        <h3 class="build-title mb-6">About Eagle Building Company</h3>
        <p class="build-text">
          Our mission is to Create Successful Partnerships. By doing so, we
          focus on ensuring a competitive edge and strive to make the building
          process a positive experience for our clients. <br /><br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </v-col>

      <v-col cols="10">
        <v-btn rounded="0" class="build-btn mb-5" width="180" height="60"
          >contact us</v-btn
        >
      </v-col>

      <v-col cols="10" v-for="infos in infosNumber" :key="infos">
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
