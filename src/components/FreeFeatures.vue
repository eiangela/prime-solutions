<template>
  <v-container>
    <v-row class="features-row d-flex justify-center align-center  mb-5">
      <v-col cols="10" >
        <h2 class="features-title text-center mt-10 mb-5">
          Hosting is even better with all these <br />
          <br />
          <span class="features-title--highlight">FREE</span> features
        </h2>
        <p class="features-description text-center mb-5">
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </p>
      </v-col>

      <v-col cols="10" sm="6" md="4" v-for="(info, index) in infos" :key="info">
        <v-card
          :class="{ 'features-card--highlighted': index === 1 }"
          class="features-card d-flex flex-column align-center justify-center text-center pa-3 rounded-xl"
          elevation="7"
        >
          <v-avatar size="80" class="features-avatar rounded-lg mt-5">
            <v-icon class="features-avatar__icon" size="60">{{
              info.iconTop
            }}</v-icon>
          </v-avatar>
          <v-card-title
            :class="{ 'features-card__title--highlighted': index === 1 }"
            class="features-card__title text-uppercase font-weight-bold"
          >
            {{ info.title }}
          </v-card-title>
          <v-card-text class="features-card__text pa-0 mt-5 mb-5">
            {{ info.text }}
          </v-card-text>
          <v-icon
            :class="{ 'features-card__icon--highlighted': index === 1 }"
            class="features-card__icon mb-10 feature-iconSeta"
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
