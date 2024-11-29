<script setup>
import WhatWeDo from "../components/WhatWeDo.vue";
import FreeFeatures from "../components/FreeFeatures.vue";
import MarketsServed from "../components/MarketsServed.vue";
import BuildingCompany from "../components/BuildingCompany.vue";
import OurTeam from "../components/OurTeam.vue";
import PricingTable from "../components/PricingTable.vue";
import Brands from "../components/Brands.vue";
</script>

<template>
  <section class="what-we-do">
    <WhatWeDo />
  </section>

  <section class="free-features">
    <FreeFeatures />
  </section>

  <section class="markets-served">
    <MarketsServed />
  </section>

  <section class="building-company">
    <BuildingCompany />
  </section>

  <section class="our-team">
    <OurTeam />
  </section>

  <section class="princing-table">
    <PricingTable />
  </section>

  <section class="brands bg-primary">
    <Brands />
  </section>
</template>
