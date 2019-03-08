<template>
  <div class="block intro-text">

    <p
      v-if="boldParagraph"
      class="large"
    >
      {{boldParagraph}}
    </p>
    <p>
      {{paragraph}}
    </p>

  </div>
</template>

<script>
export default {
  name: "IntroText",
  props: ["boldParagraph", "paragraph"]
};
</script>
