<template>
  <div
    class="hero"
    :style="{'background-image' : 'url(/visitbritain/'+imageSrc+')'}"
  >

    <div
      class="hero__text"
      ref="heroText"
    >

      <h1 v-if="line1">{{line1}}</h1>

      <br>

      <h1 v-if="line2">{{line2}}</h1>

      <br>

      <h1 v-if="line3">{{line3}}</h1>

    </div>

    <h3
      v-if="showSponsor"
      class="hero__subtext"
      ref="heroSubtext"
    >In Partnership with <img
        src="/visitbritain/great-britain.svg"
        alt="Great britain & northern ireland"
      ></h3>

  </div>

</template>

<script>
import { TweenMax } from "gsap/TweenMax";

export default {
  name: "Hero",
  props: [
    "pageName",
    "imageSrc",
    "line1",
    "line2",
    "line3",
    "showSponsor",
    "visible"
  ],
  data() {
    return {
      animated: false
    };
  },
  watch: {
    visible(newVal) {
      if (newVal === true && this.animated === false) {
        const { heroText, heroSubtext } = this.$refs;

        let toTween = [heroText];

        //Only tween the subheading if it's on this hero
        heroSubtext ? toTween.push(heroSubtext) : null;

        TweenMax.staggerFromTo(
          toTween,
          0.8,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1 },
          0.6
        );

        this.animated = true;
      }
    }
  }
};
</script>
