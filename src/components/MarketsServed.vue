<template>
  <v-container>
    <v-row class="d-flex flex-column">
      <v-col cols="4" class="d-flex align-center justify-center">
        <v-icon class="mr-2">mdi-arrow-right</v-icon>
        <span class="text-uppercase font-weight-bold markets-icon__title"
          >Services</span
        >
      </v-col>

      <v-col cols="12" class="d-flex justify-end flex-column">
        <v-list class="pa-0">
          <v-list-item
            v-for="item in listItems"
            :key="item"
            class="markets-list__item ma-0"
          >
            {{ item.item }}</v-list-item
          >
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const listItems = [
  {
    item: "Pre-Construction",
  },
  {
    item: "Conceptual Planning",
  },
  {
    item: "Design/Assist",
  },
  {
    item: "General Contracting",
  },
  {
    item: "Construction Management",
  },
];
</script>
