<template>
  <v-container>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="10">
        <v-col cols="12">
          <p>Contact Us</p>
        </v-col>

        <v-col cols="12">
          <v-text-field label="Name" variant="underlined"></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field label="Email" variant="underlined"></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea label="Label" variant="underlined"></v-textarea>
          <v-checkbox v-model="checkbox">
            <template v-slot:label>
              <div>
                I agree that
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <a
                      href="https://vuetifyjs.com"
                      target="_blank"
                      v-bind="props"
                      @click.stop
                    >
                      Vuetify
                    </a>
                  </template>
                  Opens in new window
                </v-tooltip>
                is awesome
              </div>
            </template>
          </v-checkbox>
        </v-col>

        <v-col cols="12">
          <v-btn block>Submit</v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="10" class="teste-column">
        <v-col cols="12">
          <p>call us</p>
          <p>1(234) 567-891</p>
          <p>1 (234) 987-654</p>
        </v-col>

        <v-col cols="12">
          <p>location</p>
          <p>
            121 Rock Sreet, 21 Avenue,<br />
            New York, NY 92103-9000
          </p>
        </v-col>

        <v-col cols="12">
          <p>Our top services</p>
          <p>Local transfers</p>
          <p>Airport Transfers</p>
          <p>Excursions and Tours</p>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const checkbox = ref(false);
</script>
