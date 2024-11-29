<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div>
          <p>What do our users say?</p>
        </div>
      </v-col>

      <v-col cols="12" v-for="(user, index) in opinionUsers" :key="user">
        <v-card>
          <v-card-text>{{ user.text }}</v-card-text>
          <v-img
            class="rounded-circle mt-5"
            :width="200"
            :height="200"
            :src="user.image"
            aspect-ratio="16/9"
            cover
          ></v-img>
          <v-card-title>{{ user.title }}</v-card-title>
          <v-card-subtitle>{{ user.profession }}</v-card-subtitle>
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
    title: "Nat Reynolds",
    profession: "Chief Accountant",
    text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    image: image1,
  },
  {
    title: "Celia Almeda",
    profession: "Secretary",
    text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    image: image2,
  },
  {
    title: "Bob Roberts",
    profession: "Sales Manager",
    text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    image: image3,
  },
];
</script>
