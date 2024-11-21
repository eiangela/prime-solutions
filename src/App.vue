<script setup>
import AppBar from "./components/AppBar.vue";
import HomeIndex from "./pages/HomeIndex.vue";
</script>

<template>
  <v-app>
    <header>
      <AppBar />
    </header>

    <main>
      <HomeIndex />
    </main>
  </v-app>
</template>
