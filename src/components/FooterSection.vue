<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="pa-2">
          <p class="footer__section-text">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
        </div>
      </v-col>
      <v-col class="footer__section-text text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-container>
</template>
