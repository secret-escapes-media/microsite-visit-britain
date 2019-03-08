<template>
  <div
    class="block image-text"
    :class="{'image-text--reversed' : reversed,'image-text--background': imageHighlightType === 'background'}"
  >

    <div class="image-text__image-container">

      <div
        ref="barTop"
        class="image-text__bar image-text__bar--top"
        :class="{'pre-opacity-animation': preAnimation}"
      ></div>

      <img
        :src="'/visitbritain/'+imageSrc"
        :alt="title"
        ref="image"
        :class="{'pre-opacity-animation': preAnimation}"
      >

      <div
        ref="barBottom"
        class="image-text__bar image-text__bar--bottom"
        :class="{'pre-opacity-animation': preAnimation}"
      ></div>

    </div>

    <div class="image-text__text-container">

      <h3
        ref="title"
        :class="{'pre-opacity-animation': preAnimation}"
      >{{title}}</h3>

      <p
        ref="paragraph"
        :class="{'pre-opacity-animation': preAnimation}"
      >{{paragraph}}</p>

      <a
        v-if="url"
        class="button"
        :class="{'pre-opacity-animation': preAnimation}"
        :href="'/visitbritain/'+url"
        ref="button"
      >See more</a>

      <div
        class="image-text__attributes-container"
        :class="{'pre-opacity-animation': preAnimation}"
        ref="attributes"
      >
        <span
          v-if="attribute1"
          class="image-text__attribute button button--no-transition"
        >{{attribute1}}</span>

        <span
          v-if="attribute2"
          class="image-text__attribute button button--no-transition"
        >{{attribute2}}</span>

        <span
          v-if="attribute3"
          class="image-text__attribute button button--no-transition"
        >{{attribute3}}</span>
      </div>

    </div>

  </div>
</template>

<script>
import { TweenMax } from "gsap/TweenMax";

export default {
  name: "ImageText",
  props: [
    "imageSrc",
    "title",
    "paragraph",
    "url",
    "attribute1",
    "attribute2",
    "attribute3",
    "reversed",
    "imageHighlightType",
    "visible"
  ],
  data() {
    return {
      animated: false
    };
  },
  computed: {
    //Hide all of the elements that will animate in if this isn't the background version
    preAnimation() {
      if (!this.animated) {
        return true;
      }
      return false;
    }
  },
  watch: {
    visible(newVal) {
      if (process.browser) {
        if (newVal === true && this.preAnimation) {
          const {
            image,
            title,
            paragraph,
            button,
            barTop,
            barBottom,
            attributes
          } = this.$refs;

          //Add elements to animate conditinally if they're present
          let toTweenLeft = [title, paragraph];
          let toTweenRight = [image];
          let toTweenBars = [];

          button ? toTweenLeft.push(button) : null;
          attributes ? toTweenLeft.push(attributes) : null;

          barTop ? toTweenBars.push(barTop) : null;
          barBottom ? toTweenBars.push(barBottom) : null;

          let animationDuration = 0.8;
          let animationDelay = 0.2;

          let tweenLeftValue = 100;
          let tweenRightValue = -100;
          let tweenBarsValue = -700;

          //If the block is reversed, animate the elements in from the oposite side
          if (this.reversed) {
            tweenLeftValue = tweenLeftValue * -1;
            tweenRightValue = tweenRightValue * -1;
            tweenBarsValue = tweenBarsValue * -1;
          }

          TweenMax.staggerFromTo(
            toTweenLeft,
            animationDuration,
            { x: tweenLeftValue, opacity: 0 },
            { x: 0, opacity: 1 },
            animationDelay
          );

          TweenMax.staggerFromTo(
            toTweenRight,
            animationDuration,
            { x: tweenRightValue, opacity: 0 },
            { x: 0, opacity: 1 },
            animationDelay
          );

          TweenMax.staggerFromTo(
            toTweenBars,
            1,
            { x: tweenBarsValue, opacity: 0 },
            { x: 0, opacity: 1, ease: Power3.easeOut },
            0.1
          );

          this.animated = true;
        }
      }
    }
  }
};
</script>
