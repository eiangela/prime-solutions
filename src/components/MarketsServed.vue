<template>
  <v-container>
    <v-row class="d-flex flex-column">
      <v-col cols="7" class="d-flex align-center justify-center mt-10">
        <v-icon class="mr-2">mdi-arrow-right</v-icon>
        <span class="text-uppercase font-weight-bold markets-icon__title"
          >Services</span
        >
      </v-col>

      <v-col cols="12" class="d-flex justify-end flex-column">
        <v-list class="pa-0 ml-5">
          <v-list-item
            v-for="item in servicesList"
            :key="item"
            class="markets-list__item ma-0"
          >
            <v-icon class="mr-2" size="10">mdi-circle</v-icon>
            {{ item.item }}</v-list-item
          >
        </v-list>
      </v-col>
    </v-row>

    <v-row class="d-flex flex-column">
      <v-col cols="9" class="d-flex align-center justify-center">
        <v-icon class="mr-2">mdi-arrow-right</v-icon>
        <span
          class="text-uppercase font-weight-bold markets-icon__title no-break"
          >Markets Served</span
        >
      </v-col>

      <v-col cols="12" class="d-flex justify-end flex-column">
        <v-list class="pa-0 ml-5">
          <v-list-item
            v-for="item in marketsList"
            :key="item"
            class="markets-list__item ma-0"
          >
            <v-icon class="mr-2" size="10">mdi-circle</v-icon>
            {{ item.item }}</v-list-item
          >
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const servicesList = [
  { item: "Pre-Construction" },
  { item: "Conceptual Planning" },
  { item: "Design/Assist" },
  { item: "General Contracting" },
  { item: "Construction Management" },
];

const marketsList = [
  { item: "Multi-family Residential" },
  { item: "Mixed Use" },
  { item: "Hospitality" },
  { item: "Senior Living" },
  { item: "Townhomes" },
];
</script>
