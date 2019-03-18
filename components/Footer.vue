<template>
  <footer class="footer">

    <nav-component type="footer" />

    <section class="footer__bottom-section">

      <div class="footer__logos-container">
        <div class="footer__logo footer__logo--secret-escapes">
          <img
            src="/visitbritain/logo.png"
            alt="Secret escapes"
          >
        </div>
        <div class="footer__logo">
          <img
            src="/visitbritain/great-britain.svg"
            alt="Secret escapes"
          >
        </div>

      </div>

      <div class="footer__links">
        <a
          target="_blank"
          href="/visitbritain/terms-and-conditions"
        >Terms and conditions</a>
      </div>

      <div
        class="footer__copyright"
        id="copyright"
      >
        <small>
          &copy;
          Copyright
          <span>
            {{year}}
          </span>
          Secret escapes
        </small>

      </div>
    </section>

  </footer>
</template>

<script>
import NavComponent from "@/components/Nav";

export default {
  name: "FooterComponent",
  components: {
    NavComponent
  },
  data() {
    return {
      year: "",
      hidePromo: false
    };
  },
  mounted() {
    this.year = new Date().getFullYear();

    this.hidePromo = this.$route.path === "/competition";
  }
};
</script>
