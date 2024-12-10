<template>
  <v-container>
    <v-row class="d-flex align-center justify-center mt-10">
      <v-col cols="10">
        <v-col cols="12">
          <p class="text-center font-weight-bold contact__title">Contact Us</p>
        </v-col>

        <v-col cols="12">
          <div class="form__label font-weight-bold">Name</div>
          <v-text-field single-line variant="underlined">
            <template v-slot:label>
              <span class="form__input-label">Enter your name</span>
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="12">
          <div class="form__label font-weight-bold">E-mail</div>
          <v-text-field single-line variant="underlined">
            <template v-slot:label>
              <span class="form__input-label">Enter a valid email address</span>
            </template>
          </v-text-field>
        </v-col>

        <v-col cols="12">
          <div class="form__label font-weight-bold">Message</div>
          <v-textarea variant="underlined"></v-textarea>

          <v-checkbox v-model="checkbox">
            <template v-slot:label>
              <div>
                I accept the
                <a
                  class="text-decoration-none"
                  href="https://vuetifyjs.com"
                  target="_blank"
                  @click.stop
                >
                  <span class="form__terms-link"> Terms of Service </span>
                </a>
              </div>
            </template>
          </v-checkbox>
        </v-col>

        <v-col cols="12" class="pt-0">
          <v-btn
            block
            size="x-large"
            class="form__submit-btn font-weight-bold rounded-lg"
            >Submit</v-btn
          >
        </v-col>
      </v-col>
    </v-row>
    <br /><br /><br />
    <v-row class="d-flex align-center justify-center mb-10">
      <v-col cols="9" class="contact__info-column text-center">
        <v-col cols="12">
          <p class="text-uppercase font-weight-bold contact__info-title mb-5">
            call us
          </p>
          <p class="contact__info-service">1(234) 567-891</p>
          <p class="contact__info-service">1 (234) 987-654</p>
        </v-col>
        <br />
        <v-col cols="12">
          <p class="text-uppercase font-weight-bold contact__info-title mb-5">
            location
          </p>
          <p class="contact__info-service">
            121 Rock Sreet, 21 Avenue,<br />
            New York, NY 92103-9000
          </p>
        </v-col>
        <br />
        <v-col cols="12">
          <p class="text-uppercase font-weight-bold contact__info-title mb-5">
            Our top services
          </p>
          <p class="font-weight-bold contact__info-service">Local transfers</p>
          <p class="font-weight-bold contact__info-service">
            Airport Transfers
          </p>
          <p class="font-weight-bold contact__info-service">
            Excursions and Tours
          </p>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const checkbox = ref(false);
</script>