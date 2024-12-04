<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-col
        cols="12"
        md="12"
        class="d-flex flex-column flex-sm-row flex-md-row align-center"
      >
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            :loading="loading"
            append-inner-icon="mdi-magnify"
            label="Search"
            variant="solo"
            hide-details
            single-line
            @click:append-inner="onClick"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="8"
          class="d-flex justify-center align-center justify-sm-end justify-md-end"
        >
          <div class="d-flex justify-center mt-sm-0">
            <v-app-bar-nav-icon @click="drawer = !drawer">
              <v-icon size="40">mdi-menu</v-icon>
            </v-app-bar-nav-icon>
            <v-navigation-drawer
              class="navigation-drawer text-center"
              v-model="drawer"
              temporary
            >
              <v-list :items="items" class="font-weight-black drawer-list">
              </v-list>
            </v-navigation-drawer>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watch } from "vue";
const drawer = ref(false);
const group = ref(null);
const loaded = ref(false);
const loading = ref(false);

const onClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
};

const items = [
  {
    title: "Foo",
    value: "foo",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
];

watch(group, () => {
  drawer.value = false;
});
</script>
