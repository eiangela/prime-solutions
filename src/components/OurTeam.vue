<template>
  <v-container>
    <v-row class="mt-5 mb-5">
      <v-col cols="12" class="text-center">
        <span class="team-title font-weight-bold">Meet our team</span>
      </v-col>

      <v-col
        cols="12"
        md="6"
        class="d-md-flex flex-md-column flex-lg-row align-md-center align-lg-center justify-lg-center"
        v-for="team in teams"
        :key="team"
      >
        <v-col
          cols="9"
          md="6"
          lg="5"
          class="d-flex flex-column align-center align-sm-start"
        >
          <v-img
            class="rounded-circle mt-5"
            :width="180"
            :height="180"
            aspect-ratio="16/9"
            cover
            :src="team.image"
          ></v-img>
        </v-col>

        <v-col cols="11" md="10" lg="5">
          <div class="d-flex flex-column ml-5 ml-md-0">
            <span class="mt-5 team-profession">{{ team.profession }} </span>
            <span
              class="font-weight-light mt-5 text-uppercase font-weight-bold team-name"
              >{{ team.name }}</span
            >
            <span class="mt-5 team-text">{{ team.text }}</span>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import image1 from "@/assets/images/pexels-photo-9775676.jpeg";
import image2 from "@/assets/images/pexels-photo-9811069.jpeg";

const teams = [
  {
    name: "Paul Brown jr",
    profession: "creative leader",
    text: "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
    image: image1,
  },
  {
    name: "mike Richmond",
    profession: "creative leader",
    text: "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
    image: image2,
  },
];
</script>
