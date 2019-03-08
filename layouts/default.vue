<template>
  <div>

    <header-component />

    <nuxt />

    <footer-component />

  </div>
</template>

<script>
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";

export default {
  components: {
    FooterComponent,
    HeaderComponent
  }
};
</script>
