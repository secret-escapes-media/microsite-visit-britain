<template>
  <div class="block hover-image">

    <div class="hover-image__text-container">

      <span
        class="hover-image__text hover-image__text--city"
        :class="{'hover-image__text--active': activeImage === 'city'}"
        @mouseover="()=> changeActiveCity('city')"
      ><a href="/visitbritain/city">City</a></span>
      <span
        class="hover-image__text hover-image__text--coast"
        :class="{'hover-image__text--active': activeImage === 'coast'}"
        @mouseover="()=> changeActiveCity('coast')"
      ><a href="/visitbritain/coast">Coast</a></span>
      <span
        class="hover-image__text hover-image__text--country"
        :class="{'hover-image__text--active': activeImage === 'country'}"
        @mouseover="()=> changeActiveCity('country')"
      ><a href="/visitbritain/country">Country</a></span>

    </div>

    <div class="hover-image__image-container">
      <!-- 
      <div class="hover-image__mask-container">

        <div
          ref="mask"
          class="hover-image__mask"
        ></div>

      </div> -->

      <transition name="fade">

        <img
          v-show="activeImage === 'city'"
          src="/visitbritain/hover-city.jpg"
          alt=""
        >

      </transition>

      <transition name="fade">

        <img
          v-show="activeImage === 'coast'"
          src="/visitbritain/hover-coast.jpg"
          alt=""
        >

      </transition>

      <transition name="fade">

        <img
          v-show="activeImage === 'country'"
          src="/visitbritain/hover-country.jpg"
          alt=""
        >

      </transition>

    </div>

  </div>
</template>

<script>
// import { TimelineLite } from "gsap/TimelineLite";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";
// import { CSSPlugin } from "gsap/CSSPlugin";

export default {
  name: "HoverImage",
  props: ["paragraph1", "paragraph2", "visible"],
  data() {
    return {
      activeImage: "city"
      // animating: false
    };
  },
  methods: {
    changeActiveCity(newActiveCity) {
      let $this = this;

      // if (this.animating === false) {
      // this.animating = true;

      // let oldActiveCity = $this.activeImage;

      $this.activeImage = newActiveCity;

      // const timeline = new TimelineLite();

      // const { mask } = this.$refs;

      // const oldActiveCityElement = CSSRulePlugin.getRule(
      //   ".hover-image__text--" + oldActiveCity + ":after"
      // );

      // const newActiveCityElement = CSSRulePlugin.getRule(
      //   ".hover-image__text--" + newActiveCity + ":after"
      // );

      // console.log("newActiveCity", oldActiveCity);
      // console.log("newActiveCity", newActiveCity);

      // console.log(oldActiveCityElement);
      // console.log(newActiveCityElement);

      // timeline
      //   .to(mask, 0.4, { width: "100%", ease: Power3.easeOut }, "slideOut")
      //   .call(() => {
      //     // $this.activeImage = newActiveCity;
      //   })
      //   .to(mask, 0.4, { x: "120%", delay: 0.1, ease: Power3.easeOut })
      //   .set(mask, { clearProps: "all" })
      // .to(
      //   oldActiveCityElement,
      //   1,
      //   {
      //     cssRule: {
      //       transform: "translateX(-100px)"
      //     }
      //   },
      //   "slideOut"
      // )
      // .to(
      //   newActiveCityElement,
      //   1,
      //   {
      //     cssRule: {
      //       transform: "translateX(0)"
      //     },
      //     delay: 0.5
      //   },
      //   "slideIn"
      // )
      // // .set(oldActiveCityElement, { clearProps: "all" })
      // .call(() => {
      //   $this.animating = false;
      // });
      // }
    }
  }
};
</script>
