<script setup>
import AppBar from "./components/AppBar.vue";
import HomeIndex from "./pages/HomeIndex.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <v-app>
    <header>
      <AppBar />
    </header>

    <v-main>
      <HomeIndex />
    </v-main>

    <v-footer class="footer-section">
      <FooterSection />
    </v-footer>
  </v-app>
</template>
