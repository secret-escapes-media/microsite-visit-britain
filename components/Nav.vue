<template>
  <nav :class="type+'-nav'">

    <span>
      <a
        href="/visitbritain/"
        :class="{'active': currentUrl === '/' }"
      >Overview</a>
    </span>

    <span>
      <a
        href="/visitbritain/city"
        :class="{'active': currentUrl === '/city' || currentUrl === '/city/' }"
      >City</a>
    </span>

    <span>
      <a
        href="/visitbritain/coast"
        :class="{'active': currentUrl === '/coast' || currentUrl === '/coast/'}"
      >Coast</a>
    </span>

    <span>
      <a
        href="/visitbritain/country"
        :class="{'active': currentUrl === '/country' || currentUrl === '/country/' }"
      >Country</a>
    </span>

    <span>
      <a
        href="/visitbritain/competition"
        :class="{'active': currentUrl === '/competition' || currentUrl === '/competition/' }"
      >Competition</a>
    </span>

    <span>
      <a
        href="/visitbritain/offers"
        :class="{'active': currentUrl === '/offers' || currentUrl === '/offers/' }"
      >Offers</a>
    </span>

  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: ["type", "visible"],
  computed: {
    currentUrl() {
      return this.$route.path;
    }
  }
};
</script>
