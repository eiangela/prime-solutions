<template>
  <v-container>
    <v-row
      class="d-flex flex-column justify-center align-center flex-md-row justify-md-start"
    >
      <v-col
        cols="12"
        sm="10"
        md="12"
        lg="12"
        class="d-flex flex-column flex-md-row align-end"
      >
        <v-col cols="12" sm="12" md="5">
          <div class="section-image-wrapper">
            <div class="section-image"></div>
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="7" lg="7">
          <v-col cols="12" sm="12" md="12" class="d-flex justify-center pa-0">
            <div class="d-flex flex-column pa-3 pa-sm-0 pa-md-0">
              <h1 class="content-title font-weight-bold mt-5 mt-md-0">
                We do business, not just marketing.
              </h1>
              <p class="content-text mt-5 mb-5 mt-sm-5 mb-sm-5">
                Whether your company looks for a financial consulting,
                investment risks assessments or an interim, HR management, we’re
                ready to provide that for you.
              </p>
            </div>
          </v-col>

          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="12"
            class="pa-0 pa-sm-0 d-flex flex-column flex-sm-row flex-md-row"
          >
            <v-col
              cols="12"
              sm="6"
              md="6"
              lg="6"
              class="pb-md-0"
              v-for="item in items"
              :key="item"
            >
              <v-card
                class="d-flex flex-column align-center pa-3 rounded-lg"
                elevation="5"
              >
                <v-avatar size="80" class="card-avatar">
                  <v-icon class="card-icon" size="40">{{ item.icon }}</v-icon>
                </v-avatar>
                <v-card-title class="card-title text-uppercase font-weight-bold"
                  >{{ item.title }}
                </v-card-title>
                <v-card-text class="card-text text-center">
                  {{ item.text }}
                </v-card-text>
                <v-card-actions>
                  <v-btn class="card-btn font-weight-bold" variant="tonal">
                    more
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-col>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const items = [
  {
    title: "About us",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    icon: "mdi-lightbulb-on-outline",
  },
  {
    title: "What we do",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    icon: "mdi-cog-outline",
  },
];
</script>
