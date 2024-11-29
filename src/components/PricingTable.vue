<template>
  <v-container>
    <v-row class="d-flex align-center justify-center mb-5 mt-5">
      <v-col cols="12">
        <div class="d-flex align-center justify-center flex-column pa-6">
          <span class="princing-title font-weight-bold mb-5"
            >Pricing Table</span
          >
          <p class="princing-text text-center">
            Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Eu
            tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Cras
            semper auctor neque vitae tempus quam.
          </p>
        </div>
      </v-col>

      <v-col cols="10" v-for="(infoCard, index) in cardInfos" :key="infoCard">
        <v-card
          :class="{ 'p-card-blue': index === 1 }"
          class="d-flex flex-column justify-center align-center pa-5 rounded-xl"
          elevation="6"
        >
          <v-card-title class="p-card-title text-uppercase font-weight-bold"
            >{{ infoCard.title }}
          </v-card-title>
          <span class="p-card-value font-weight-bold">{{
            infoCard.valor
          }}</span>
          <v-card-subtitle class="pa-4 p-card-subtitle">{{
            infoCard.subtitle
          }}</v-card-subtitle>
          <v-divider :thickness="2" class="w-100"></v-divider>
          <v-card-text class="p-card-text">{{ infoCard.option1 }}</v-card-text>
          <v-divider :thickness="2" class="w-100"></v-divider>
          <v-card-text class="p-card-text">{{ infoCard.option2 }}</v-card-text>
          <v-divider :thickness="2" class="w-100"></v-divider>
          <v-card-text class="p-card-text">{{ infoCard.option3 }}</v-card-text>
          <v-divider :thickness="2" class="w-100"></v-divider>
          <v-card-text class="p-card-text">{{ infoCard.option4 }}</v-card-text>

          <v-btn
            class="p-card-btn rounded-sm mt-5"
            width="150"
            icon="mdi-arrow-right"
            elevation="0"
          ></v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const cardInfos = [
  {
    title: "Design",
    valor: "$19,99",
    subtitle: "Heading Here",
    option1: "Beautifully Designed",
    option2: "100% Responsive",
    option3: "Smooth Interactions",
    option4: "Great Support",
  },
  {
    title: "Development",
    valor: "$59,99",
    subtitle: "Heading Here",
    option1: "Beautifully Designed",
    option2: "100% Responsive",
    option3: "Smooth Interactions",
    option4: "Great Support",
  },
  {
    title: "Customization",
    valor: "$119,99",
    subtitle: "Heading Here",
    option1: "Beautifully Designed",
    option2: "100% Responsive",
    option3: "Smooth Interactions",
    option4: "Great Support",
  },
];
</script>
