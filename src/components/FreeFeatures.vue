<template>
  <v-container>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="10">
        <h2 class="text-center mt-10 mb-5 feature-title">
          Hosting is even better with all these <br />
          <br />
          <span class="feature-free">FREE</span> features
        </h2>
        <p class="feature-text">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>
      </v-col>

      <v-col cols="10" v-for="info in infos" :key="info">
        <v-card>
          <v-avatar>
            <v-icon>{{ info.iconTop }}</v-icon>
          </v-avatar>
          <v-card-title> {{ info.title }} </v-card-title>
          <v-card-text> {{ info.text }} </v-card-text>
          <v-icon> {{ info.iconSeta }}</v-icon>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const infos = [
  {
    iconTop: "mdi-database-outline",
    title: "Unlimited storage",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    iconSeta: "mdi-chevron-down",
  },
  {
    iconTop: "mdi-all-inclusive",
    title: "Unmetered bandwidth",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    iconSeta: "mdi-chevron-down",
  },
  {
    iconTop: "mdi-web",
    title: "Domain registration",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    iconSeta: "mdi-chevron-down",
  },
];
</script>
