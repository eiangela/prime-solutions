<template>
  <v-container>
    <v-row class="d-flex justify-center align-center mb-5">
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

      <v-col cols="10" v-for="(info, index) in infos" :key="info">
        <v-card
          :class="{ 'card-blue': index === 1 }"
          class="d-flex flex-column align-center justify-center text-center pa-3 rounded-xl"
          elevation="7"
        >
          <v-avatar size="80" class="feature-avatar rounded-lg mt-5">
            <v-icon class="feature-avatar__icon" size="60">{{
              info.iconTop
            }}</v-icon>
          </v-avatar>
          <v-card-title
            :class="{ 'card-title-white': index === 1 }"
            class="feature-card-title text-uppercase font-weight-bold"
          >
            {{ info.title }}
          </v-card-title>
          <v-card-text class="feature-card-text pa-0 mt-5 mb-5">
            {{ info.text }}
          </v-card-text>
          <v-icon
            :class="{ 'card-iconSeta-white': index === 1 }"
            class="mb-10 feature-iconSeta"
          >
            {{ info.iconSeta }}</v-icon
          >
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
