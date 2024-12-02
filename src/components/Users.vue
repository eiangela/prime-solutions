<template>
  <v-container>
    <v-row class="d-flex align-center justify-center mt-5 mb-5">
      <v-col cols="10">
        <div>
          <p class="user-title font-weight-bold text-center mt-5 mb-5">
            What do our users say?
          </p>
        </div>
      </v-col>

      <v-col
        cols="10"
        v-for="(user, index) in opinionUsers"
        :key="user"
        class=""
      >
        <v-card
          :class="{ 'user-card-blue': index === 1 }"
          elevation="10"
          class="d-flex flex-column justify-center align-center rounded-xl"
        >
          <v-card-text
            :class="{ 'user-text-white': index === 1 }"
            class="user-card-text text-center mt-5"
            >{{ user.text }}</v-card-text
          >
          <v-img
            class="rounded-circle mt-5 mb-5"
            :width="170"
            :height="170"
            :src="user.image"
            aspect-ratio="16/9"
            cover
          ></v-img>
          <div class="pa-5 text-center">
            <v-card-title class="user-name text-uppercase font-weight-bold">{{
              user.name
            }}</v-card-title>
            <p
              :class="{ 'user-text-white': index === 1 }"
              class="user-profession text-h6 font-weight-bold mb-5"
            >
              {{ user.profession }}
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import image1 from "@/assets/images/hgghgh.jpg";
import image2 from "@/assets/images/ds.jpg";
import image3 from "@/assets/images/fgfg.jpg";

const opinionUsers = [
  {
    name: "Nat Reynolds",
    profession: "Chief Accountant",
    text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    image: image1,
  },
  {
    name: "Celia Almeda",
    profession: "Secretary",
    text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    image: image2,
  },
  {
    name: "Bob Roberts",
    profession: "Sales Manager",
    text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    image: image3,
  },
];
</script>
