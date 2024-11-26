<template>
  <v-container>
    <v-text-field
      :loading="loading"
      append-inner-icon="mdi-magnify"
      label="Search"
      variant="solo"
      hide-details
      single-line
      @click:append-inner="onClick"
    ></v-text-field>

    <div class="d-flex justify-center mt-5">
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon size="40">mdi-menu</v-icon>
      </v-app-bar-nav-icon>
    </div>
    <v-navigation-drawer
      class="app-drawer text-center"
      v-model="drawer"
      temporary
    >
      <v-list :items="items" class="font-weight-black"> </v-list>
    </v-navigation-drawer>
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
