<template>
  <v-container>
    <v-row class="d-flex flex-column align-center justify-center mt-5 mb-5">
      <v-col cols="12">
        <div class="d-flex flex-column align-center justify-center text-center">
          <span class="brand-title font-weight-bold"
            >Large payments volume or unique business model?</span
          ><br />
          <p class="brand-text">
            Phasellus sed efficitur dolor, et ultricies sapien. Quisque
            fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In
            ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
          </p>
        </div>
      </v-col>

      <v-col cols="7" v-for="(image, index) in images" :key="index">
        <div class="d-flex justify-center align-center bg-primary mt-5">
          <v-img
            :width="200"
            aspect-ratio="16/9"
            cover
            :src="image.image"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import imgAmazon from "@/assets/images/brands/logo-amazon.svg";
import imgBinance from "@/assets/images/brands/logo-binance.svg";
import imgEvga from "@/assets/images/brands/logo-evga.svg";
import imgTesla from "@/assets/images/brands/logo-tesla.svg";
import imgSony from "@/assets/images/brands/logo-sony.svg";
import imgCrocs from "@/assets/images/brands/logo-crocs-wordmark.svg";
import imgCrolla from "@/assets/images/brands/logo-crolla.svg";
import imgAsos from "@/assets/images/brands/logo-asos.svg";
import imgBegners from "@/assets/images/brands/logo-bergners.svg";
import imgUnimed from "@/assets/images/brands/logo-unimed.svg";
import imgMedium from "@/assets/images/brands/logo-medium-wordmark.svg";
import imgAndroid from "@/assets/images/brands/logo-android.svg";

const images = [
  { image: imgAmazon },
  { image: imgBinance },
  { image: imgEvga },
  { image: imgTesla },
  { image: imgSony },
  { image: imgCrocs },
  { image: imgCrolla },
  { image: imgAsos },
  { image: imgBegners },
  { image: imgUnimed },
  { image: imgMedium },
  { image: imgAndroid },
];
</script>
