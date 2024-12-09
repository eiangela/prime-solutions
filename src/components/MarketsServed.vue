<template>
  <v-container>
    <v-row class="section-services__container d-flex flex-column">
      <v-col
        cols="12"
        sm="12"
        md="12"
        class="section-services__content-wrapper d-flex flex-column flex-column-reverse flex-md-row align-center"
      >
        <v-col cols="12" sm="10" md="6">
          <h3 class="section-services__title-about mb-6">
            About Eagle Building Company
          </h3>
          <p class="section-services__text mb-6">
            Our mission is to Create Successful Partnerships. By doing so, we
            focus on ensuring a competitive edge and strive to make the building
            process a positive experience for our clients. <br /><br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <v-btn
            rounded="0"
            class="services-section__button mb-5"
            width="180"
            height="60"
            >contact us</v-btn
          >
        </v-col>

        <v-col
          cols="12"
          sm="12"
          md="6"
          class="d-flex flex-column flex-sm-row align-center"
        >
          <v-col
            cols="12"
            sm="6"
            md="6"
            class="section-services__list-container d-flex justify-end flex-column"
          >
            <div class="d-flex align-center justify-center">
              <v-icon class="section-services__icon mr-2"
                >mdi-arrow-right</v-icon
              >
              <span
                class="section-services__title text-uppercase font-weight-bold"
                >Services</span
              >
            </div>
            <div class="d-flex align-center justify-center">
              <v-list class="section-services__list pa-0 ml-5">
                <v-list-item
                  v-for="item in servicesList"
                  :key="item"
                  class="section-services__list-item ma-0"
                >
                  <v-icon class="mr-2" size="10">mdi-circle</v-icon>
                  {{ item.item }}</v-list-item
                >
              </v-list>
            </div>
          </v-col>

          <v-col cols="12" sm="6" md="6" class="d-flex justify-end flex-column">
            <div class="d-flex align-center justify-center">
              <v-icon class="mr-2">mdi-arrow-right</v-icon>
              <span
                class="section-markets__title text-uppercase font-weight-bold no-break"
                >Markets Served</span
              >
            </div>
            <div class="d-flex align-center justify-center">
              <v-list class="pa-0 ml-5">
                <v-list-item
                  v-for="item in marketsList"
                  :key="item"
                  class="section-markets__list-item ma-0"
                >
                  <v-icon class="section-markets__list-icon mr-2" size="10"
                    >mdi-circle</v-icon
                  >
                  {{ item.item }}</v-list-item
                >
              </v-list>
            </div>
          </v-col>
        </v-col>
      </v-col>
    </v-row>

    <v-row class="d-flex flex-column"> </v-row>
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
